from django.db import models

# Create your models here.

class BookData(models.Model):
    id= models.AutoField(primary_key=True)
    date = models.DateField()
    type = models.CharField(max_length=50)
    documentNumber = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.id} - {self.date} - {self.type} - {self.documentNumber} - {self.description} - {self.amount}'
    
    class Meta:
        db_table = 'book_data'
        verbose_name = 'Book Data'
        verbose_name_plural = 'Book Data'
        ordering = ['date']

class BankData(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField()
    type = models.CharField(max_length=50)
    documentNumber = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f'{self.id} - {self.date} - {self.type} - {self.documentNumber} - {self.description} - {self.amount}'
    
    class Meta:
        db_table = 'bank_data'
        verbose_name = 'Bank Data'
        verbose_name_plural = 'Bank Data'
        ordering = ['date']


class Conciliation(models.Model):
    id = models.AutoField(primary_key=True)
    accountNumber = models.BigIntegerField()
    date = models.DateField()
    bank = models.TextField()
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    BookId = models.ForeignKey(BookData, on_delete=models.CASCADE)
    BankId = models.ForeignKey(BankData, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.id} - {self.accountNumber} - {self.date} - {self.bank} - {self.amount} - {self.BookId} - {self.BankId} - {self.created_at} - {self.updated_at}'

    class Meta:
        db_table = 'conciliations'
        verbose_name = 'Conciliation'
        verbose_name_plural = 'Conciliations'
        ordering = ['date']


class ConciliationHistory(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.DateField()
    status = models.CharField(max_length=50)
    description = models.TextField()
    ConciliationId = models.ForeignKey(Conciliation, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id} - {self.date} - {self.status} - {self.description} - {self.ConciliationId}'
    
    class Meta:
        db_table = 'conciliation_history'
        verbose_name = 'Conciliation History'
        verbose_name_plural = 'Conciliation History'
        ordering = ['date']