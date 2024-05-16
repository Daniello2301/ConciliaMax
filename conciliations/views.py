from rest_framework import viewsets
from .serializar import BookDataSerializer, BankDataSerializer, ConciliationSerializer, ConciliationHistorySerializer
from .models import BookData, BankData, Conciliation, ConciliationHistory

# Create your views here.
class BookDataViewSet(viewsets.ModelViewSet):
    serializer_class = BookDataSerializer
    queryset = BookData.objects.all()
    
class BankDataViewSet(viewsets.ModelViewSet):
    serializer_class = BankDataSerializer
    queryset = BankData.objects.all()
    
class ConciliationViewSet(viewsets.ModelViewSet):
    serializer_class = ConciliationSerializer
    queryset = Conciliation.objects.all()
    
class ConciliationHistoryViewSet(viewsets.ModelViewSet):
    serializer_class = ConciliationHistorySerializer
    queryset = ConciliationHistory.objects.all()
