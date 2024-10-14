# apod.py
from api_config import fetch_data
import matplotlib.pyplot as plt
import requests
from PIL import Image
from io import BytesIO

def get_apod():
    url = "https://api.nasa.gov/planetary/apod"
    data = fetch_data(url)
    
    if data:
        print(f"Başlık: {data['title']}")
        print(f"Tarih: {data['date']}")
        print(f"Açıklama: {data['explanation']}")
        
        # Fotoğrafı görselleştirme
        img = requests.get(data['url'])
        img = Image.open(BytesIO(img.content))
        plt.imshow(img)
        plt.title(f"APOD: {data['title']} - {data['date']}")
        plt.axis('off')
        plt.show()
    else:
        print("Veri alınamadı.")
