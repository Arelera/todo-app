# todo-app

[Live demo](https://todo-app0.herokuapp.com/)  
A MERN stack todo app. Users can create accounts and login (users jwt gets stored in the localhost).  
Once a user is logged in they can create a project and start adding todo items to it, a project must be selected to be able to add a todo item.   
After adding a todo, users can click on one and add a description to it on the right panel which gets saved 1 second after typing ends.  

The Mongo database is hosted on MongoDB Atlas. There are 3 collections, projects, todos and users.

- Projects collection has id, title and user which holds creators id.
- Todos collection has id, important, completed and title.
- Users collection has id, a todos array, name, username and passwordHash.

Used libraries include:

## Frontend

- ReactJS
- Redux (along with react-redux and redux-thunk)
- Styled components
- Axios

## Backend

- Express
- Mongoose
- Jsonwebtoken
- Bcrypt
