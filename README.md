# Connect-E Groupomania

<h1 align="center">
  <br>
  <img src="https://github.com/CadetCoder/Vue-groupomania/blob/master/frontend/src/assets/icon-above-font.png" alt="groupomania" width="320">
</h1>

<h4 align="center">An internal social network for Groupomania's employees.</h4>

## Requirements ##


* This a web application require node.js, if you don't have installed in your system please visit: [Node.js](https://nodejs.org/en/download/).
* For vue cli installation please visit: [Vue.js](https://cli.vuejs.org/guide/installation.html).

🛠 ##Installation ##

`git clone https://github.com/CadetCoder/Vue-groupomania.git`

## Frontend :

```
cd frontend
npm install 
npm run serve
```

Then the app running at:
```
Local:   http://localhost:8080/
```
### Technologies
* VueJS
* Vuetify
* Sass
  
## Backend :

```
cd backend
npm install
nodemon start
```
### Technologies
* NodeJS
* Express
* MySQL

### Database :

Make sure you have `MySQL` installed globally by downloading MySQL [here](https://dev.mysql.com/downloads/).

To install MySQL in your project please visit [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp).

* Create MySQL connection.
```
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
```

* MySQL Database table

```
TABLES SQL:

users
id         | smallint unsigned | NO   | PRI | NULL    | auto_increment
email      | varchar(50)       | NO   |     | NULL
password   | varchar(255)      | NO   |     | NULL
first_name | varchar(20)       | YES  |     | NULL
last_name  | varchar(20)       | YES  |     | NULL

posts
id          | smallint          | NO   | PRI | NULL    | auto_increment
content     | varchar(280)      | YES  |     | NULL    |                
imageUrl    | varchar(400)      | YES  |     | NULL    |                
post_create | datetime          | YES  |     | NULL    |                
user_id     | smallint unsigned | YES  | MUL | NULL
likes_number| smallint unsigned 
dislikes_number | smallint unsigned 

comments
content      | varchar(280)      | NO   |     | NULL
post_id      | smallint unsigned | NO   |     | NULL
user_id      | smallint unsigned | NO   |     | NULL
date_comment | date              | YES  |     | NULL
id           | smallint unsigned | NO   | PRI | NULL    | auto_increment

likes
id      | smallint unsigned | NO   | PRI | NULL    | auto_increment 
user_id | smallint unsigned | YES  | MUL | NULL    |                
post_id | smallint          | YES  | MUL | NULL
likes   | INT | NO   

dislikes
id      | smallint unsigned | NO   | PRI | NULL    | auto_increment 
user_id | smallint unsigned | YES  | MUL | NULL    |                
post_id | smallint          | YES  | MUL | NULL
dislikes| INT | NO
```
MySQL Cheatsheet - https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3 credit to the author [Brad Traversy](https://gist.github.com/bradtraversy).

## License

Distributed under the MIT License. See `LICENSE` for more information.
