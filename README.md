# Init commands

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Redux Notes

By using Redux we’re solving this problems by introducing a central data store in our application. The store contains the state of the application and is the source of truth for components. By using the store concept you do not need to synchronize state between components manually. Instead you can fully rely on the Redux store at any time.

**Redux has three main parts: Actions, Reducers and Store**

## Actions
Actions are used to send information from the application to the store.

Actions are JavaScript objects like:

{
    type: LOGIN_USER,
    payload: {username: ‘sebastian’, password: ‘123456’}
}

Action objects are created by using functions. These functions are called action creators:

function authUser(data) {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

Calling actions in the application is easy by using the dispatch method:

dispatch(authUser(data));

## Reducers

Reducers are pure JavaScript functions that take the current application state and an action object and return a new application state:

function myReducer (state , action)  {
  switch (action.type) {
    case 'LOGIN_USER':
      return Object.assign({}, state, {
        auth: action.payload
      })
    default:
      return state
  }
}

The important thing to notice here is that the state is not changed directly. Instead a new state object (based on the old state) is created and the update is done to the new state.

## Store

The store is the central objects that holds the state of the application. The store is created by using the createStore method from the Redux library

import { createStore } from ‘redux’;
let store = createStore(myReducer);

You need to pass in the reducer function as a parameter. Now you’re ready to disptach a action to the store which is handled by the reducer:

let authData = {username: ‘sebastian’, password: ‘123456’};
store.dispatch(authUser(authData));

￼
