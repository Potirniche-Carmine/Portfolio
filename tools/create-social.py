"""Render the site's Open Graph card using local type and vector shapes."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
font_dirs = [Path('/System/Library/Fonts/Supplemental'), Path('C:/Windows/Fonts'),
             Path('/usr/share/fonts/truetype/liberation2')]
font = next((folder / name for folder in font_dirs
             for name in ['Arial.ttf', 'arial.ttf', 'LiberationSans-Regular.ttf']
             if (folder / name).is_file()), None)
if font is None:
    raise RuntimeError('Arial or Liberation Sans is required to render the social card.')
regular = lambda size: ImageFont.truetype(str(font), size)
image = Image.new('RGB',(1200,630),'#e8e8e8')
draw = ImageDraw.Draw(image)
# The same neutral continuous surface and quiet type hierarchy as the homepage.
draw.rounded_rectangle((30,30,1170,600),radius=36,fill='#f3f3f3',outline='#ffffff',width=2)
draw.text((78,83),'Carmine Potirniche',font=regular(68),fill='#202020')
draw.text((81,205),'Secure systems. Thoughtful architecture.',font=regular(32),fill='#555555')
draw.text((81,258),'From architecture to release.',font=regular(27),fill='#686868')
draw.text((81,299),'C / Rust / Go / TypeScript',font=regular(27),fill='#686868')
draw.line((81,440,1119,440),fill='#d5d5d5',width=1)
draw.text((81,478),'Crytica Security / Umbratic / GamePack',font=regular(25),fill='#333333')
draw.text((81,530),'Software engineer · Reno, Nevada',font=regular(21),fill='#686868')
draw.text((817,530),'carminepotirniche.com',font=regular(21),fill='#686868')
image.save(root/'assets/images/social-card.png', optimize=True)
