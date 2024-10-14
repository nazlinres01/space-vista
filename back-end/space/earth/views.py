from rest_framework.views import APIView
from rest_framework.response import Response
from .models import EarthData
from .serializers import EarthDataSerializer

class EarthDataView(APIView):
    def get(self, request):
        earth_data = EarthData.objects.first()  # İlk veriyi al
        serializer = EarthDataSerializer(earth_data)
        return Response(serializer.data)

    def post(self, request):
        serializer = EarthDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
