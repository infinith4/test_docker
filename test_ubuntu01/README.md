https://qiita.com/NeK/items/d9431d5cdfa16dffe6dc


docker image build -t hiblocka/mytest:latest .
docker container run -it --name mytest hiblocka/mytest:latest bash

docker container commit mytest hiblocka/mytest:latest

