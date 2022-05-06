import React from 'react';
import {searchIcon} from '../utils/icons';

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
    const colors = ['#FC6B6E','#2196F3','#094BE8','#2196F3','#3ED1E0','#CF9B48'];
 
    return(
      <div className='modal'>
        <button className='modal__close' onClick={this.handleModal}>Close X</button>
        <div className='modal__content'>
          <div className="modal__content-features" style={{backgroundColor: `var(--bg-poke-color-dark-${pokemon.types[0].type.name})`}}>
            <div className="modal__content-featuresRight">
              <span className='modal__content-featuresHabitat'>
                <img className='modal__content-featuresImage' src={searchIcon(pokemon.types[0].type.name)} alt="" />
                {/* {pokemon.types[0].type.name} */}
              </span>
              {
                pokemon['past_types'].length > 0 && <span className='modal__content-featuresGeneration'>{pokemon['past_types'][0].generation.name}</span>
              }
            </div>
            <div className="modal__content-featuresLeft">
              <span className='modal__content-featuresHeight'>Height: {pokemon.height}</span>
              <span className='modal__content-featuresWeight'>weight : {pokemon.weight}</span>
              {/* {
                pokemon['past_types'].length > 0 && <span className='modal__content-featuresGeneration'>{pokemon['past_types'][0].generation.name}</span>
              } */}
            </div>
          </div>
          <div className="modal__content-description">
            <img className='modal__content-descriptionImage' src={pokemon.sprites['front_default']} alt="" />
            <h3 className='modal__content-descriptionTitle'>{pokemon.name}</h3>
            <p className='modal__content-descriptionParagraph'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex quaerat eligendi </p>
          </div>
          <div className="modal__content-other">
            <div className="modal__content-otherBreadcrumb">
              <h4 className='modal__content-otherBreadcrumbAbilities'>Abilities</h4>
              { 
                pokemon.abilities.map(({ability})=> (
                  <span key={ability.name} className='modal__content-otherBreadcrumbAbility'>{ability.name}</span>
                ))
              }
            </div>
            <div className="modal__content-otherStats">
              <h4 className='modal__content-otherStatsTitle'>Stats</h4>
              { 
                pokemon.stats.map((stat, index)=> (
                  <div className='modal__content-otherStat' key={stat.stat.name}>
                    <div className='modal__content-otherStatContent'>
                      <span className='modal__content-otherStatContentPower'>{stat.stat.name}</span>
                      <span className='modal__content-otherStatContentValue'>{stat.base_stat}</span>
                    </div>
                    <div className='modal__content-otherStatTimeLine'>
                      {
                        stat.base_stat >= 100 ?  
                          <div className='modal__content-otherStatTimeLineStat' style={{width: '100%', backgroundColor: `${colors[index]}`}}></div> :
                          <div className='modal__content-otherStatTimeLineStat' style={{width: `${stat.base_stat}%`, backgroundColor: `${colors[index]}`}}></div>
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}