# weather/urls.py

from django.urls import path
from .views import insight_weather_view

urlpatterns = [
    path('insight-weather/', insight_weather_view, name='insight_weather'),
]
