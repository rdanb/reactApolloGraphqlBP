# reactApolloGraphqlBP

### How to run
1. Run `npm run install:graphql-server`. After it is done, it'll start the app right away. (localhost:5000)
2. In another cli, run `npm run install:mock-service`. After it is done, it'll start the app right away. (localhost:4000)
3. In another cli, run `npm run install:react-app`. After it is done, it'll start the app right away. (localhost:3000)

### Contents

##### mockService folder
An Express REST application that exposes the following endpoints by running `node ./index.js`:

  1. http://localhost:5000/person/$input$ - returns an object with two properties:
    - val1: same as $input$
    - val2: $input$ squared
  2. http://localhost:5000/facility/$val1$ - returns an object with two properties:
    - val3: equals $val1$ multiplied by 5.5
    - val4: equals $val1$ + 100
  3. http://localhost:5000/exposure/$val2$ - returns an object with one property:
    - val5: equivalent flipped number (example: 123 -> 321; 5780 -> 875 -- note there's no 0 as numbers cannot start with 0)

You may find the above details under `./mockService/util/formatters.js`

##### graphqlServer folder
Apollo server that's running on `localhost:4000` and chains all the requests as per the instructions presented in the exercise, returning at the end `{ val3: computedValue; val5: computedValue }`. Running `node ./index.js` will start the graphQl playground and for
```
{
  exposure(personId:6) {
  	val3
    val5
  }
}
```
it'll return
```
{
  "data": {
    "exposure": {
      "val3": 33,
      "val5": 63
    }
  }
}
```

##### react-app folder
An application bootstrapped with `create-react-app` package. Entry point is index.js as well, but due to React's restrictions, it had to be placed inside `./src` folder. Other packages worth mentioning that were used:
  * yup - lightweight validation library
  * styled-components - easy to style components depending on passed props. scoped code just like css-modules, but has an advantage when it comes to css animations, hence my choice

Globally applied css may be found in `./src/index.css`

May be run with `npm start` or `react-scripts start`

Mostly using react hooks for managing component state.

Using `React.createPortal` for the modal component.
