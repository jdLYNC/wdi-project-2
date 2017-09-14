# GA WDI Project 2 - Roquette

<img src="https://i.imgur.com/IR40Yi6.png">

## Premise
Roquette is a site for rocket enthusiasts to pictures of rockets and get information about them.

## Brief
To build a full-stack RESTful application with authentication and CRUD actions, styled with a CSS framework.

## Technologies used
* HTML5
* CSS, **Boostrap**, SCSS
* JavaScript, **Express** (flash, sessions), **EJS** (layouts), **MongoDB**, **Mongoose ODM**, **bcrypt**

## Features
In addition to the core requirements for this project Roquette contains a number of additional features such as, favoriting, basic user and admin level accounts, an internal direct messaging system and well implemented responsive design.

## Challenges
My primary challenge with this project was managing the project timeline.  With only 4 days to take this project from ideation to presentation having clear targets for each day was key and something which I failed to succesfully implement.

The technologies worked with did not present a significant challenge though I believe I could have produced cleaner code then I ultimately delivered.

The greatest technical challenge for me was with the use of Bootstrap and implementation of satisfactory styling throughout the site.  In part this problem stemmed from my approach to the project being feature-led, considering first all the features I wished to add and considering styling at the end.  Having now dealt with this my approach in future will be to consider design throughout the development process and not only as an afterthought.

## Successes
My primary success with Roquette was the implementation of the internal messenger system.  This was achieved through the creation of a message model with `to`, `from` and `text` properties.  Logged in users can access the `messages/_new` view to write and send messages, and the `messages/_index` view to read their message history.  To streamline the UX (while maintaining the RESTful structure) these views were included in the `users/show` view and were available side by side.  Bootstraps flex classes were applied with `if... else` statements to create an iMessage style chat view.

Partials and EJS `if... else` statements were widely used throughout my site to improve UX.  Examples are the reloading of the homepage with `registrations/_new` included and the dynamically updating navbar which adapts content and presentation depending on screensize.

<img src="https://i.imgur.com/xwz0T2y.png">

## Improvements
Having concluded the project there are a number of additional features and improvements I would like to make in future iterations, these include:
### Technical Changes
* The ability to promote users to admin status.
* User comments.
* Improved UX for direct messaging (eg. using session data to remember which chat the user had last been in).
* Group messaging.
* A 'Keep me logged in' feature.
* Unread message notifications.
* Cleaner code.
### Non-technical Changes
* Expanding the scope of the site from a purely rocket based experience.
* Enabling all users to post rockets rather than just admins.
