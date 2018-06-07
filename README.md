<h1 align="center">ToDo ReactJS List</h1>

<div align="center">
  <sub>The little ToDo that could to Do. Written by
  <a href="https://github.com/Grinzzly">Grinzzly</a>
  </a>
  <br>
  <br>
  <a href="https://github.com/airbnb/javascript">
        <img src="https://img.shields.io/badge/Code%20Style-Airbnb-red.svg"
             alt="Airbnb">
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/60%25%20of%20the%20time-works%20every%20time-blue.svg" alt="Quality">
</div>

## About

**ToDo ReactJS List** is a [React](https://facebook.github.io/react) -based task list (or "todo list")
prototype written in JavaScript (ES6+) built using the [Material-UI](http://www.material-ui.com/) React component library.

## Install / Run in dev mode

From the root of the project directory:

```
npm install
npm start
open http://localhost:3000
```

Or if you're a `yarn` person:

```
yarn
yarn start
open http://localhost:3000
```

## Style

This project uses the [Airbnb Javascript + React Style Guide](https://github.com/airbnb/javascript) for coding style, and is configured for linting using ESLint.

## Project Structure

For a project of this scale one of the primary considerations was keeping the design simple and understandable. Hence we have:

- **Entry Point** - `src/index.jsx` and `src/App.jsx` provide the entry point to the App. `index` provides a hot reloading wrapper for dev, while `App` provides the material theme and access to the store.
- **Stores** - `src/stores/TodoListStore.js` and `src/stores/TodoNode.js` provide the state management and define the essential actions to manipulate the tree that represents the visual nested task list.
- **Components** - `src/components/TodoList.jsx`, `Todo.jsx`, `AddTodo.jsx`, and `Footer.jsx` are the React building block components for the app.
  - I chose inline styling (of which there is fairly little) for simplicity. If the app were to grow, a more robust styling arrangement could be easily put in place.
  - Since the user interactions are almost all based on clicking, typing or keyboard shortcuts that pertain to one particular todo node, I put the main user interaction logic in `Todo.jsx`, which has worked great.
- **Layouts** - `src/layouts/Primary.jsx` is currently the sole layout (alternatively called a screen/scene/view depending on who you talk to) for the app, but this structure allows for other layouts in the future like menus/drawers, settings screens, etc.

## Technology used
* __ReactJS__
* __MobX__
* __Material-UI__
* __Node.js__
* __Webpack__

## License

[MIT](./LICENSE)
