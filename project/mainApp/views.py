from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed
from .models import Category, Dish
from .serializers import CategorySerializer, DishSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def create(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')

    def update(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')

    def destroy(self, request, *args, **kwargs):
        raise MethodNotAllowed('POST')


class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

    def get_queryset(self):
        queryset = Dish.objects.all()
        category_name = self.request.query_params.get("category")
        if category_name is None:
            return queryset

        category_obj = get_object_or_404(Category, name=category_name)
        queryset = queryset.filter(category=category_obj.id)

        return queryset

        # try:
        #     category_obj = Category.objects.get(name=category)
        #     queryset = queryset.filter(category=category_obj.id)
        # except:
        #     pass
        # finally:
        #     return queryset
