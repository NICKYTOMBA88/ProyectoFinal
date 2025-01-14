import { useState } from 'react';
import { Card } from './Card';

export function List({ listPokemon, changeSearch, pokemonSearched }) {
  const [prevSearch, setPrevSearch] = useState('');

  const sendForm = () => {
    changeSearch(prevSearch);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendForm(); 
    }
  };

  return (
    <>
      <div className="container-search">
        <input
          className="search"
          type="text"
          placeholder="Buscar por nombre o ID"
          value={prevSearch}
          onChange={(e) => setPrevSearch(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
        <button className="search-button" onClick={sendForm}>Buscar</button>
      </div>

      <div className="list container">
        {pokemonSearched ? (
          
          <Card item={pokemonSearched} />
        ) : (
          
          listPokemon.map((item, index) => (
            <Card key={index} item={item} />
          ))
        )}
      </div>
    </>
  );
}
