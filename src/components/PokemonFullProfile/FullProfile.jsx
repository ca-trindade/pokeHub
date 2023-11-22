import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetails } from "../../api/GetAxios";
import PokemonProfileModal from "../PokemonProfileModal/Modal";

export const PokemonFullProfile = () => {
    const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState(null);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            try {
                const data = await getPokemonDetails(id);
                setPokemonDetails(data);
            } catch (error) {
                console.error("Error fetching Pokemon details:", error);
            }
        };
        fetchPokemonDetails();
    }, [id]);

    return (
        <div>
            {pokemonDetails ? (
                <PokemonProfileModal pokemon={pokemonDetails} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};