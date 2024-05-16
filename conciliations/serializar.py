from  rest_framework import serializers
from .models import Conciliation, ConciliationHistory, BookData, BankData

# The serializers.py file is used to convert complex data types, such as querysets and model instances, to native Python datatypes that can then be easily rendered into JSON, XML or other content types.
class BookDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookData
        fields = '__all__'


class BankDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BankData
        fields = '__all__'


class ConciliationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conciliation
        fields = '__all__'


class ConciliationHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ConciliationHistory
        fields = '__all__'