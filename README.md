# SWAPI

### Overall Goal
To consumer the Star Wars API using react, fetch data and render to the screen.

### Why I used hooks
As a relatively new concept to the react.js world, I decided to utilise hooks for this coding challenge as opposed to class based components and/or redux.
The reason I chose to do so was mostly to challenge myself. Prior to this task, I have only used hooks once, so I assumed only using hooks and functional components would be a little more difficult than other methods I was comfortable with, yet I understand being more comfortable with this new-ish concept would be more valuable than going with what I was already comfortable with.

### Process
1. Write up a list of coding requirements to fulfill the coding goal.
2. I began on the index page, working with hooks to grab the film data and set it to the state. Add conditional rendering to display a loading message until the data was fetched.
3. Push favourite films to separate state array (later changed).
4. Create notification for when films are favourited/unfavourited.
5. Save and load data with localStorage.
6. Pass a particular film to a single page view.
7. Create searchbar to filter movies.
8. Create re-usable component to display text on hover
9. Layout rendered elements on single film page
10. Refactor how favourite films are saved in state and alter searchbar component to work accordingly

### Challenges
#### Asynchronous useEffect hook
As I came to discover, useEffect is not initially friendly when it comes to running asynchronous functions. You cannot call useEffect asynchronously, but instead can create an asynchronous function inside the hook and can then call that asynchronous function immediately within useEffect.

#### Setting state with useState
In multiple instances I had trouble setting the state with the useState hook as it would not always update the state immediately, resulting in incorrect/delayed values being stored in state. The work around this was to add a boolean loading state which would set to true when fetching data, then once the data was fetched, it would set it to false. The state would be updated only when the loading state was set to false.

#### Searchbar working in conjunction with favourited list
Initially, I saved all the films that are fetched on the home page to a single array in state. Once a film was favourited, I would remove that film from the array and add it to a different array where the favourite films were stored. This made it difficult for the searchbar component to work with. In the end, I realised it would be best to simply append a new key/value to each film (favourite: false) and switch it to true once a film was favourited. This also made the searchbar a lot more effective as it was then working with just 1 array instead of 2.

#### Working with SWAPI
The API itself seems to be quite temperamental. Sometimes data would be fetched almost immediately, other times it could take up to a minute.

### Further improvements/additions
Although code was refactored and is much cleaner than it initially was, I know I could further refactor components such as the tooltip to allow it to work much more dynamically.


