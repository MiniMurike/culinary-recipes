from django.urls import path, include
from rest_framework import routers
from .views import CategoryViewSet, DishViewSet


router = routers.DefaultRouter()
router.register(r'category', CategoryViewSet, basename="category")
router.register(r'dish', DishViewSet, basename="dish")

urlpatterns = [
    path('', include(router.urls))
]
