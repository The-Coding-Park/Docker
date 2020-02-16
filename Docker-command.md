# Docker Commands
1. docker version  >> to check the docker version
2. docker container run --pubish 80:80 nginx >> to run nginx server on localhost
3. docker container run --pubish 80:80 --detach nginx >> to run nginx server in background
4. docker container run --pubish 80:80 --detach --name <Name> nginx >> to run container with custom name
5. docker container ls >> to see running containers
6. docker container ls -a>> to see all running containers
7. docker container ls >> to see running containers

## docker first chech if the image is avilabe in local machine, good, otherwise it downlaod on localmachine from dockerhub
### docker is not a vm , vm is a process of docker itself
 1. docker run --name mongo -d mongo
 2. docker top mongo
 ###### it shows the process which is taking behind the seen for the specific container