# moons.py
import matplotlib.pyplot as plt
from api_config import fetch_data

def get_moon_data():
    url = "https://api.le-systeme-solaire.net/rest/bodies/moon"
    data = fetch_data(url)
    
    if data:
        print(f"Ay Hakkında Bilgiler:")
        print(f"Yarıçap: {data['meanRadius']} km")
        print(f"Kütle: {data['mass']['massValue']} x 10^{data['mass']['massExponent']} kg")
        print(f"Yerçekimi: {data['gravity']} m/s²")

        # Görselleştirme - Ay'ın kütlesi ve yerçekimi
        plt.bar(["Moon"], [data['gravity']], color='grey')
        plt.title("Ay Yerçekimi")
        plt.ylabel("Yerçekimi (m/s²)")
        plt.show()
    else:
        print("Veri alınamadı.")
