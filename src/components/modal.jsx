import React from 'react';

export default class Modal extends React.Component{

  render(){
    return(
      <div className='modal'>{this.props.children}</div>
    )
  }
}