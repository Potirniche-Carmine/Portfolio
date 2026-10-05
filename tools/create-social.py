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
image = Image.new('RGB',(1200,630),'#141516')
draw = ImageDraw.Draw(image)
draw.text((68,61),'Software engineer / Reno, Nevada',font=regular(25),fill='#a3a4a3')
draw.text((63,173),'Carmine',font=regular(90),fill='#e8e7e3')
draw.text((63,273),'Potirniche.',font=regular(90),fill='#e8e7e3')
draw.text((68,414),'Founder of Umbratic. Engineer at Crytica Security.',font=regular(27),fill='#a3a4a3')
draw.line((68,510,1132,510),fill='#343638',width=1)
draw.text((68,544),'Systems design / Product development',font=regular(23),fill='#a3a4a3')
draw.text((843,544),'carminepotirniche.com',font=regular(23),fill='#afc7df')
image.save(root/'assets/images/social-card.png', optimize=True)
