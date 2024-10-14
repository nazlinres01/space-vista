# mars_photos.py
import requests
from api_config import fetch_data

def get_mars_photos(sol=1000):
    url = f"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos"
    params = {'sol': sol}
    data = fetch_data(url, params)
    
    if data:
        photos = data['photos']
        for photo in photos[:5]:  # İlk 5 fotoğrafı listeleyelim
            print(f"Fotoğraf URL: {photo['img_src']}")
            print(f"Çekildiği Kamera: {photo['camera']['full_name']}")
            print(f"Çekildiği Tarih: {photo['earth_date']}\n")
