import { useEffect, useState } from 'react';
import { Error } from './components/Error';
import { Pokemon } from './components/Pokemon';
import { Skeleton } from './components/Skeleton';
import { searchPokemon } from './utils/searchPokemons';

function App() {
  const [name, setName] = useState<string>("")
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const fetchPokemon = async () => {
    setLoading(true)
    searchPokemon(name.toLowerCase())
      .then(pok => setPokemon(pok))
      .catch(err => {
        setError(err)
        setPokemon(null)
      })
      .finally(() => setLoading(false))
  }

  const tryAgain = () => {
    document.getElementById("name")?.focus()
    fetchPokemon()
    setName("")
  }

  useEffect(() => {
    if(name) fetchPokemon()
    else setPokemon(null)
  }, [name]);

  return (
    <div className="App relative w-full h-full">
      <div className='flex justify-center items-center flex-col'>
        <div className='m-4'>
            <label
              htmlFor="name"
              className="block text-lg text-center my-2 font-medium text-gray-900 dark:text-white"
            >
                Pokemon Name
            </label>
            <input
              type="text"
              value={name} 
              onChange={onChange} 
              id="name" 
              className="bg-gray-50 border border-gray-300 p-3 text-md text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ditto"
              required
            />
        </div>
        {!name && !loading && <h1 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Please submit a Pokemon!</h1>}
        {loading && <Skeleton />}
        {pokemon && <Pokemon pokemon={pokemon}/>}
      </div>
      {error && <Error error={error} tryAgain={tryAgain}/>}
    </div>
  )
}

export default App
