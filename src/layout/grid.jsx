import React from 'react';
import Card from '../components/card';

export default class Grid extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      next: '',
    }
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(){
    const api = fetch(this.state.next);
    api.then(result => result.json())
    .then(data => {
      this.setState(prev=>({
        pokemons: [ ...prev.pokemons, ...data.results],
        next: data.next,
      }))
    })
  }
  
  componentDidMount(){
    this.setState({
      pokemons: [...this.props.pokemons,...this.state.pokemons],
      next: this.props.next,
    },()=>{
      console.log('state pokemons', this.state.pokemons,this.state.next);
      console.log('next', this.state.next);
    })
  }
  render(){
    
    return(
      <div className='grid'>
        <div className='grid__pokemon'>
        {
          this.props.pokemons.map(poke=> (           
            <Card key={poke.name} pokemon={poke}></Card>
          ))
        }
        </div>
        {
          (this.state.pokemons.length >= 20) && 
            <div className="grid__wrapper-button">
              <button className='grid__button' type='button' onClick={this.handleButton}>Show more</button>
            </div>
        }
      </div>
    )
  }
}