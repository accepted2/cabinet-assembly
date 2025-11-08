from django.contrib import admin

from .models import Favorite
from .models import Product
from .models import ProductImage


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'type', 'is_liked')
    list_filter = ('type', 'is_liked')
    search_fields = ('title', 'description')
    inlines = [ProductImageInline]  # 👈 Вот это добавляет возможность загружать несколько фото


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ('product', 'image')


@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ('session_key', 'product', 'added_at')
