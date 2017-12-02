import os
"""Auth Utils"""
JWT_SECRET = os.environ['JWT_SECRET'] if 'JWT_SECRET' in os.environ else None
JWT_ISS = os.environ['JWT_ISS'] if 'JWT_ISS' in os.environ else None

JWT_TOKEN_TTL = int(os.environ['JWT_TTL']) if 'JWT_TTL' in os.environ else 300
JWT_REFRESH_TTL = int(os.environ['JWT_REFRESH_TTL']) if 'JWT_REFRESH_TTL' in os.environ else 420

MONGODB_HOST = os.environ['MONGODB_HOST'] if 'MONGODB_HOST' in os.environ else None
MONGODB_USER = os.environ['MONGODB_USER'] if 'MONGODB_USER' in os.environ else None
MONGODB_PASS = os.environ['MONGODB_PASS'] if 'MONGODB_PASS' in os.environ else None
MONGODB_DATABASE = os.environ['MONGODB_DATABASE'] if 'MONGODB_DATABASE' in os.environ else None
MONGODB_PORT = os.environ['MONGODB_PORT'] if 'MONGODB_PORT' in os.environ else 27017
