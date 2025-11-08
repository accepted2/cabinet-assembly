from django.db import models


def product_image_path(instance, filename):
    product_type = instance.product.type
    product_title = instance.product.title.replace(' ', '_')
    return f"products/{product_type}/{product_title}/{filename}"


class Product(models.Model):
    PRODUCT_TYPES = [
        ('wardrobes', 'шкафы'),
        ('kitchens', 'кухни'),
        ('tables', 'столы'),
        ('cabinets', 'тумбы'),
        ('hallways', 'прихожки'),
    ]

    title = models.CharField(max_length=255)
    type = models.CharField(max_length=50, choices=PRODUCT_TYPES)
    description = models.TextField(blank=True)
    is_liked = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def main_image(self):
        first_image = self.images.first()
        if first_image:
            return first_image.image.url
        return 'products/default.jpg'


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to=product_image_path, )

    def __str__(self):
        return f"Фото для {self.product.title}"


class Favorite(models.Model):
    session_key = models.CharField(max_length=40, null=True, blank=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    added_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('session_key', 'product')

    def __str__(self):
        return f"{self.session_key or 'anonymous'} -> {self.product.title}"
