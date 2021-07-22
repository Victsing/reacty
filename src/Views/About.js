import React, {useState} from 'react'
import axios from "axios";

const About = () => {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemonType] = useState("");

    const getPokemon = async () => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const res = await axios.get(url)
            toArray.push(res.data)
            setPokemonType(res.data.types[0].type.name)
            setPokemonData(toArray)
            console.log(res)
        } catch (e) {
            console.log(e)
        }
    }

    const handleChange = (e) => {
        setPokemon(e.target.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getPokemon();
    }


    return (
        <div className={About}>
            <h1 className="container mx-auto">Pokemon Api</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className="container mx-auto" type="text" onChange={handleChange} placeholder="Entrez le nom du pokemon"/>
                </label>
            </form>
            {pokemonData.map((data) => {
                return (
                    <div className="container">
                        <div className="w-1/4 mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                            <div className="divTableBody">
                                <div className="divTableRow">
                                    <img src={data.sprites["front_default"]}/>
                                    <div className="card">Type</div>
                                    <div className="text-xl text-gray-900 leading-tight">{pokemonType}</div>
                                </div>
                                <div className="divTableRow">
                                    <div className="text-xl text-gray-900 leading-tight">Height</div>
                                    <div
                                        className="text-xl text-gray-900 leading-tight">{" "}{Math.round(data.height * 3.9)} "
                                    </div>
                                </div>
                                <div className="divTableRow">
                                    <div className="text-xl text-gray-900 leading-tight">Weight</div>
                                    <div
                                        className="text-xl text-gray-900 leading-tight">{" "} {Math.round(data.weight / 4.3)} lbs
                                    </div>
                                </div>
                                <div className="divTableRow">
                                    <div className="text-xl text-gray-900 leading-tight">Number of battle</div>
                                    <div
                                        className="text-xl text-gray-900 leading-tight">{data.game_indices.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            })}
        </div>
    )

}
export default About
