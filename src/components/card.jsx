import React from 'react';

export default class Card extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      image: '',
    }
  }
  componentDidMount(){
    const api = fetch(this.props.pokemon.url);
    api.then(result => result.json())
    .then(data => {
      this.setState({
        image: data.sprites['back_default'],
      })
    });
  }

  render(){
    const pokemon = this.props.pokemon;
    return(
      <div className='card'>
        <img src={this.state.image} alt="" />
        <h3>{pokemon.name}</h3>
      </div>
    )
  }
}