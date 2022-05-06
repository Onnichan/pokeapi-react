import React from 'react';
import Modal from './modal';
import PokeballImage from '../assets/icons/pokeball.png';
import {searchIcon} from '../utils/icons';

export default class Card extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    }
    this.handleModal = this.handleModal.bind(this);
  }

  handleModal(){
    this.setState({
      showModal: !this.state.showModal
    },()=> {
      document.body.classList.toggle('dark');
    })
  }

  render(){
    
    const {pokemon} = this.props;
 
    return(
      <>
        <div className='card' onClick={this.handleModal} style={{ backgroundColor: `var(--bg-poke-color-light-${pokemon.types[0].type.name})`}}>
          <div className='card__title'>
            <img className='card__title-img' src={PokeballImage} alt="" />
            <span className='card__title-text'>{`#${pokemon.order}`}</span>
          </div>
          <div className="card__badge" style={{ backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})`}}>
            <img className='card__badge-Icon' src={searchIcon(pokemon.types[0].type.name)} alt="" />
            <span className='card__badge-text'>{pokemon.types[0].type.name}</span>
          </div>
          <h3 className='card__name'>{pokemon.name}</h3>
          <img className='card__image' width={120} height={120} src={pokemon.sprites['front_default']} alt="" loading='lazy'/>
        </div>
        {
          this.state.showModal && <Modal onHandleModal={this.handleModal} pokemon={pokemon}/>
        }
      </>
    )
  }
}