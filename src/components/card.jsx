import React from 'react';
import Modal from './modal';
import PokeballImage from '../assets/icons/pokeball.png';

export default class Card extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      image: '',
      type: '',
      order: '',
      pokemon: {},
      showModal: false,
    }
    this.handleModal = this.handleModal.bind(this);
  }
  componentDidMount(){
    const api = fetch(this.props.pokemon.url);
    api.then(result => result.json())
    .then(data => {
      this.setState({
        image: data.sprites['front_default'],
        type: data.types[0].type.name,
        order: data.order,
        pokemon: data,
      },()=>{
        // console.log('data', this.state.pokemon);
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
          <div className='card__title'>
            <img className='card__title-img' src={PokeballImage} alt="" />
            <span className='card__title-text'>{`#${this.state.order}`}</span>
          </div>
          <div className="card__badge">
           {this.state.type}
          </div>
          <h3 className='card__name'>{pokemon.name}</h3>
          <img className='card__image' width={120} height={120} src={this.state.image} alt="" />
        </div>
        {
          this.state.showModal && <Modal onHandleModal={this.handleModal} pokemon={this.state.pokemon}/>
        }
      </>
    )
  }
}