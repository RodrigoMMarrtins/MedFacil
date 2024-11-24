FROM mongo:6.0

ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=root
ENV MONGO_REPLICA_PORT=27017
ENV MONGO_REPLICA_HOST=localhost

# Inicia o MongoDB em modo replica set
ENTRYPOINT mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 & MONGOD_PID=$!; \
    # Espera o processo MongoDB iniciar e depois tenta inicializar o replica set se necessário
    until mongosh --port $MONGO_REPLICA_PORT --eval "rs.status()"; do \
        echo "Esperando o MongoDB iniciar..."; \
        sleep 5; \
    done; \
    # Inicializa o replica set se não estiver configurado
    INIT_REPL_CMD="rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] })"; \
    INIT_USER_CMD="db.getUser('$MONGO_INITDB_ROOT_USERNAME') || db.createUser({ user: '$MONGO_INITDB_ROOT_USERNAME', pwd: '$MONGO_INITDB_ROOT_PASSWORD', roles: [ 'root' ] })"; \
    mongosh --port $MONGO_REPLICA_PORT --eval "$INIT_REPL_CMD && $INIT_USER_CMD"; \
    # Manter o processo MongoDB rodando
    echo "Replica set online"; wait $MONGOD_PID;
