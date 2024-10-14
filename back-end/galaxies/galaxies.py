# galaxies.py
import matplotlib.pyplot as plt

def visualize_galaxies():
    galaxies = {
        "Milky Way": 105700,    # ışık yılı
        "Andromeda": 220000,    # ışık yılı
        "Triangulum": 60000,    # ışık yılı
        "Messier 87": 120000,   # ışık yılı
    }
    
    names = list(galaxies.keys())
    sizes = list(galaxies.values())

    # Galaksilerin boyutlarını görselleştirme
    plt.figure(figsize=(10, 5))
    plt.bar(names, sizes, color='purple')
    plt.title("En Büyük Galaksilerin Büyüklüğü")
    plt.ylabel("Çap (Işık Yılı)")
    plt.xticks(rotation=45)
    plt.show()
