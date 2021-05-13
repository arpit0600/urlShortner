# urlShortner
Repo for a Url Shortner service ame with Express.js backend using mongoDb as DB


Software Installation:

1. This web-app is running on node.js backend before prrocedding towards installing dependencies first configure node and npm on your system, [download](https://nodejs.org/en/download/) and for installation and configuration refer [npm documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

2. Download the community server of the mongoDB data base from [here](https://www.mongodb.com/try/download/community) and set up the environment with the delp of [documentation](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/).




Setting up working enviornment:

1. To initiate nodejs run followig command
  npm init

2. To set up mongoDB environment open powershell and pass command "mongod" and it will start        


Installing dependencies with the help of npm:

1. Firstly have to install express for backend framework 
  "npm install express"
  
2. Install shortid package to randmonly generate unique codes
   "npm i shortid"
3. TO validate if the user is inputting a valid url 
4. "npm i valid-url"
  
4. install mongoose which willl help us to store data in mongoDB
  "npm i mongoose"
  
5. install ejs template engine 
  "npm i ejs"
  
now run command "node server.js"


If there is no problem then in terminal it will output the port no. on which application is running by default it is port no. 600
So to access the webpage check this [url](http://localhost:600/)
