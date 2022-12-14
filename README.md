# The Pokedex! 

This Repository connects the PokeAPI to an app built with React, vite and TypeScript!
I used conventionnal commits!

## Installation:

```
$ npm install 
```

```
$ npm run dev
```

## UI Description

1. Write a form where users can enter the pokemon name and your app fetches and displays that pokemon's data
2. When a request hasn't been made yet, show no pokemon yet, please submit a pokemon!
3. While fetching the pokemon data, show a loading screen
4. Display the pokemon data as soon as it arrives
5. When something goes wrong (like a network error, or a pokemon not existing in the database), the error should be displayed at the bottom of the search bar.
6. There should be a button to try again after an error. Upon clicking this, the no pokemon yet, please submit a pokemon! will be shown and the current string on the search bar would be removed.
7. After an error, the user should be able to use the search bar to search for a new pokemon without having to click the try again button.
