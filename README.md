# test-http2-node
This is a tool to test http2 availability of your networking infrastructure to an exposed docker container.  

## Installation
Either use the docker image: https://hub.docker.com/u/wich23/test-http2-node/  

Or, you can run installation using this repo and node/yarn.  

### Docker Install
#### Requirements
docker

#### Steps
Docker pull
`docker pull wich23/test-http2-node:latest`  
Docker run on your chosen port
`docker run -p <host_port>:5000`

### Manual Install
#### Requirements
yarn  
nodejs  
Valid SSL cert and key 
#### Steps
Download the repo or git clone  
Enter the directory  
`cd test-http2-node`  
Create an SSL cert and key  
`openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt`  
<i>Note: these need to be named server.crt and server.key</i>  
Run yarn install  
`yarn install`  
Run yarn start  
`yarn start`  
Now the server should be running on port 5000
