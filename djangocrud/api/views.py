from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import VideoSerializer,UserSerializer
from .models import Video
from rest_framework.permissions import (AllowAny,IsAuthenticated,IsAdminUser,IsAuthenticatedOrReadOnly)

class VideoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
