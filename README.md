# Figma Style Guide Generator


This is a React app that connects to the Figma API and gets canvases with appropriate names.
The hope is to get it to generate a style guide.

## Getting Started


These instructions will get you a copy of the project up and running on your local machine for development and testing purposes


**Prerequisites**

You will need to generate your own **Personal Access Tokens**

* Go to your Figma Account Settings
* Click on Create a new personal access token
* Copy the generated key somewhere you will not be able to see it again

You will also need a project file id

* Open the desired project
* In the URL look for the long string `https://www.figma.com/file/**id is here**`


**Installing**

* Create a folder for the project
* Clone the project with `git clone https://github.com/mneshenko/figma-styleguide-generator.git`
* Run npm install
* Open the project ( `atom .` if you are working in Atom)
* Navigate to the `server.js` file
* Paste your API Key into the `FigmaAPIKey` string
* Paste your project id into the `FigmaFileID`
* Save the file and run npm` start` to start the server
* Open a new Terminal tab and cd into the `client` folder
* Run `npm install`
* Run `npm start`

Now you got both servers running and you good to go!

## Build With

* [Create React App](https://github.com/facebook/create-react-app) - Front-End wrapper for displaying the data
* [Express](https://expressjs.com/) - Back-end server that fetches data from the API
