# Open EMR Blockchain Solution
<pre>
Clone this project
`git clone https://github.com/jaspalmajoka/openemr-v1.git`
 and follow the steps
</pre>

1. Install [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/#install-using-the-repository)

2. Install [Docker-compose](https://docs.docker.com/compose/install/#install-compose)

3. Install [NVM (node & npm)](https://github.com/creationix/nvm#installation) and run `nvm install 8` to install node and npm LTS (as of documenting)

4. Run `docker-compose up --build` this will start the client, explorer and other sawtooth components as docker containers.
5. File `nginx.conf` needs to be updated incase of deployment with required changes. update the private ip info in this configuration.
6. Ovrride docker-compose file configurations in similar file `docker-compose-dev.yaml`.
7. Start multiple-compose configurations by running command `docker-compose -f docker-compose.yaml -f docker-compose-dev.yaml up --build`

# List of API Entitity status in implementation

API Entity  | Status 
--- | --- |
User | ![done](https://www.iconfinder.com/icons/299110/download/png/20 "Completed") 
Hospital | ![done](https://www.iconfinder.com/icons/299110/download/png/20 "Completed") 
Patient | ![done](https://www.iconfinder.com/icons/299110/download/png/20 "Completed") 
Appointment | ![done](https://www.iconfinder.com/icons/299110/download/png/20 "Completed") 
Document -> `Patient` | ![done](https://www.iconfinder.com/icons/299110/download/png/20 "Completed") 
Medicne |
Precription |
Inventory |