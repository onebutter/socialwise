from pymongo import MongoClient
from pymongo.errors import ConnectionFailure
from bson.raw_bson import RawBSONDocument
import util.config.settings as config


class MongoUtils:
    def __init__(self):
        pass

    @staticmethod
    def get_db(user=config.MONGODB_USER, pswd=config.MONGODB_PASS, db_name=config.MONGODB_DATABASE):
        client = MongoClient(config.MONGODB_HOST, config.MONGODB_PORT, document_class=RawBSONDocument)

        try:
            db = getattr(client, db_name)
            db.authenticate(user, pswd)
        except ConnectionFailure:
            raise

        return db
