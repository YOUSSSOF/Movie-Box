# Generated by Django 4.0.4 on 2022-04-22 11:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_rename_release_year_movie_released_year_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='genres',
            field=models.ManyToManyField(null=True, related_name='movies', to='movies.genre'),
        ),
    ]