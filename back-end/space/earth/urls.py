from django.urls import path
from .views import EarthDataView

urlpatterns = [
    path('data/', EarthDataView.as_view(), name='earth-data'),
]
