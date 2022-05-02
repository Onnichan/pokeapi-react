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
    console.log('poke',pokemon)
    return(
      <div className='modal'>
        <button className='modal__close' onClick={this.handleModal}>Close X</button>
        <div className='modal__content'>
          <div className="modal__content-features">
            <span className='modal__content-featuresElectric'>Type: {pokemon.types[0].type.name}</span>
            <span className='modal__content-featuresHabitat'>{pokemon.name}</span>
            <span className='modal__content-featuresGeneration'>{pokemon.name}</span>
            <span className='modal__content-featuresWeight'>weight : {pokemon.weight}</span>
          </div>
          <div className="modal__content-description">
            <img className='modal__content-descriptionImage' src={pokemon.sprites['front_default']} alt="" />
            <h3 className='modal__content-descriptionTitle'>{pokemon.name}</h3>
            <p className='modal__content-descriptionParagraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quaerat eligendi </p>
          </div>
          <div className="modal__content-other">
            <div className="modal__content-otherBreadcrumb">
              <h3>Abilities</h3>
              { 
                pokemon.abilities.map(({ability})=> (
                  <span key={ability.name}>{ability.name}</span>
                ))
              }
            </div>
            <div className="modal__content-otherStats">
              <h3 className='modal__content-otherStatsTitle'>Stats</h3>
              { 
                pokemon.stats.map((stat)=> (
                  <div key={stat.stat.name}>{stat.stat.name +' '+ stat.base_stat} </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}