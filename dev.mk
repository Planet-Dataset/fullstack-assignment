build:
	${DOCKER_COMPOSE} build

start:
	@echo "Starting the development services..."
	@echo "Run 'make stop' or ${DOCKER_COMPOSE} to stop it."
	${DOCKER_COMPOSE} up &

start-slim:
	@echo "Starting the development services..."
	@echo "Run 'make stop' or ${DOCKER_COMPOSE} to stop it."
	${DOCKER_COMPOSE} up -f docker-compose.slim.yml &

stop:
	${DOCKER_COMPOSE} down

$PHONY: build start start-slim stop
