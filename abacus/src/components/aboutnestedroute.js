import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

const Main_App = {
      backgroundColor:"#4CAF50",
      textAlign:"left"
        }
class NestedAbout extends Component {
    render() {
        return (
             <div className="App">
               <AppBar style={Main_App}
    title="SAYLANI WELFARE BLOOD DONATION SYSTEM"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />

                <h1>WELCOME TO SAYLANI WELFARE BLOOD DONATION SYSTEM</h1>
            </div>



        );
    }
}

export default NestedAbout;
