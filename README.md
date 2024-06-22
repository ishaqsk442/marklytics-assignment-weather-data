Project Description
===================
The Weather Dashboard is an interactive and visually appealing web application built using React. It visualizes mock weather data to demonstrate various skills in React development, including component structure, state management, and UI design. The dashboard features a line chart and a bar chart to display weather trends and precipitation levels, respectively. Users can interact with the dashboard by selecting different cities from a dropdown menu. The application is designed to be responsive, ensuring a seamless experience on both desktop and mobile devices.

Netlify link : https://ishaqshaik-marklytics.netlify.app/

Setup Instructions
=================
Prerequisites
Ensure you have Node.js and npm installed on your machine. You can download them from Node.js.

Installation
Clone the repository
git clone https://github.com/ishaqsk442/marklytics-assignment-weather-data.git
cd weather-dashboard
Install dependencies

Navigate to the project directory and install the required dependencies using npm:


npm install
Running the Project
Start the development server

Once the dependencies are installed, start the development server:


npm start
This command will run the application in development mode. Open http://localhost:3000 to view it in the browser.

Build the project for production

To create a production build of the project, run:



npm run build
This will bundle the React application into static files for production, which can be deployed to a web server.

Project Structure
======================

/src
  /components
    Header.js        // Header component
    LineChart.js     // Line chart component for temperature trends
    BarChart.js      // Bar chart component for precipitation levels
    Dropdown.js      // Dropdown component for selecting cities
  /styles
    GlobalStyles.js  // Global styles using styled-components
  App.js             // Main application component
  index.js           // Entry point of the application
Technologies Used
React
Axios
Recharts
styled-components
