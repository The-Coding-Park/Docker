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
 3. docker ps >> to check all running images
 4. ps aux >> to check all the running process in local machine
 5. ps aux | grep mongo >> to find process with name mongo
## running multiple containers 
1. docker container run -d -p 3306:3306 --name db -e MYSQL_RANDOM_ROOT_PASSWORED= yes mysql
2. docker container log db
3. docker container logs db
4. docker container run -d --name webserver -p 8080:80 httpd
5. docker ps 
6. docker container run -d --name proxy -p 80:80 nginx
7. docker container ls / docker ps
8. curl localhost
9. curl localhost:8080
10. docker container stop name1 name2 name3
11. docker ps -a
12. docker container rm name1 name2 name3
13. docker ps -a
14. docker image ls

