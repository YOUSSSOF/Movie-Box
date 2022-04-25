from django.db import models

# Create your models here.


class Genre(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title


class Movie(models.Model):

    TAG_CHOICES = [
        ('f', 'featured'),
        ('n', 'new')
    ]

    title = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    desc = models.TextField()
    poster = models.ImageField(upload_to='movies/posters/')
    is_liked = models.BooleanField(default=False)
    released_year = models.PositiveIntegerField()
    rotten_rate = models.PositiveIntegerField()
    imdb_rate = models.DecimalField(max_digits=4, decimal_places=2)
    trailer = models.FileField(upload_to='movies/trailers/', null=True)
    tag = models.CharField(max_length=1, choices=TAG_CHOICES, null=True)
    genres = models.ManyToManyField(
        Genre, related_name='movies')


class Review(models.Model):
    author = models.CharField(max_length=255)
    content = models.TextField()
    email = models.CharField(max_length=255)
    movie = models.ForeignKey(
        Movie, on_delete=models.CASCADE, related_name='reviews')
