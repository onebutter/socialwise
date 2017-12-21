import time

from apistar import exceptions
from apistar import annotate
from apistar.interfaces import Auth
from apistar.types import Settings
from apistar_jwt.authentication import JWTAuthentication
from apistar_jwt.token import JWT


import util.config.settings as config

class AuthUtils:
    """Used for generating a password and decoding a JWT token"""
    
    @annotate(authentication=[JWTAuthentication()])
    def decode_token(auth: Auth, settings: Settings):
        token = JWT(token=auth.token, settings=settings)
        return token.payload 
