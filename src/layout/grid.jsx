import React from 'react';
import Card from '../components/card';

export default class Grid extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      next: '',
      previous: '', 
    }
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount(){
    const api = fetch('https://pokeapi.co/api/v2/pokemon');
    api.then(response => response.json())
    .then(data => {
      this.setState({
        next: data.next,
        previous: data.previous,
        pokemons: data.results,
      });
    });    
  }

  handleButton(){
    const api = fetch(this.state.next);
    api.then(result => result.json())
    .then(data => {
      this.setState(prev=>({
        pokemons: [ ...prev.pokemons, ...data.results],
        next: data.next,
        previous: data.previous,
      }))
    })
    console.log('show 20 pokemons more');
  }

  render(){

    const search = this.props.search; 
    return(
      <div className='grid'>
        <div className='grid__pokemon'>
          {
            this.filter = search ? (
              this.state.pokemons.filter(pokemon=> pokemon.name.indexOf(search) !== -1)
              .map(pokemon=> (
                <Card key={pokemon.name} pokemon={pokemon}></Card>
              ))
              
            ): (
              this.state.pokemons.map(pokemon=> (
                <Card key={pokemon.name} pokemon={pokemon}></Card>
              ))
            )
            
          }
        </div>
        {
          (this.state.pokemons.length >= 20 && this.filter.length >= 20) && 
            <div className="grid__wrapper-button">
              <button className='grid__button' type='button' onClick={this.handleButton}>Show more</button>
            </div>
        }
      </div>
    )
  }
}