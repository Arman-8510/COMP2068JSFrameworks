# ToDoList

A  HBS based   ToDoList CRUD app

# Function

- Read  MongoDB Atlas ToDo 
- Add ToDo 
- Delete  ToDo 
- Edit  Todo 

# Demo

![screenshot](/Preview/Peri-ToDoList-01.png)
![screenshot](/Preview/Peri-ToDoList-02.png)

# Getting this project up and running

1. Must have MongoDB Atlas connecting string
   Get connection string tutorial:
   https://www.mongodb.com/docs/guides/atlas/connection-string/

2. Fork or Clone
   Fork or clone this project from Github to get your own copy of it.

3. Create .env file
   create `.env` file at the root of project, inside .env file add `DB_CONNECT` as env variable then paste your MongoDB Atlas connecting string:

```
// .env

DB_CONNECT = <your connecting string>
```

4. Install all the dependencies
   run:

```
npm install
```

5. Run deploy command:

```
npm start
```

now the site is running at http://localhost:3000

you can start developing the ToDoList!

# Tech

- HBS
- Node.js
- Express
- Mongoose
