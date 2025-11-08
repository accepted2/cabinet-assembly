from .models import Favorite


def liked_products(request):
    if not request.session.session_key:
        request.session.create()
    session_key = request.session.session_key
    liked_ids = Favorite.objects.filter(session_key=session_key).values_list("product_id", flat=True)
    return {'liked_products_ids': list(liked_ids)}
