FROM mongo:3.4

COPY config/mongod.conf /etc/mongod.conf 
COPY run.sh /run.sh
COPY mongodb_auth.sh /mongodb_auth.sh
 
EXPOSE 27017

RUN chmod +x /run.sh /mongodb_auth.sh

CMD ["/run.sh"]