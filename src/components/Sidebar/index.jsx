import React, { Component } from 'react';
import SidebarComponent from 'react-sidebar';
import './index.css';



class Sidebar extends Component {
  state = {sidebarOpen: true};


  onSetSidebarOpen = (open) => {
    this.setState({sidebarOpen: open})
  };

  menuButtonClick(ev) {
   ev.preventDefault();
   this.onSetSidebarOpen(!this.state.open);
 };

  render() {
    const sidebarContent = (
      <div className="sidebar">
        <b>Sidebar content</b>
        <h4>Login</h4>
        <h4>Home</h4>
        <h4>About us</h4>
        <h4>contact us</h4>
      </div>
    );
    return (
      <SidebarComponent
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
      >
        <a onClick={this.menuButtonClick.bind(this)} href="#">=</a>
        {this.props.children}
      </SidebarComponent>
    );
  }
}

export default Sidebar;
