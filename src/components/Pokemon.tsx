import { FunctionComponent } from "react";

const keys = ["id", "items", "specie", "moves", "base experience", "abilities", "height", "weight"]

export const Pokemon: FunctionComponent<{pokemon: any}>  = ({pokemon})=> {
  const { id, moves, name, height, weight, order } = pokemon;
  const items = pokemon?.held_items?.map((element: any) => element.item.name).join(", ")
  const specie = pokemon?.species?.name;
  const baseExperience = pokemon?.base_experience
  const abilities = pokemon?.abilities?.map((a: any) => a?.ability?.name).join(", ")

  const values = [id, items, specie, moves?.length, baseExperience, abilities, height, weight]

  return (
  <a className="drop-shadow-xl grid grid-cols-3 items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-600 backdrop-blur-sm cursor-pointer">
    <h1 className="col-span-3 m-4 text-2xl font-bold text-white ">Pokemon Info</h1>
    <h1 className="col-span-3 text-3xl block px-4 font-semibold uppercase bg-gray-500 m-3 rounded-md text-gray-300 py-2">{order}-{name}</h1>
    <img
      className="m-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 col-span-1 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
      src={pokemon.sprites.front_default} 
      alt={specie}
      style={{
        backdropFilter: "blur(10px)"
      }}
    />
    <div className="col-span-2 flex flex-col justify-between p-4 leading-normal">
      <section className="grid grid-cols-5">
        <article className="col-span-2">
          {keys.map((key, index) => (
            <p key={index} className="text-center mb-2 font-bold text-gray-700 dark:text-gray-400 capitalize">{key}</p>
          ))}
        </article>
        <article className="col-span-3">
          {values?.map((value, index) => (
            <span key={index} className="mb-2 pl-2 font-semibold rounded-md bg-gray-500 block text-black px-1">
              {value}
            </span>
          ))}
        </article>
      </section>
    </div>
  </a>
)
}
