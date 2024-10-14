# mars_photos.py
import requests
from api_config import fetch_data
import matplotlib.pyplot as plt
from PIL import Image
from io import BytesIO

def get_mars_photos(sol=1000):
    url = f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
    params = {'sol': sol}
    data = fetch_data(url, params)
    
    if data:
        photos = data['photos'][:5]  # İlk 5 fotoğrafı alalım
        for i, photo in enumerate(photos):
            print(f"Fotoğraf URL: {photo['img_src']}")
            img = requests.get(photo['img_src'])
            img = Image.open(BytesIO(img.content))
            plt.figure(i)
            plt.imshow(img)
            plt.title(f"Fotoğraf: {photo['earth_date']} - {photo['camera']['full_name']}")
            plt.axis('off')
        plt.show()
    else:
        print("Veri alınamadı.")
