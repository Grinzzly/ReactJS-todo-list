import React from 'react';
import { observer } from 'mobx-react';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';


const styles = {
  container: {
    textAlign: 'left',
    padding: 0,
  },
  paper: {
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    position: 'relative',
    margin: 20,
    marginBottom: 200,
    height: '100%',
    minWidth: '460px',
    maxWidth: '800px',
    minHeight: '510px',
  },
  contentBody: {
    minHeight: '510px',
  },
  todoList: {},
  footerArea: {
    padding: 0,
    bottom: '0px',
    left: '0px',
    right: '0px',
    width: '100%',
  },
  addButton: {
    textAlign: 'right',
    bottom: '0px',
    right: '0px',
    margin: '40px',
    marginRight: '50px',
  },
};


@observer
class Primary extends React.Component {
  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };

  switchStore = (category) => {
    console.debug('switchTo ', category);
  };

  addCategory = () => {
    console.debug('categoryAdded');
  };

  render() {

    return (
      <div style={styles.container}>
        <Paper style={styles.paper} zDepth={4}>
          <div style={styles.contentBody}>
            <AppBar
              title="ToDo list"
              iconElementLeft={
                <IconMenu
                  iconButtonElement={<IconButton><NavigationMenu/></IconButton>}
                  onChange={this.handleChangeMultiple}
                  value={this.state.valueMultiple}
                  multiple={true}
                >
                  <MenuItem value="1" onClick={this.switchStore} primaryText="Category 1"/>
                  <MenuItem value="2" onClick={this.switchStore} primaryText="Category 2"/>
                  <MenuItem value="3" onClick={this.switchStore} primaryText="Category 3"/>
                  <MenuItem value="0" onClick={this.addCategory} primaryText="Add"/>
                </IconMenu>
              }
            />
            <Subheader>Created with love by Grinzzly</Subheader>
            <TodoList store={this.props.store} style={styles.todoList}/>
          </div>
          <div style={styles.footerArea}>
            <div style={styles.addButton}>
              <AddTodo store={this.props.store}/>
            </div>
            <Footer store={this.props.store}/>
          </div>
        </Paper>
      </div>
    );
  }
}

export default Primary;
