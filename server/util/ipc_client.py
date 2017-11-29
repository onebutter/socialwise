import hashlib
import traceback
import http.client
import urllib.parse

import json

import util.config.settings as config
from util.logging_utils import LoggingUtils

class IPCClient:
    def __init__(self, ipc_host, ipc_port):
        """Create the client connection to a resource, this class will create the connection

            :param ipc_host: Inter process communication Host Url Endpoint (ie. 192.168.99.100) if using docker-machine
            :param port: IPC Host Port Allocation (ie. 8008)
            :return: An instance of IPCClient with a client connection to the service provided
            :rtype: IPCClient
        :
        """

        self.client = None
        self.name = ipc_host
        self.logger = LoggingUtils.get_logger()
        self.headers = {'Content-type': 'application/json'}

        try:
            self.client = http.client.HTTPConnection(ipc_host)
        except http.client.HTTPException as e:
            traceback.print_exc()
            self.logger(str(e))
            raise

    def get_entity(self, id_):
        """
        Query a resource by its entity id

            :param id_: Entity value id
            :return: A json payload of the entity request
            :rtype: json
        """
        response = None

        try:
            self.client.request('GET', '/' + id_, headers=self.headers)
            client_response = self.client.getresponse()

            if client_response and client_response.status == 200:
                response = json.loads(client_response.read().decode())

        except http.client.HTTPException as e:
            traceback.print_exc()
            self.logger(str(e))
            raise

        return response

    def get_collection(self, params):
        """
        Query a resource by params

            :param params: Json object of parameter request
            :return: A json collection payload of the entities retrieval
            :rtype: json
        """
        query = ''
        if params:
            query = '?' + urllib.parse.urlencode(params, True)

        response = None

        try:
            self.client.request('GET', '/' + query, headers=self.headers)
            client_response = self.client.getresponse()

            if client_response and client_response.status == 200:
                response = json.loads(client_response.read().decode())

            if self.allow_cache:
                self.set_cache_response(query, response)

        except (http.client.HTTPException, Exception) as e:
            traceback.print_exc()
            self.logger(str(e))
            raise

        return response

    