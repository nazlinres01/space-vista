# exoplanets.py
from api_config import fetch_data

def get_exoplanets():
    url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync"
    query = "select+pl_name,pl_orbital_period,pl_rade,st_dist+from+ps"
    params = {'query': query, 'format': 'json'}
    data = fetch_data(url, params)
    
    if data:
        for planet in data[:5]:  # İlk 5 gezegeni listele
            print(f"Gezegen Adı: {planet['pl_name']}")
            print(f"Yörüngesel Dönem: {planet['pl_orbital_period']} gün")
            print(f"Yarıçap: {planet['pl_rade']} Dünya yarıçapı")
            print(f"Yıldızdan Uzaklık: {planet['st_dist']} ışık yılı\n")
