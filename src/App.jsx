import Search from './components/search';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Grid from './layout/grid';
import Container from './layout/container';
import React from 'react';
import './App.css';

export default class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      pokemons: [],
      nextPokemon: '',
      notFound: false,
      searching: false,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.showPokemons = this.showPokemons.bind(this);
  }

  async handleSearch(textSearch){
    if(!textSearch) {
      return this.showPokemons();
    }
    
    this.setState({
      notFound: false,
      searching: true,
    })
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${textSearch}`);
    const data = await api.json();
    if(!data){
      this.setState({
        notFound: true,
      })
      return;
    }else{
      this.setState({
        pokemons: [data],
      })
    }
    this.setState({
      searching: false,
    })
  }

  async showPokemons(){

    const api = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await api.json();
    this.setState({
      nextPokemon: data.next,
    })
    const promises = await data.results.map(async pokemon => {
      const result = await fetch(pokemon.url);
      const res = await result.json();
      return res;
    });

    const results = await Promise.all(promises);

    this.setState({
      pokemons: results,
      notFound: false,
    });  
  }

  componentDidMount(){
    if(!this.state.searching){
      this.showPokemons();
    }
  }

  render(){
    
    return (
      <>
        <Container>
          <Navbar title="PokeApi"></Navbar>
          <Search onHandleSearch={this.handleSearch} />
          {
            this.state.notFound ? (
              <div>'Pokemon not found'</div>
            ) : (
              <Grid pokemons={this.state.pokemons} next={this.state.nextPokemon} previous={this.state.previous}/>
            )
          }
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

