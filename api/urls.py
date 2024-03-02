from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.getNotes, name='getNotes'),
    path('note/create/', views.createNote, name='createNote'),
    path('note/<str:id_note>/update/', views.updateNote, name='updateNote'),
    path('note/<str:id_note>/delete/', views.deleteNote, name='deleteNote'),
    path('note/<str:id_note>/', views.getNote, name='getNote'),
]
