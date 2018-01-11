import React from 'react';
import { observer } from 'mobx-react';

import { List } from 'material-ui/List';

import Todo from './Todo';


@observer class TodoList extends React.Component {

  componentDidMount() {
    if (this.props.store.demoMode) {
      this.cheesyDemo();
    }
  }

  cheesyDemo() {
    function setTimeouts(arrayOfFunctions, period) {
      let counter = 0;
      for (const f of arrayOfFunctions) {
        setTimeout(f, counter);
        counter += period;
      }
    }

    const { addTodo } = this.props.store;

    setTimeouts([
      () => { addTodo('Welcome to this nested todo list!'); },
      () => { addTodo('You can add a new item by pressing enter.').indent(); },
      () => {
        const n = addTodo('Move up/down using the arrows. Indent with tab/shift+tab.');
        n.indent();
        n.indent();
      },
      () => { addTodo('Move an item up/down with meta+up/meta+down.').indent(); },
      () => { addTodo('Delete an empty line with backspace, or click the trashcan.'); },
    ],
    1000);
  }


  render() {
    const { filteredTodos, addTodoAfter, focusNode } = this.props.store;

    const items = filteredTodos.map((todo, index) => (
      <Todo
        key={todo.id}
        store={this.props.store}
        addAfter={() => addTodoAfter(todo)}
        arrayIndex={index}
        completed={todo.completed}
        deleteSelf={todo.delete}
        depth={todo.depth}
        focusNode={focusNode}
        getsFocus={todo.getsFocus}
        id={todo.id}
        indent={todo.indent}
        moveDown={todo.moveDown}
        moveUp={todo.moveUp}
        node={todo}
        text={todo.text}
        toggle={todo.toggle}
        unindent={todo.unindent}
        update={todo.update}
      />
    ));

    return (
      <List>
        {items}
      </List>
    );
  }
}

export default TodoList;
