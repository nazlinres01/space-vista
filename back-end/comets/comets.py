# comets.py
import matplotlib.pyplot as plt
from api_config import fetch_data

def get_comets():
    url = "https://api.le-systeme-solaire.net/rest/bodies/halley"
    data = fetch_data(url)
    
    if data:
        print(f"Halley Kuyruklu Yıldızı Bilgileri:")
        print(f"Yarıçap: {data['meanRadius']} km")
        print(f"Yörünge Süresi: {data['sideralOrbit']} gün")

        # Görselleştirme - Kuyruklu yıldızın yörünge süresi
        plt.bar(["Halley"], [data['sideralOrbit']], color='blue')
        plt.title("Halley Kuyruklu Yıldızı Yörünge Süresi")
        plt.ylabel("Gün")
        plt.show()
    else:
        print("Veri alınamadı.")
