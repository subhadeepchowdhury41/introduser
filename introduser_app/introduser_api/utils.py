from rest_framework_simplejwt.utils import jwt_payload_handler

def jwt_response_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': {
            'id': user.id,
            'username': user.username
        }
    }