# api_config.py
import requests

API_KEY = "YOUR_NASA_API_KEY"  # NASA API anahtarınızı buraya ekleyin

def fetch_data(url, params=None):
    if params is None:
        params = {}
    params['api_key'] = API_KEY
    response = requests.get(url, params=params)
    
    if response.status_code == 200:
        return response.json()
    else:
        print(f"API isteği başarısız oldu: {response.status_code}")
        return None
