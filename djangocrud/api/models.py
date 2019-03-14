from django.db import models

# Create your models here.
class Video(models.Model):
    name = models.CharField(max_length=32)
    detail = models.CharField(max_length=256)
    VideoUrl = models.URLField()
    def __str__(self):
        return self.name