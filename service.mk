DB_USER=root
DB_PASS=pass

service-build:
	${DOCKER_COMPOSE} build

service-run:
	${DOCKER_COMPOSE} run service sh -c "yarn start"

service-dev:
	${DOCKER_COMPOSE} run service sh -c "yarn dev"

$PHONY: service-build service-run service-dev
