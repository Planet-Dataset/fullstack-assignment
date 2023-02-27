backend-build:
	${DOCKER_COMPOSE} build api

backend-up:
	${DOCKER_COMPOSE} up api

backend-down:
	${DOCKER_COMPOSE} down api

$PHONY: backend-build backend-up backend-down
