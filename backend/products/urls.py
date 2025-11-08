from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('wardrobes/', views.wardrobes, name='wardrobes'),
    path('kitchens/', views.kitchens, name='kitchens'),
    path('tables/', views.tables, name='tables'),
    path('cabinets/', views.cabinets, name='cabinets'),
    path('hallways/', views.hallways, name='hallways'),
    path('hallways/', views.hallways, name='hallways'),

    path('favorites/', views.favorite_products, name='favorite-products'),
    path('favorites/toggle/<int:product_id>/', views.toggle_favorite, name="toggle-favorite"),
    path('product-info/<int:product_id>/', views.product_info, name="product-info")

]
