# MobileServices
PWA app for enabling vantaa mobile services with related feeds

Boilerplate codes in construction

# Running in Development mode

Execute the below command

```bash
docker-compose up
```
Navigate to http://localhost:3000
You do not have to run the docker compose again after making changes under ```/backend``` and ```/frontend```.

Consider using 
```bash
. ./run-locally.sh
```
if you modify ``` Dockerfile ``` or any update related to Docker containers and images.
### Swagger

Swagger has been configured to get the api details.

Navigate to the below url to get the api details.

http://localhost:5000/swagger


# Deploying changes to heroku
Execute the below command

```bash
. ./deploy-to-dev.sh
```
Heroku app can be found at https://vantaa-black-panther.herokuapp.com/