IMG_NAME=tdw-files
IMG=eaglelizard
PORT=8080
TAG=latest
RUNOPTS=-p $(PORT):80
CONTAINER=$(IMG_NAME)
DB_CONTAINER=mongo

build:
	#docker build -t $(IMG)/$(IMG_NAME) .
	docker-compose build

run:
	#docker run $(RUNOPTS) \
	#--name $(CONTAINER) \
	#-d $(IMG)/$(IMG_NAME)
	docker-compose up


stop:
	docker stop $(CONTAINER) && \
	docker rm $(CONTAINER) && \
	docker stop $(DB_CONTAINER)

enter:
	docker exec -it $(CONTAINER) /bin/bash