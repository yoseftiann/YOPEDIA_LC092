import React, { useState } from "react";
import PokemonTitle from "../components/PokemonTitle";
import NavBar from "../components/NavBar";
import FavoriteList from "../components/FavoriteList";
import { Slide } from "react-awesome-reveal";
import Footer from "../components/Footer";

function Favorite(){

    return(
        <div className="flex flex-col">
            <NavBar/>
            <Slide>
            <div className='w-100 h-20'></div>
            <div className="ml-6">
                <PokemonTitle name="YOUR FAVORITE"></PokemonTitle>
                <FavoriteList></FavoriteList>
            </div>
            <Footer/>
            </Slide>
        </div>
    );
}

export default Favorite;