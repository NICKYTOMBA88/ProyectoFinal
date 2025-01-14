import React from 'react';
import { Link } from 'react-router-dom'; 

export function FeaturedPokemon({ featuredPokemon }) {
  return (
    <div className="featured-section">
      <h2>Pokémon Destacados</h2>
      <div className="featured-pokemon-list">
        {featuredPokemon.map((pokemon, index) => (
          <Link key={index} to={`/item/${pokemon.name}`} className="card">
            <div className="featured-pokemon">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.name}.png`}
                alt={pokemon.name}
              />
              <p>{pokemon.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
