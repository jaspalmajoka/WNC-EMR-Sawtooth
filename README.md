# Open EMR Blockchain Solution
<pre>
Clone this project
`git clone https://github.com/jaspalmajoka/openemr-v1.git`
 and follow the steps
</pre>

1. Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository)

2. Install [Docker-compose](https://docs.docker.com/compose/install/#install-compose)

3. Install [NVM (node & npm)](https://github.com/creationix/nvm#installation) and run `nvm install 8` to install node and npm LTS (as of documenting)

4. Move into `cd sawtooth-explorer` and run `npm install && npm run build` which will build the project and move the dist file into `./client/dist` directory. The public IP of the hosted environemt needs to be updated in this sawtooth angular project.

5. Run `docker-compose build` to check if the images are getting built well.

6. Run `docker-compose up` to start the docker containers for validator, client, swagger-doc and explorer.

API Entity | 
--- | 
Appointment |
Contact -> User |
Facility |
Insurance |
List -> Patient |
Location -> Facility |
Patient |
Document -> Patient |
DocumentLink -> Patient |
Image -> Patient |
Prescription -> Patient |
Resource -> User |
ResourceLink -> Patient |
ReviewOfSystems -> Visit -> Patient |
ReviewOfSystemsChecks -> Visit -> Patient |
SOAP -> Visit -> Patient |
VisitVitals -> Visit -> Patient |
 