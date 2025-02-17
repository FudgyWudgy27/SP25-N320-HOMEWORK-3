## SP25-N320-HOMEWORK-3

In this homework I have created a website that has a Home page, a Monkey page, and a 404 page. The Home page welcomes the user and tells them to go to the Monkey page. The Monkey page has a picture of a monkey, a button, and text on what the button does.

### Live Link

[Home Page](https://sp25-n320-homework-3-k1e2.onrender.com)

### Weekly Recap

This week we covered Promises, async/await, and making basic web servers.

Promises:
 - Uses .then() methods to advance to code if the previous code had successful out comes.
 - Uses .catch() methods to deal with any errors that arise.
 - Uses .finally() method without regard of the Promise's outcome.

Async/Await:
 - Async functions don't wait to finish before starting the next line of code.
 - The "await" keyword is used within an async function to make it wait for the Promise to resolve or reject.
 - The "await" keyword removes the need for .then() methods within the Promise.
 - When the "await" keyword is used in conjunction with .catch() it allows for a more effective way to handle errors.

Basic Web Servers:
 - Using the http module within Node allows for the running of a server off of a computer/laptop.
 - Normally when using http, if any changes are made to the code then you must manually restart the server for it to update. However, you can use the Nodemon   module to automatically restart the server when changing code.
 - Through the use of render, you can host a server that uses the http module that anyone can access without the source code.