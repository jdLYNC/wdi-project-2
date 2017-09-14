# Roquette

<img src="https://i.imgur.com/IR40Yi6.png">

## GA WDI Project-2

### Premise
Roquette is a site for rocket enthusiasts to pictures of rockets and get information about them.

### Brief
To build a full-stack RESTful application with authentication and CRUD actions.

### Technologies used
* HTML5
* CSS, **Boostrap**, SCSS
* JavaScript, **Express** (flash, sessions), **EJS** (layouts), **MongoDB**, **Mongoose ODM**, **bcrypt**

### Features
In addition to the core requirements for this project Roquette contains a number of additional features such as, favoriting, basic user and admin level accounts and an internal direct messaging system.

### Challenges


The largest challenges of the project were the implementation of the internal messaging system and effective styling with bootstrap.  Messaging was achieved through the creation of a message model recording sender, receiver and text data.  A form with a hidden input for sender data was created in the new message page.  This page was in turn ported with partials to be displayed on the user profile page alongside the index of messages which were also included using partials.  To ensure users saw only their own messages the collection was searched for messages to or from the user and only these were populated.  The resulting interface was similar to imessage.

### Improvements
Having concluded the project there are a number of additional features and improvements I would like to make in future iterations, these include:
__Technical Changes__
* The ability to promote users to admin status.
* User comments.
* Improved UX for direct messaging (eg. using session data to remember which chat the user had last been in).
* Group messaging.
* A 'Keep me logged in' feature.
__Non-technical Changes__
* Expanding the scope of the site from a purely rocket based experience.
* Enabling all users to post rockets rather than just admins.
