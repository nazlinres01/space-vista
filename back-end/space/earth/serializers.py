from rest_framework import serializers
from .models import EarthData

class EarthDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = EarthData
        fields = '__all__'
