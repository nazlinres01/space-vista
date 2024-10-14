# stars.py
import matplotlib.pyplot as plt
from api_config import fetch_data

def get_sun_data():
    url = "https://api.le-systeme-solaire.net/rest/bodies/sun"
    data = fetch_data(url)
    
    if data:
        print(f"Güneş Hakkında Bilgiler:")
        print(f"Yarıçap: {data['meanRadius']} km")
        print(f"Kütle: {data['mass']['massValue']} x 10^{data['mass']['massExponent']} kg")
        print(f"Yüzey Sıcaklığı: {data['avgTemp']} K")
        print(f"Yerçekimi: {data['gravity']} m/s²")

        # Görselleştirme - Güneş Yüzey Sıcaklığı
        plt.bar(["Sun"], [data['avgTemp']], color='orange')
        plt.title("Güneş Yüzey Sıcaklığı")
        plt.ylabel("Sıcaklık (Kelvin)")
        plt.show()
    else:
        print("Veri alınamadı.")
