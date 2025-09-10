
from PIL import Image, ImageDraw

def create_image(width, height, color, file_path):
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    img.save(file_path)

# Create hero background
create_image(1200, 600, '#f8f5f2', '/home/ubuntu/repos/cake/images/hero-bg.jpg')

# Create cake placeholders
create_image(300, 200, '#d2691e', '/home/ubuntu/repos/cake/images/cake1.png') # Chocolate
create_image(300, 200, '#9b2226', '/home/ubuntu/repos/cake/images/cake2.png') # Red Velvet
create_image(300, 200, '#ff7f50', '/home/ubuntu/repos/cake/images/cake3.png') # Carrot
