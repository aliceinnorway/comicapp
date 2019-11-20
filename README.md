This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Comic Of The Day

This project was created for the Shortcut AS Coding Challenge which can be viewed here. https://github.com/shortcut/coding-assignment-mobile

The aim was to create a React.JS web app that allows a user to view comics via the xkcd json api. https://xkcd.com/json.html
The intention is to allow users to save/downloade an image, or click for a new random generated image. 

## Stack

This project has been made with React.js

## Issues

Currently this web application does not work.
This is because the fetch() is not receiving a response from the json api. There are two ways around this:
- Use a xkcd api wrapper such as https://github.com/mrmartineau/xkcd-api
- Debug to allow a no-cors mode. 

I will also need to re-organise the functions to enable call the fetch data function again after generating a new random number when the user clicks the refresh button. 

## Contributors

Only me, myself and I.



