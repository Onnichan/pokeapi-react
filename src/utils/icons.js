import bug from '../assets/icons/pokemon/types/bug.png';
import dark from '../assets/icons/pokemon/types/dark.png';
import dragon from '../assets/icons/pokemon/types/dragon.png';
import electric from '../assets/icons/pokemon/types/electric.png';
import fairy from '../assets/icons/pokemon/types/fairy.png';
import fighting from '../assets/icons/pokemon/types/fighting.png';
import fire from '../assets/icons/pokemon/types/fire.png';
import flying from '../assets/icons/pokemon/types/flying.png';
import ghost from '../assets/icons/pokemon/types/ghost.png';
import grass from '../assets/icons/pokemon/types/grass.png';
import ground from '../assets/icons/pokemon/types/ground.png';
import ice from '../assets/icons/pokemon/types/ice.png';
import normal from '../assets/icons/pokemon/types/normal.png';
import poison from '../assets/icons/pokemon/types/poison.png';
import psychic from '../assets/icons/pokemon/types/psychic.png';
import rock from '../assets/icons/pokemon/types/rock.png';
import steel from '../assets/icons/pokemon/types/steel.png';
import water from '../assets/icons/pokemon/types/water.png';

const icons = {
   bug: bug,
   dark: dark, 
   dragon: dragon,
   electric: electric,
   fairy: fairy,
   fighting: fighting,
   fire: fire,
   flying: flying,
   ghost: ghost,
   grass: grass,
   ground: ground,
   ice: ice,
   normal: normal, 
   poison: poison,
   psychic: psychic,
   rock: rock,
   steel: steel, 
   water: water
} 

export function searchIcon(search){
   
   if(search){
      search = Object.entries(icons).filter(icon => icon[0] === search);
      return search[0][1];
   }
}
