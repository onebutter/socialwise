from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
import util.config.settings as config


class MongoUtils:
    def __init__(self):
        pass

    @staticmethod
    def get_mongo_connection(user=None, pswd=None, table=None):

        host = config.MONGO_HOST
        user = config.MONGO_USER if not user else user
        pswd = config.MONGO_PASS if not pswd else pswd
        table = config.MONGO_DBNAME if not table else table

        client = MongoClient(host)

        try:
            db = getattr(client, table)
            db.authenticate(user, pswd)
        except ConnectionFailure:
            raise

        return db
