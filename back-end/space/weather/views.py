from django.shortcuts import render

import requests
from django.conf import settings
from django.http import JsonResponse

def get_insight_weather():
    api_key = settings.NASA_API_KEY
    url = f"https://api.nasa.gov/insight_weather/?api_key={api_key}&feedtype=json&ver=1.0"
    response = requests.get(url)
    data = response.json()
    return data

def insight_weather_view(request):
    weather_data = get_insight_weather()
    return JsonResponse(weather_data)
