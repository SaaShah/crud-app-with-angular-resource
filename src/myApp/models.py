from django.db import models


# Create your models here.
class Entry(models.Model):
    name = models.TextField()
    desc = models.TextField()