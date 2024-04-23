from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Dish(models.Model):
    name = models.CharField(max_length=128)
    category = models.ForeignKey(
        to=Category,
        on_delete=models.CASCADE
    )
    ingredients = models.TextField()
    cooking_desc = models.TextField()

    def __str__(self):
        return self.name
