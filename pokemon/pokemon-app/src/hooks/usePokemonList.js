import { useState, useEffect } from 'react';

export const usePokemonList = () => {
  const [list, setList] = useState([]);
  //   const [isLoading, setIsLoading] = useState(true);

  const fetchInitialList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((response) => setList(response));
  };

  useEffect(fetchInitialList, []);

  return (
    <div>
      <p>Data Fetched</p>
      console.log({list})
    </div>
  );
};
