import React from 'react'

function Navigation() {

    const user = false

    if (user) {
        return (
            <div>
              <div>Create New Entry</div>
              <div>My Journal</div>
              <div>About</div>
            </div>
          );
    } else {
        return (
            <div>
              <div>About</div>
            </div>
          );
    }

  }
  
  export default Navigation;
  