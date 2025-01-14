import { Routes, Route, Link } from 'react-router-dom';
import { List } from './components/List';
import { Item } from './components/Item';
import { useState, useEffect } from 'react';
import { FeaturedPokemon } from './components/FeaturedPokemon'; 

export default function App() {
  const [offset, setOffset] = useState(0);
  const limit = 24;
  const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const [listPokemon, setListPokemon] = useState([]);
  const [pokemonSearched, setPokemonSearched] = useState(null);

  
  const [featuredPokemon, setFeaturedPokemon] = useState([
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/pikachu' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/charizard' },
    { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/bulbasaur' }
  ]);

  const changeSearch = async (result) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${result}`);
    const data = await response.json();
    setPokemonSearched(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setListPokemon(data.results);
    };
    fetchData();
  }, [offset]);

  return (
    <>
      <nav>
        <Link to="/" className='nav-item'>Pokedex</Link>
        <Link to={`/item/${pokemonSearched ? pokemonSearched.name : ''}`} className='nav-item'>Principales</Link>
      </nav>
      <Routes>
        <Route index path="/" element={<List listPokemon={listPokemon} changeSearch={changeSearch} pokemonSearched={pokemonSearched} />} />
        <Route path='/item/:name' element={<Item />} />
      </Routes>

      {/* Sección de Pokémon destacados */}
      <FeaturedPokemon featuredPokemon={featuredPokemon} /> {/* Usa el componente aquí */}

      <div className='pagination'>
        {
          Array(11).fill().map((_, index) => (
            <a key={index} className='page' onClick={() => setOffset(limit * index)}>
              {index + 1}
            </a>
          ))
        }
      </div>
    </>
  );
}
