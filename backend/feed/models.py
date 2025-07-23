from django.db import models
from django.conf import settings


class Meal(models.Model):
    author = models.IntegerField()
    title = models.CharField(max_length=100)
    description = models.TextField()
    location = models.CharField(max_length=255, null=True, blank=True)
    image = models.ImageField(upload_to="meal_images/", null=True, blank=True)
    kcalories = models.PositiveIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
