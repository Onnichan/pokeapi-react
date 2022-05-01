import React from 'react';

export default class Modal extends React.Component{

  constructor(props){
    super(props);
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(){
    this.props.onHandleModal();
  }
  render(){
    const pokemon = this.props.pokemon;
    return(
      <div className='modal'>
        <button className='modal__close' onClick={this.handleModal}>Close X</button>
        <div className='modal__content'>
          <h3 className='modal__content-title'>pokemon's name</h3>
          <img className='modal__content-image' src={pokemon} alt="" />
          <p className='modal__content-paragraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quaerat eligendi sit id magnam repudiandae facilis est iste earum maiores tempore consectetur nam quos similique ut libero dolore, deserunt quis!</p>
        </div>
      </div>
    )
  }
}