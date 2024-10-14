# asteroids.py
import matplotlib.pyplot as plt
from api_config import fetch_data

def get_near_earth_asteroids():
    url = "https://api.nasa.gov/neo/rest/v1/feed"
    params = {'start_date': '2023-01-01', 'end_date': '2023-01-07'}
    data = fetch_data(url, params)
    
    if data:
        asteroid_data = data['near_earth_objects']
        asteroid_count = [len(asteroid_data[date]) for date in asteroid_data]
        dates = list(asteroid_data.keys())
        
        # Asteroit sayısını görselleştirme
        plt.figure(figsize=(10,5))
        plt.bar(dates, asteroid_count, color='b', label='Asteroit Sayısı')
        plt.title("Dünya'ya Yakın Asteroitler")
        plt.xlabel("Tarih")
        plt.ylabel("Asteroit Sayısı")
        plt.xticks(rotation=45)
        plt.legend()
        plt.tight_layout()
        plt.show()
    else:
        print("Veri alınamadı.")
