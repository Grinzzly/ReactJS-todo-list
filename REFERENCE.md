Reference Information
===========

*This document contains notes and design plans for the project, as well as references to tools, sites, commands, etc. that pertain to the project. Whereas the [README](./README.md) is intended for public consumption, this will likely only make sense to other developers familiar with the project.*

# Building

To build for production, run:

```
npm run prod_build
```

There's currently still a bit more to do after that's done, including putting the bundle.js and index.html files in the right folders.

TODO: write up a configuration to build/publish the project.

# Project Plan

## Adding hierarchy to the task list

Data structure: an array of Todo objects, each of which has its own `childNodes` array (avoiding `children` for potential react name conflicts).

To display: depth first traversal. Write a recursive function to assemble the todo list elements. Keep track of the depth, so that each Todo item can display with the appropriate amount of indentation.

Would it help if each Todo node kept track of its parent as well? TBD.

Transformations needed:
- `add element` - adds a new element at the next location at the current depth. obviously this function will have to be aware of where focus currently is. (can I search through the tree to find this out? are these elements aware of whether or not they have focus? I'll want to check whether the text field, checkbox or any other part of the list item has focus.)
- `remove element` - removes the current element and sets focus on the next item up in the list, regardless of depth.
- `indent element` - takes the current node (and all of its children) and adds it to the end of the childNodes array of the previous element in the element's current position and depth.
- `decrease indent` - moves the current node to the parent node's array, directly following the parent.

## Creating controls for the task list

Ideal controls would be keyboard based:
- Cmd+up and Cmd+down to move the element up/down
- tab and shift+tab to indent/decrease indent
- enter to add element
- backspace on an empty item to delete, or the trashcan icon, or perhaps Cmd+delete

# Tools and guides

## Redux

Tutorial source: http://redux.js.org/docs/basics/ExampleTodoList.html

## Yarn
These were the commands for the create-react-app boilerplate:

```
Inside build directory, you can run several commands:

  yarn start
    Starts the development server.

  yarn run build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
```
