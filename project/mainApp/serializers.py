from rest_framework import serializers
from .models import Category, Dish


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class DishSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Dish
        fields = ['id', 'name', 'category', 'ingredients', 'cooking_desc']

    def to_representation(self, instance):
        rep = super(DishSerializer, self).to_representation(instance)
        rep['category'] = instance.category.name

        return rep
