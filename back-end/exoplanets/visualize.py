# exoplanets.py
import matplotlib.pyplot as plt
import pandas as pd
from api_config import fetch_data

def get_exoplanets():
    url = "https://exoplanetarchive.ipac.caltech.edu/TAP/sync"
    query = "select+pl_name,pl_orbital_period,pl_rade,st_dist+from+ps"
    params = {'query': query, 'format': 'json'}
    data = fetch_data(url, params)
    
    if data:
        # Dış gezegen verilerini Pandas DataFrame içine alalım
        planets_df = pd.DataFrame(data[:10])  # İlk 10 gezegen
        print(planets_df[['pl_name', 'pl_orbital_period', 'pl_rade', 'st_dist']])
        
        # Yarıçap ve uzaklık grafiği
        plt.figure(figsize=(10,5))
        plt.scatter(planets_df['pl_rade'], planets_df['st_dist'], color='g')
        plt.title("Dış Gezegenler: Yarıçap ve Yıldızdan Uzaklık")
        plt.xlabel("Gezegen Yarıçapı (Dünya Yarıçapı)")
        plt.ylabel("Yıldızdan Uzaklık (Işık Yılı)")
        plt.grid(True)
        plt.show()
    else:
        print("Veri alınamadı.")
