from django.shortcuts import render
from rest_framework import viewsets
from .models import Meal
from .serializers import MealSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class MealViewSet(viewsets.ModelViewSet):
    queryset = Meal.objects.all()
    serializer_class = MealSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
