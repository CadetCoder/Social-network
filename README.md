# Connect-E Groupomania	

<h1 align="center">	
  <br>	
  <img src="https://github.com/CadetCoder/Vue-groupomania/blob/master/frontend/src/assets/icon-above-font.png" alt="groupomania" width="320">	
</h1>	

<h4 align="center">An internal social network for Groupomania's employees.</h4>	

## Requirements ##	


* This a web application require node.js, if you don't have installed in your system please visit: [Node.js](https://nodejs.org/en/download/).	
* For vue cli installation please visit: [Vue.js](https://cli.vuejs.org/guide/installation.html).	

## Installation ##	

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
* Vuex
* axios
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
* Sequelize
* MySQL	

### Database :	

Make sure you have `MySQL` installed globally by downloading MySQL [here](https://dev.mysql.com/downloads/).	

To install MySQL in your project please visit [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp).	

* Download and install XAMPP [here](https://www.apachefriends.org/download.html). XAMPP is a local web server on your computer	

* Go to PHPmyadmin to handle the administration of MySQL.	
```	
http://localhost/phpmyadmin	
```	

MySQL Cheatsheet - https://gist.github.com/bradtraversy/c831baaad44343cc945e76c2e30927b3 credit to the author [Brad Traversy](https://gist.github.com/bradtraversy).	

## Utilisation

To register on the Groupomania social network, you must provide:

   * A nickname (between 3 and 30 characters)
   * A valid email address
   * A password (8 to 20 characters, letters and numbers accepted only, upper and lower case, no symbols). You can then modify your profile (username, bio, photo) by going to your profile. Your account can be deleted by you as well as by the administrator.

Once logged in you can see user posts and publish as desired:

   * a status
   * a status + a link (gifs ok, no youtube videos)
   * a status + an image These publications can be liked, commented, modified, deleted. The moderator can delete them.

## License	

Distributed under the MIT License. See `LICENSE` for more information.	
