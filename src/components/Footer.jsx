import React from 'react';
import {observer} from 'mobx-react';

import FontIcon from 'material-ui/FontIcon';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import { grey100 } from 'material-ui/styles/colors';

const showAllIcon = <FontIcon className="material-icons">description</FontIcon>;
const showActiveIcon = <FontIcon className="material-icons">flip_to_front</FontIcon>;
const showCompletedIcon = <FontIcon className="material-icons">done_all</FontIcon>;


@observer
class Footer extends React.Component {

  render() {
    const {store} = this.props;

    return (
      <BottomNavigation
        style={{
          backgroundColor: grey100,
        }}
        selectedIndex={{
          SHOW_ALL: 0,
          SHOW_ACTIVE: 1,
          SHOW_COMPLETED: 2,
        }[store.visibilityFilter]}
      >
        <BottomNavigationItem
          label="Show All"
          icon={showAllIcon}
          onTouchTap={() =>
            store.visibilityFilter = 'SHOW_ALL'
          }
        />
        <BottomNavigationItem
          label="Show Active"
          icon={showActiveIcon}
          onTouchTap={() =>
            store.visibilityFilter = 'SHOW_ACTIVE'
          }
        />
        <BottomNavigationItem
          label="Show Completed"
          icon={showCompletedIcon}
          onTouchTap={() =>
            store.visibilityFilter = 'SHOW_COMPLETED'
          }
        />
      </BottomNavigation>
    );
  }
}


export default Footer;
