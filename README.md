# Async / Await Demo

Companion project to
[my article on async/await](https://medium.com/@tsmith18256/async-await-in-node-js-v7-a9386b44e115#.s8tbe4o2b).

This app provides a brief demonstration of using JavaScript's new `async` and `await` keywords by using them in a small
CRUD API with Mongoose. Note that running this app require Node v7 and, at the time of writing, requires you run Node
with the `--harmony` flag.

## Running the Application

Before running the app, you must have an instance of [MongoDB](https://www.mongodb.com/) running on your localhost. Once
you have that set up, run these commands:

1. `npm install`
2. `npm start`

## Comparing to Promises and Callbacks

There are three branches in this project: _master_, _promises_, and _callbacks_. To compare the `async` and `await` to
other methods, look at _app/task.controller.js_ on these different branches.