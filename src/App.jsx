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
      searchPokemon: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(textSearch){
    this.setState({
      searchPokemon: textSearch,
    },()=> {
      console.log(this.state.searchPokemon);
    });  
  }

  render(){
    return (
      <>
        <Container>
          <Navbar title="PokeApi"></Navbar>
          <Search 
            search={this.state.searchPokemon}
            onHandleSearch={this.handleSearch} 
          />
          <Grid 
            search={this.state.searchPokemon}
          />
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

