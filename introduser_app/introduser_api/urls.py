from rest_framework.routers import DefaultRouter
from .views import CustomUserViewSet

router = DefaultRouter()
router.register(r'users', CustomUserViewSet, basename='userprofile')

urlpatterns = router.urls

# https://www.tailopez.com/personalityresult.php?id=602995