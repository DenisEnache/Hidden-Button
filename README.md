# HiddenButton Application

### Overview

The HiddenButton web application is a simple game. The application features two main components: a set of three buttons where one is randomly assigned as the winner, and a dynamic button generator where users can specify the number of buttons to be generated, with one randomly selected as the winner upon generation.

### Features

**Three-Button Luck Test:** Initially, the application displays three buttons. Users can click on one to see if they've selected the winning button.

**Dynamic Button Generator:** Users can input a desired number of buttons (between 2 and 100), and the application will generate that number of buttons. Clicking on one of these buttons will reveal if it's the winner.

### How It Works

The application uses JavaScript to randomly select a winning button among the initial three buttons and any dynamically generated set of buttons.
Event listeners are added to buttons to handle click events, determining if the clicked button is the winner and updating its style and text accordingly.
The Bootstrap framework is used for styling, making the application responsive and visually appealing.

