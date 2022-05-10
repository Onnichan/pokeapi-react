import React from 'react';
import SearchIcon from '../assets/icons/busqueda.svg';

export default class Search extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickSearch = this.handleClickSearch.bind(this);
  }

  handleSearch(e){
   
    this.setState({
      search: e.target.value,
    })
    if(e.target.value.length === 0) this.props.onHandleSearch(null); 
    
  }

  handleClickSearch(e){
    if(e.keyCode === 13 || e.type === 'click'){
      e.preventDefault();
      this.props.onHandleSearch(this.state.search);
    }
  }

  render(){
    return(
      <div className='search'>
        <div className="search__wrapper">
          <input className='search__input' 
            type="search"
            onChange={this.handleSearch}
            placeholder='Search your pokemon ... 😏'
            onKeyDown={this.handleClickSearch}
            autoFocus
          />
          <img className='search__icon' src={SearchIcon} alt="" />
        </div>
        <button className='search__button' onClick={this.handleClickSearch}>Search</button>
      </div>
    )
  }
}