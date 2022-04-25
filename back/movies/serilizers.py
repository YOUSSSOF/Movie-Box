from rest_framework import serializers
from .models import Genre, Movie, Review 
# Review


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['id', 'title']


class MovieSerilizaer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = ['id', 'title', 'country', 'desc', 'poster',
                  'released_year', 'rotten_rate', 'imdb_rate', 'genres', 'trailer', 'tag', 'is_liked']


class MovieInfoSerilizaer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True)

    class Meta:
        model = Movie
        fields = ['id', 'title', 'country', 'desc', 'poster',
                  'released_year', 'rotten_rate', 'imdb_rate', 'genres', 'trailer', 'tag',
                  'is_liked']


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'author', 'email', 'content']

    def create(self, validated_data):
        print(self.context['movie_id'])
        return Review.objects.create(movie_id=self.context['movie_id'], **validated_data)
