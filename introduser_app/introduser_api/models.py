from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    audio_file = models.FileField(upload_to='files/', null=True, blank=True, verbose_name="")

     # Add related_name to resolve clash
    groups = models.ManyToManyField('auth.Group', related_name='customuser_set', blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='customuser_set', blank=True)

    def __str__(self):
        return self.username