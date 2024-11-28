from django.db import models
from django.conf import settings

# Modelo para un favorito.
class Favourite(models.Model):
    url = models.TextField()
    name = models.CharField(max_length=200)
    status = models.TextField()
    last_location = models.TextField()
    first_seen = models.TextField()

    # Asociamos el favorito con el usuario en cuestión.
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'url', 'name', 'status', 'last_location', 'first_seen'),)


class Usuario(models.Model):
    nombre_usuario = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    contraseña = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre_usuario