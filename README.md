# Weather-APP-api
Step 1 (HTML Code):
<!DOCTYPE html>: This declaration defines the document type as HTML5, which is the latest version of HTML.

<html lang="en">: The <html> tag is the root element of an HTML document. The lang attribute is set to "en" (English), indicating that the primary language of the content is English.

<head>: This section contains metadata and resources that are used to configure and enhance the webpage but are not directly visible to the user.

<meta charset="UTF-8" />: This meta tag specifies the character encoding of the document as UTF-8, which supports a wide range of characters and symbols from different languages.
<meta name="viewport" content="width=device-width, initial-scale=1.0" />: This meta tag sets the viewport configuration for responsive design. It ensures that the webpage is initially displayed at a 1:1 scale on various devices and adjusts the layout to fit the device's screen width.
<title>Weather App</title>: This title element sets the title of the webpage, which is displayed in the browser's title bar or tab.
<link rel="stylesheet" type="text/css" href="styles.css" />: This link tag references an external CSS (Cascading Style Sheets) file named "styles.css." The stylesheet is used to define the visual styles and layout of the webpage.
<script src="script.js" defer></script>: This script tag references an external JavaScript file named "script.js." The defer attribute indicates that the script should be executed after the HTML content is parsed. JavaScript is used to add interactivity and dynamic behavior to the webpage.
<body>: This section contains the visible content of the webpage that users can see and interact with.

<div class="card">: A <div> element with the class "card." It's a container used to group elements together for styling purposes, often used to create card-like layouts.
<form id="form">: A <form> element with the ID "form." This is a container for input elements and defines a form that can be submitted to a server. In this case, it's likely used for user input.
<input type="text" id="search" placeholder="Search by location" autocomplete="off" />: An <input> element of type "text." It's a text input field with the ID "search" and a placeholder "Search by location." The autocomplete attribute is set to "off" to disable browser suggestions.
<main id="main"></main>: A <main> element with the ID "main." This is typically used to contain the main content of the webpage. It's likely that the weather information or results will be displayed here.
</div>: Closes the "card" <div> element.

Step 2 (CSS Code):
Once the basic HTML structure of the weather app is in place, the next step is to add styling to the weather app using CSS.

@import: This rule is used to import an external CSS file from the given URL. In this case, it imports font styles from the Google Fonts API for the "Poppins" font with different weights and styles.

body: This block of CSS rules targets the <body> element of the webpage.

background-image: Sets the background of the body to a visually appealing image.
background-size: Specifies that the background image should cover the entire viewport.
font-family: Sets the font family for text content to "Poppins" and then falls back to a generic sans-serif font.
display: Makes the body a flex container.
flex-direction: Sets the flex container's children to be stacked in a column.
align-items and justify-content: Center the content both vertically and horizontally.
margin: Removes margin around the body.
height: Sets the body's height to 100% of the viewport's height.
::placeholder: Targets the placeholder text of input elements.

color: Sets the color of the placeholder text to white (#fff).
input: Styles all input elements.

background-color: Sets the background color of the input to dark gray (#575757).
border: Removes the border around the input.
border-radius: Rounds the corners of the input.
box-shadow: Adds a subtle shadow around the input.
font-family and font-size: Inherits the font family and sets the font size.
padding: Adds spacing inside the input.
min-width: Specifies a minimum width for the input.
color: Sets the text color to white (#fff).
transition: Adds a smooth transition effect when properties change.
input#search:hover: Targets the search input when hovered.

background: Changes the background color on hover.
input:focus: Targets the search input when focused (clicked or tabbed into).

outline: Removes the default focus outline.
align-items, margin-bottom, and padding-left: Adjusts spacing and alignment when the input is focused.
.weather: Targets elements with the class "weather".

font-size: Sets a larger font size.
text-align: Centers the text.
.weather h2: Targets <h2> elements inside elements with the class "weather".

display: Makes the <h2> and its content a flex container.
align-items, margin-bottom, and padding-left: Adjusts spacing and alignment.
.card: Targets elements with the class "card".

background: Sets a semi-transparent black background.
width and max-width: Sets the width of the card.
height: Sets the height of the card.
padding: Adds spacing inside the card.
text-align: Centers the text.
border-radius: Rounds the corners.
color: Sets the text color to white.
.more-info p and .more-info span: Targets elements inside the "more-info" class.

font-size: Sets font size and font weight for specific elements.

Step 3 (JavaScript Code):
Finally, we need to create a function in JavaScript that fetches weather information from the OpenWeatherMap API and displays it on a webpage.

const apikey = "YOUR_API_KEY";: This line sets up a constant variable to hold our OpenWeatherMap API key, which is required to make requests to the API.

DOM Elements:

const main = document.getElementById("main");: Gets the DOM element with the ID "main", which will be used to display the weather information.
const form = document.getElementById("form");: Gets the DOM element with the ID "form", which represents the search form for entering a city.
const search = document.getElementById("search");: Gets the DOM element with the ID "search", which is the input field where the user can type a city name.
const suggestions = document.getElementById("suggestions");: New addition to hold suggestions for city names.
URL Generation:

const url = (city) => ...: Defines a function that generates the URL for making API requests to OpenWeatherMap based on the provided city name. The city parameter is interpolated into the URL along with the API key and the units parameter is set to metric for Celsius.
async function getWeatherByLocation(city): This asynchronous function fetches weather data from the OpenWeatherMap API for the specified city. It uses the fetch function to make a request and awaits the response. The response data is checked for errors and converted to JSON format. The addWeatherToPage function is called with the JSON data to display the weather information on the page.

function addWeatherToPage(data): This function takes the weather data received from the API and dynamically generates HTML elements to display the weather information on the webpage. It extracts temperature, humidity, wind speed, and weather icon data from the response data and inserts them into the HTML structure.

function KtoC(K): A utility function that converts temperature from Kelvin to Celsius by subtracting 273.15.

Event Listener:

form.addEventListener("submit", (e) => { ... }): Adds an event listener to the form's submit event. When the form is submitted (e.g., by pressing Enter after entering a city name), the event listener prevents the default form submission behavior and retrieves the city entered by the user. If a city is provided, the getWeatherByLocation function is called to fetch and display the weather information for that city.
Suggestions Functionality:

A new feature to fetch and display city suggestions when the user starts typing in the search field has been added. This improves the user experience by allowing users to see possible matches.

NOTE:
CORS rules are essential for maintaining security while allowing cross-origin requests when appropriate. By configuring the right CORS headers on the server, developers can control which domains can access their resources and under what conditions.
Template Literals
The backticks (`) indicate the use of template literals, which allow for multi-line strings and string interpolation in JavaScript. This means you can embed expressions inside the string using ${expression} syntax.
