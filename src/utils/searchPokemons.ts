export const searchPokemon = async (pokemon: string) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        if(response.status === 404) {
            return Promise.reject("Not Found!")
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err)
        return {}
    }
};