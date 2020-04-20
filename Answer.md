1. What problem does the context API help solve?

    Its a React framework, which enables us to share specific forms of data across all levels of the application, it also aims to solve the promblem of prop drilling.

2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: are payloads of information that send data from your application to your store. 
    Reducers: they are functions that listen for specifi signals from the application. When their name is called they capture information and inject it into the state.
    Store: it is an object that holds state/data/information
    The single source of truth is our state tree, that is not rewritten or reshaped. its gives us the availability to easily retrieve information in constant time and maintain a clean structure for the state of our application. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is the "Global State" that all components in the component tree can access.
    Component state is local to a single component and cannot be seen outside of this component

4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    It is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have completed. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    I personally would use Redux, because of its complexity and state management. I like how it takes a significant amount of code to set it up. but once it's set up and the application scales to a good size, then the handleling and management of state becomes easy.