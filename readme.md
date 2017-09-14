#Roquette

<img src="https://i.imgur.com/IR40Yi6.png">

*GA WDI Project-2

### Premise
Roquette is a site for rocket enthusiasts to pictures of rockets and get information about them.

### Brief
To build a full-stack RESTful application with authentication and CRUD actions.

### Technologies used
* HTML5
* CSS, **Boostrap**, SCSS
* JavaScript, **Express** (flash, sessions), **EJS** (layouts), **MongoDB**, **Mongoose ODM**

### Features
In addition to the core requirements for this project Roquette contains a number of additional features such as, favoriting, basic user and admin level accounts and an internal direct messaging system.

### Challenges
The largest challenges of the project were the implementation of the internal messaging system and effective styling with bootstrap.  Messaging was achieved through the creation of a message model recording sender, receiver and text data.  A form with a hidden input for sender data was created in the new message page.  This page was in turn ported with partials to be displayed on the user profile page alongside the index of messages which were also included using partials.  To ensure users saw only their own messages the collection was searched for messages to or from the user and only these were populated.  The resulting interface was similar to imessage.

### Improvements
The addition of cookie session data would enable
