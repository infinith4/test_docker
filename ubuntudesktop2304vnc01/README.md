https://qiita.com/takahashiakari/items/f096e5bcdfecf3d5ba90


docker-compose up --build --force-recreate

docker-compose up -d

docker-compose stop

### publish docker hub

```
docker login
docker tag ubuntudesktop2304vnc01-ubuntu-gui:latest infinith4/ubuntudesktop2304vnc:1
docker push infinith4/ubuntudesktop2304vnc:1
```
