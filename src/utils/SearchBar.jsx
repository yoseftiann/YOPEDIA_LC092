import { useQuery } from "@apollo/client";
import "./SearchBar.css";
import React, { useState } from "react";
import { GET_UNLIMITED_POKEMON } from "../lib/queries/GET_UNLIMITED_POKEMON";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useRef } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { loading, error, data } = useQuery(GET_UNLIMITED_POKEMON);
  const blurTimeoutRef = useRef();

  if (loading) return <Loading />;
  else if (error) return <h1>Error...</h1>;

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setQuery("");
    }, 100);
  };

  const handleFocus = () => {
    clearTimeout(blurTimeoutRef.current);
  };

  console.log(query)

  return (
    <div class="search" className="mr-4 relative">
      <input
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        onBlur={handleBlur}
        onFocus={handleFocus}
        value={query}
        type="text"
        class="search__input"
        placeholder="Search a pokemon..."
      ></input>
      {query && (
        <ul className="absolute p-0 m-0 space-y-1 overflow-x-hidden w-48 h-20 flex flex-col rounded-full">
          <style>{`
            ::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {data.pokemons.results
            .filter((pokemon) =>
              pokemon.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((pokemon) => (
              <Link
                key={pokemon.name}
                to={`/Detail/${pokemon.id}`}
                className="capitalize tracking-widest flex justify-center text-center w-full"
              >
                {pokemon.name}
              </Link>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
