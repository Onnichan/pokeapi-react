import React from 'react';
import Modal from './modal';

export default class Card extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      image: '',
      type: '',
      showModal: false,
    }
    this.handleModal = this.handleModal.bind(this);
  }
  componentDidMount(){
    const api = fetch(this.props.pokemon.url);
    api.then(result => result.json())
    .then(data => {
      this.setState({
        image: data.sprites['back_default'],
        type: data.types[0].type.name,
      },()=>{
        console.log(data);
      });
    });
  }

  handleModal(){
    this.setState({
      showModal: !this.state.showModal
    },()=> {
      document.body.classList.toggle('dark');
    })
  }

  render(){
    const pokemon = this.props.pokemon;
    return(
      <>
        <div className='card' onClick={this.handleModal} style={{ backgroundColor: `var(--bg-poke-color-light-${this.state.type})`}}>
          <img className='card__image' src={this.state.image} alt="" />
          <h3 className='card__name'>{pokemon.name}</h3>
        </div>
        {
          this.state.showModal && <Modal onHandleModal={this.handleModal} pokemon={pokemon}/>
        }
      </>
    )
  }
}