frontend-build:
	${DOCKER_COMPOSE} build front

frontend-up:
	${DOCKER_COMPOSE} up front

frontend-down:
	${DOCKER_COMPOSE} up front

$PHONY: frontend-build frontend-up frontend-down
