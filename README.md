
# To-Do Terminal
This is a to-to list application built in React JS, using React Hooks to manage state. This was built as pre-work for the 4th module of Turing School of Software and Design's Front End Engineering program. 
*Update:* This application failed after a few years of being un-maintained, and was recently ported to a new create-react-app using *Vim* to copy and update the source code. 

## Setup

➡ To make a local copy of this repository, open your terminal and run `git clone git@github.com:Abdeboskey/Todo-Terminal.git`

➡ Type `cd Todo-Terminal` to move into the root of this new directory, and run `npm install` to install the necessary dependencies

➡ Run `npm start` to launch this application in the browser, and run `npm test` to run the test suite

➡ If the application does not automatically open in the browser, navigate to `http://localhost:3000`

## Application Information

This application is currently set up to store your to-dos in `localStorage`. If you have used this application before, any previously created to-dos will be retrieved from `localStorage` upon launching the application. I have found that using to-do lists like this really helps me manage my productivity, and I plan on building a back end and server to deploy this application as an opportunity to learn, practice, and share this tool with friends.

## Future Features

* To-do's will no longer be saved in local storage, and will instead persist in a database. This will require user authentication as well.
* Completed to-do's will be viewable when completed, by clicking `View Completed To-do's`.
* A user will be able to create multiple to-do lists, with different customizable contexts, i.e.: `To-Do To-Day`, `To-Do This Week`, `Big Dreams` etc...
* Users will be able to click-and-drag to-do's to re-order them based on priority.
