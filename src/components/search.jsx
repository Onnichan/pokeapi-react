import React from 'react';
import SearchIcon from '../assets/icons/busqueda.svg';

export default class Search extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      search: '',
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e){
    this.props.onHandleSearch(e.target.value);
  }

  render(){
    return(
      <div className='search'>
        <div className="search__wrapper">
          <input className='search__input' 
            onChange={this.handleSearch} 
            type="search" 
            placeholder='Search your pokemon ... 😏'
            value={this.props.search}
          />
          <img className='search__icon' src={SearchIcon} alt="" />
        </div>
      </div>
    )
  }
}