from myApp.models import Entry

__author__ = 'Saad Bin Shahid'

from rest_framework import serializers


class EntrySerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()

    class Meta:
        model = Entry