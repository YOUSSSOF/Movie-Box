from rest_framework.viewsets import ModelViewSet
from movies import serilizers
from movies.models import Genre, Movie, Review
from movies.serilizers import GenreSerializer, MovieInfoSerilizaer, MovieSerilizaer, ReviewSerializer

# Create your views here.


class MovieViewSet(ModelViewSet):
    queryset = Movie.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return MovieInfoSerilizaer
        return MovieSerilizaer


class GenreViewSet(ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class ReviewViewSet(ModelViewSet):

    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Review.objects.filter(movie_id=self.kwargs['movie_pk'])

    def get_serializer_context(self):
        return {'movie_id': self.kwargs['movie_pk']}
