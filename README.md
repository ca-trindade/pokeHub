# PokeHub

![image](https://github.com/ca-trindade/pokeHub/assets/88114751/c24aa3ce-023f-4a65-b0f3-9495a5860d8c)


## Overview

PokeHub is a web application that utilizes the Pokémon API (https://pokeapi.co/) to provide users with information about various Pokémon. The project is a collaborative effort by [ca-trindade](https://github.com/ca-trindade) and [tatitaketsuma](https://github.com/tatitaketsuma).

## Features

- **Pokémon Information**: Retrieve detailed information about different Pokémon.
- **Redux State Management**: Utilizes Redux Toolkit for efficient state management.
- **Persistent State**: Implements Redux Persist to maintain state across page refreshes.
- **Styled Components**: Uses styled-components for styling to create a visually appealing interface.
- **Routing**: Implements a router for creating navigational routes.
- **Redux Selector with Lodash**: Utilizes Lodash for efficient selection of data from the Redux store.

## Technologies Used

- **Yarn**: Package manager for managing project dependencies.
- **Vite**: Build tool that enhances web development experience.
- **Axios**: HTTP client for making requests to the Pokémon API.
- **Redux Toolkit**: State management library for managing the application's state.
- **Redux Persist**: Library for persisting and rehydrating a Redux store.
- **Styled Components**: CSS-in-JS library for styling React components.
- **React Router**: Library for routing in a React application.
- **Lodash**: Utility library for simplifying data manipulation in JavaScript.
- **Cypress for Testing**: Integration of Cypress for end-to-end testing.

## State Management with Redux Toolkit

Redux Toolkit is used with two stores:
1. **pokemonDataFromApi**: Accumulates data received in blocks of 6 from the API and ensures all elements are stored cumulatively.
2. **pokemonName**: Stores the Pokémon name entered in the search box, utilized in the modal section to avoid passing unnecessary props. And also used to complete the URL to fetching API when the pokemon's data isn't matching on pokemonDataFromApi store.

The **pokemonDataFromApi** store is also used to load the Card component, displaying Pokémon randomly from the accumulated list. Redux Persist ensures a seamless refresh experience when the modal is open.

## Router for Navigation and URL Creation

The application utilizes React Router for efficient navigation and URL creation.

## Additional Components

- **Loading Component**: Loaded in the Card section, since is the final component to obtain updated information when the page loads.
- **SearchInput Component**: Displays an error message for inputs that differ from recognized Pokémon names in a list called **pokemonsName**.
**pokemonsName** it also provides letter-based suggestions from a static list, organized alphabetically, reducing the loop to the number of English alphabet letters.



## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/ca-trindade/pokeHub.git
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Run PokeHub:
   ```bash
   yarn dev
   ```
4. Open the application in your browser at http://localhost:5173


*Tests. Run Cypress to execute your tests:
   ```bash
   yarn run cypress open
   ```