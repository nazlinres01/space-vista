from django.db import models

class EarthData(models.Model):
    population = models.BigIntegerField()
    area = models.FloatField()  # km² cinsinden
    gravity = models.FloatField()  # m/s² cinsinden
    rotation_period = models.FloatField()  # saat cinsinden
    revolution_period = models.FloatField()  # gün cinsinden

    def __str__(self):
        return f"Earth Data: Population {self.population}, Area {self.area} km²"
