"""Auth Utils"""
JWT_SECRET = os.environ['JWT_SECRET'] if 'JWT_SECRET' in os.environ else None
JWT_ISS = os.environ['JWT_ISS'] if 'JWT_ISS' in os.environ else None

JWT_TOKEN_TTL = int(os.environ['JWT_TTL']) if 'JWT_TTL' in os.environ else 300
JWT_REFRESH_TTL = int(os.environ['JWT_REFRESH_TTL']) if 'JWT_REFRESH_TTL' in os.environ else 420