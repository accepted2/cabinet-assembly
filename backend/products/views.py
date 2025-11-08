from django.http import JsonResponse
from django.shortcuts import render

from .models import Product, Favorite


def get_liked_products(request):
    if not request.session.session_key:
        request.session.create()
    session_key = request.session.session_key
    return Favorite.objects.filter(session_key=session_key).values_list("product_id", flat=True)


def favorite_products(request):
    if not request.session.session_key:
        request.session.create()

    session_key = request.session.session_key
    favorites = Favorite.objects.filter(session_key=session_key).select_related('product')
    products = [fav.product for fav in favorites]

    liked_ids = get_liked_products(request)

    return render(request, 'favorite-products.html', {
        'products': products,
        'liked_products_ids': liked_ids,

    })


def toggle_favorite(request, product_id):
    if not request.session.session_key:
        request.session.create()

    session_key = request.session.session_key
    product = Product.objects.get(id=product_id)

    favorite, created = Favorite.objects.get_or_create(
        session_key=session_key,
        product=product
    )

    if not created:
        favorite.delete()
        return JsonResponse({"status": "removed"})

    return JsonResponse({"status": "added"})


def product_info(request, product_id):
    product = Product.objects.get(id=product_id)
    return render(request, 'product-info.html', context={'product': product})


def index(request):
    return render(request, 'index.html')


def wardrobes(request):
    products = Product.objects.filter(type='wardrobes')
    return render(request, 'wardrobes.html', {'products': products})


def kitchens(request):
    products = Product.objects.filter(type='kitchens')
    return render(request, 'kitchens.html', {'products': products})


def tables(request):
    products = Product.objects.filter(type='tables')
    return render(request, 'tables.html', {'products': products})


def cabinets(request):
    products = Product.objects.filter(type='cabinets')
    return render(request, 'cabinets.html', {'products': products})


def hallways(request):
    products = Product.objects.filter(type='hallways')
    return render(request, 'hallway.html', {'products': products})
