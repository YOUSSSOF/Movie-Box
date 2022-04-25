from cgitb import lookup
from . import views
from rest_framework_nested.routers import DefaultRouter, NestedDefaultRouter

router = DefaultRouter()

router.register('movies', views.MovieViewSet)
router.register('genres', views.GenreViewSet)

review_nested_router = NestedDefaultRouter(router, 'movies', lookup='movie')
review_nested_router.register(
    'reviews', views.ReviewViewSet, basename='movie-reviews')

urlpatterns = router.urls + review_nested_router.urls
