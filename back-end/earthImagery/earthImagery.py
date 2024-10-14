# earth_imagery.py
from api_config import fetch_data

def get_earth_imagery(lat, lon, date="2023-01-01"):
    url = "https://api.nasa.gov/planetary/earth/assets"
    params = {'lat': lat, 'lon': lon, 'date': date}
    data = fetch_data(url, params)
    
    if data:
        print(f"Görüntü URL: {data['url']}")
        print(f"Çekildiği Tarih: {data['date']}\n")
