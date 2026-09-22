"""Render the site's Open Graph card using local type and vector shapes."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path(__file__).resolve().parents[1]
fonts = Path('C:/Windows/Fonts')
bold = lambda size: ImageFont.truetype(str(fonts / 'arialbd.ttf'), size)
regular = lambda size: ImageFont.truetype(str(fonts / 'arial.ttf'), size)
image = Image.new('RGB',(1200,630),'#141516')
draw = ImageDraw.Draw(image)
draw.text((68,61),'Software engineer / Reno, Nevada',font=regular(25),fill='#a3a4a3')
draw.text((63,173),'Carmine',font=regular(90),fill='#e8e7e3')
draw.text((63,273),'Potirniche.',font=regular(90),fill='#e8e7e3')
draw.text((68,414),'Founder of Umbratic. Engineer at Crytica Security.',font=regular(27),fill='#a3a4a3')
draw.line((68,510,1132,510),fill='#343638',width=1)
draw.text((68,544),'Umbratic / UpDrafted / Infernal',font=regular(23),fill='#a3a4a3')
draw.text((843,544),'carminepotirniche.com',font=regular(23),fill='#c9b795')
image.save(root/'assets/images/social-card.png', optimize=True)
