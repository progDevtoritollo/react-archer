#!/bin/bash

# Команда для сборки проекта с помощью npm
npm run build

# Команда для сборки Docker-образа
docker build -t 66567575/clvsdffgg-ar:latest .

# Пуш в DockerHub
docker push 66567575/clvsdffgg-ar:latest 

# Команда для запуска контейнера с помощью Docker Compose
docker-compose up