import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from "../lib/queries/GET_ALL_POKEMON";
import HomeComp from "../components/HomeComp";

function Home(){
    return(
        <HomeComp></HomeComp>
    );
}

export default Home;