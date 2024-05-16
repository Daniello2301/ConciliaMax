from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import BookDataViewSet, BankDataViewSet, ConciliationViewSet, ConciliationHistoryViewSet


router = routers.DefaultRouter()
router.register(r'book_data', BookDataViewSet)
router.register(r'bank_data', BankDataViewSet)
router.register(r'conciliation', ConciliationViewSet)
router.register(r'conciliation_history', ConciliationHistoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('docs/', include_docs_urls(title='Conciliations API')),
]