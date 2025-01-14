import { Link } from 'react-router-dom';

export function Card({ item }) {
  const id = item.url ? item.url.split('/')[6] : item.id; 
  const IMG_URL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/item/${item.name}`} className="card">
      <img src={IMG_URL} alt={`imagen de ${item.name}`} />
      <p>{item.name}</p>
    </Link>
  );
}
