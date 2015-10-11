from django.shortcuts import render
from rest_framework import viewsets
from django.views.generic.base import TemplateView

from myApp.models import Entry
from myApp.serializers import EntrySerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer


class HomePageView(TemplateView):
    template_name = "index.html"
