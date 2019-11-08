1. What problem does the context API help solve?
    - It helps to avoid propdrilling by making the data in context available to every component in the app.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    - Actions = Information in the form of payloads that send data from the app to the store that holds all the state in a redux app. They are the source of information for the store.
    - Reducers = A pure function that takes previous state and an action and return the new state based on what the action tells it to do.
    - Store = The part of the redux app that stores all of the state for the app. Typically in the index.js file for the project. - single source of state for the app.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    - Application state is the global state of the app. All the components in the app have access to the application state.
    - Copmonent state is the state that can only be accessed by a specific component in an app. This state cannot be accessed by other components.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    - Redux-thunk is a middleware that lets you make action creators that return a function instead of an object. This allows you to essentially perform 2 actions or more within one action creator. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    - Although it is extremely challenging to work with, hopefully easier with time, I really enjoy redux. It makes me feel like I am slowly becoming a developer and I enjoy the complexity because it shows me how far I have come so far in my learning. I also feel like it gives me the opportunity to mess around with how it works on my own time to come up with some really cool apps with a lot of functionaliy. 
