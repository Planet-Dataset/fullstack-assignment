DB_USER=root
DB_PASS=pass

backend-build:
	${DOCKER_COMPOSE} build

backend-build-slim:
	${DOCKER_COMPOSE} -f docker-compose.slim.yml build

backend-up:
	${DOCKER_COMPOSE} up

backend-up-slim:
	${DOCKER_COMPOSE} -f docker-compose.slim.yml up

backend-down:
	${DOCKER_COMPOSE} down

backend-dump:
	${DOCKER_COMPOSE} exec -T mongodb sh -c 'mongodump --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS} -o /dbdump'

backend-load:
	${DOCKER_COMPOSE} exec -T mongodb sh -c 'mongorestore --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS} --dir=/dbdump'

backend-dbshell:
	${DOCKER_COMPOSE} exec mongodb mongo --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS}

backend-test: backend-dump
	echo ""
	make backend-load

$PHONY: backend-build backend-build-slim backend-up backend-up-slim backend-down backend-dump backend-load backend-dbshell backend-test
