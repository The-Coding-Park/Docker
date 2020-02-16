1. docker version  >> to check the docker version
2. docker container run --pubish 80:80 nginx >> to run nginx server on localhost
2. 2. docker container run --pubish 80:80 --detach nginx >> to run nginx server in background
3. docker container run --pubish 80:80 --detach --name <Name> nginx >> to run container with custom name
4. docker container ls >> to see running containers
5. docker container ls -a>> to see all running containers
6. docker container ls >> to see running containers