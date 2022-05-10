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
      total: 0,
      notFound: false,
      search: [],
      searching: false,
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.showPokemons = this.showPokemons.bind(this);
    this.nextPokemon = this.nextPokemon.bind(this);
  }

  async handleSearch(textSearch){
    if(!textSearch) {
      this.setState({
        search: [],
        notFound:false,
      })
      return;
    }
    
    this.setState({
      notFound: false,
      searching: true,
    })
    const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${textSearch.toLowerCase()}`);
    const data = await api.json().catch(()=> undefined);
    if(!data){
      this.setState({
        notFound: true,
      })
      return;
    }else{
      this.setState({
        search: [data],
      })
    }
    this.setState({
      searching: false,
    })
  }

  async showPokemons(limit = 20, offset = 0){

    const api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await api.json();
    const promises = await data.results.map(async pokemon => {
      const result = await fetch(pokemon.url);
      const res = await result.json();
      return res;
    });

    const results = await Promise.all(promises);

    this.setState(prev => ({
      search: [],
      pokemons: [...prev.pokemons, ...results],
      notFound: false,
      total: prev.total + results.length,
    }));  
  }

  nextPokemon(){
    this.showPokemons(20,this.state.total);
  }

  componentDidMount(){
    if(!this.state.searching){
      this.showPokemons();
    }
  }

  render(){
    
    const poke = this.state.search.length > 0 ? this.state.search : this.state.pokemons; 
    return (
      <>
        <Container>
          <Navbar title="PokeApi"></Navbar>
          <Search onHandleSearch={this.handleSearch} />
          {
            this.state.notFound ? (
              <div>'Pokemon not found'</div>
            ) : (
              <Grid pokemons={poke} next={this.nextPokemon}/>
            )
          }
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

