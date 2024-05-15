from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .serializers import UserSerializer
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

from django.shortcuts import get_object_or_404

# Create your views here.
@api_view(['POST'])
def login(request):
    
    # Get the user
    user = get_object_or_404(User, username=request.data['username'])

    # Check if the password is correct
    if not user.check_password(request.data['password']):
        return Response({'message': 'Bad Request'}, status=status.HTTP_400_BAD_REQUEST)

    # Get the token for the user
    token, created = Token.objects.get_or_create(user=user)

    # Create a user serializer
    serializer = UserSerializer(user)

    # Return the token and the user
    return Response({'token': token.key, "user": serializer.data})


#################################################################################


# Get users
@api_view(['GET'])
def get_users(request):
    
        # Get all users
        users = User.objects.all()

        if(users.count() == 0):
            return Response({'message': 'No users'}, status=status.HTTP_404_NOT_FOUND)

        # Create a user serializer
        serializer = UserSerializer(users, many=True)
    
        # Return the users
        return Response(serializer.data)

#################################################################################

# Get a user
@api_view(['GET'])
def get_user(request, user_id):
        
        # Get the user
        user = get_object_or_404(User, pk=user_id)
    
        # Create a user serializer
        serializer = UserSerializer(user)
    
        # Return the user
        return Response(serializer.data)

#################################################################################

# Create/resgiste a new user 
@api_view(['POST'])
def sigup(request):

    # Create a new user serializer
    serializer = UserSerializer(data=request.data)

    # Check if the serializer is valid
    if serializer.is_valid():

        # Save the user
        serializer.save()

        # Get the user saved
        user = User.objects.get(username=request.data['username'])

        # Set the password hashed
        user.set_password(request.data['password'])
        #Save the user with q hashed password
        user.save()

        # Create a token for the user
        token = Token.objects.create(user=user)

        # Return the token and the user
        return Response({'token': token.key, "user": serializer.data}, status=status.HTTP_201_CREATED)

    # If the serializer is not valid return the errors
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#################################################################################

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from rest_framework.decorators import authentication_classes, permission_classes

# Test the token
@api_view(['GET'])
# Use the token authentication
@authentication_classes([TokenAuthentication])
# Use the IsAuthenticated permission
@permission_classes([IsAuthenticated])
def test_token(request):

    # Return a message
    return Response({'passed for {}' .format(request.user.email)})
