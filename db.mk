DB_USER=root
DB_PASS=pass

db-up:
	${DOCKER_COMPOSE} up mongodb

db-down:
	${DOCKER_COMPOSE} down mongodb

db-dump:
	${DOCKER_COMPOSE} exec -T mongodb sh -c 'mongodump --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS} -o /dbdump'

db-load:
	${DOCKER_COMPOSE} exec -T mongodb sh -c 'mongorestore --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS} --dir=/dbdump'

db-dbshell:
	${DOCKER_COMPOSE} exec mongodb mongo --authenticationDatabase admin -u ${DB_USER} -p ${DB_PASS}

db-test: backend-dump
	echo ""
	make db-load

$PHONY: db-up db-down db-dump db-load db-dbshell db-test

