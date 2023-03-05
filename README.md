
Hey there! This is Frontend to an  immortal task list application. It is a project I wrote to test my skills in actually connecting backend and fronted.
Aplication has CRUD operations, where one can add, remove, update, list tasks and single task. 
Also there is a registration form where you have to give some required data. Login form is also built.

Tech stack used to build this project:
JavaScript, ReactJs, TailwindCSS, MongoDB Compass, Express, NodeJS.

To run this app you should clone this repository:

git clone https://github.com/L00ka5z78/myAppFE
Clone the backend of this project:

git clone https://github.com/L00ka5z78/myAppBE

Install all dependencies. To do that, run npm install in PROJECTS DIRECTORY.

Install mongoDB Compass on your device and remember to have mongo running in terminal.
Sometimes there are problems to run mongo, therefor i will give few hints. 
After installing on your device try to run it from terminal in your project. If it will not run,
create a script in package.json file like this: 
"start-mongo": "cd /d **your path to /MongoDb/bin/ && mongod.exe **",

and run the database in the background in your backend.
then run the project in the backend: npm run start.
If everything went right,
you will see messages that server is running and database is connected.

Some screenshots



![profil](https://user-images.githubusercontent.com/110019733/222970835-10476025-c3d8-437d-8e22-ce2203441c10.png)




![viewtask](https://user-images.githubusercontent.com/110019733/222970830-6ed0b5e7-b8de-4987-882c-faf4f2621525.png)


Project structure:

![folderstructure](https://user-images.githubusercontent.com/110019733/222970176-f3baf453-e984-4fd0-8b57-9aff0f2f4391.png)

Project databes structure if needed:

![dbstructure](https://user-images.githubusercontent.com/110019733/222970237-1126e989-f950-4561-a6db-d21b88ba703f.png)


Dependenices: 
1. axios - Promise based HTTP client for the browser and node.js
2. react - front-end JavaScript library for building user interfaces based on components.
3. react-router-dom -  routing for React web applications
4. tailwindcss -  CSS framework.


