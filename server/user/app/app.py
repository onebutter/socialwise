import bsonjs
from apistar import Route, http
from apistar.frameworks.wsgi import WSGIApp as App
from apistar.handlers import docs_urls, static_urls
from util.mongo_utils import MongoUtils


def get():
    db = MongoUtils.get_db()
    return bsonjs.dumps(db['users'].find_one().raw)

def create(temp):
    db = MongoUtils.get_db()
    db['users'].insert_one({ 'some_test_data': temp })
    return {'message': 'create success'}


routes = [
    Route('/', 'GET', get),
    Route('/create/{temp}', 'GET', create)
]

app = App(routes=routes)

if __name__ == '__main__':
    app.main()
