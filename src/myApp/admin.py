from django.contrib import admin
from myApp.models import Entry


@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    pass