#Roquette

*GA WDI Project-2

### Technologies used
  HTML 5
  CSS 3
    SCSS
    Bootstrap
    Gulp
  Javascript
    Express (flash, layouts, sessions)
    bcrypt
    bluebird
    Node.js
    MongoDB
    Mongoose

### Premise
Roquette is a RESTful app for users to view pictures of rockets...

### Challenges
The largest challenges of the project were the implementation of the internal messaging system and effective styling with bootstrap.  Messaging was achieved through the creation of a message model recording sender, receiver and text data.  A form with a hidden input for sender data was created in the new message page.  This page was in turn ported with partials to be displayed on the user profile page alongside the index of messages which were also included using partials.  To ensure users saw only their own messages the collection was searched for messages to or from the user and only these were populated.  The resulting interface was similar to imessage.

### Improvements
The addition of cookie session data would enable
