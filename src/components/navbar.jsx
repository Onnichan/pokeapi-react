import React from 'react';

export default class Navbar extends React.Component{

  render(){
    return(
      <div className='navbar'>
        <span className='navbar__title'>{this.props.title}</span>
      </div>
    )
  }
}