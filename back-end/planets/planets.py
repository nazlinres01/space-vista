# planets.py
import matplotlib.pyplot as plt
from api_config import fetch_data

def get_planet_data():
    url = "https://api.le-systeme-solaire.net/rest/bodies/"
    data = fetch_data(url)
    
    if data:
        planets = [body for body in data['bodies'] if body['isPlanet']]
        planet_names = [planet['englishName'] for planet in planets]
        planet_radii = [planet['meanRadius'] for planet in planets]
        
        # Gezegenlerin yarıçaplarını görselleştirme
        plt.figure(figsize=(10, 5))
        plt.bar(planet_names, planet_radii, color='skyblue')
        plt.title("Güneş Sistemi Gezegenleri - Yarıçap Karşılaştırması")
        plt.ylabel("Yarıçap (km)")
        plt.xticks(rotation=45)
        plt.show()
    else:
        print("Veri alınamadı.")
