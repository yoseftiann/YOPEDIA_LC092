import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from "../lib/queries/GET_ALL_POKEMON";
import NavBar from "../components/NavBar";
import { Fade, Slide } from "react-awesome-reveal"
import Loading from "../utils/Loading";
import HomeButton from "../utils/HomeButton";

function HomeComp(){
    const {loading, error, data} = useQuery(GET_ALL_POKEMON);
    if(loading)return <Loading></Loading>
    else if(error)return <h1>error...</h1>
    console.log(data);

    return(
        <Fade cascade>
        <div className="bg-black w-[100vw] h-[100vh]">
            <NavBar className='fixed'></NavBar>
            <Fade duration={5000} cascade>
            <div className="bg-first-image w-screen h-screen p-0 m-0 bg-cover bg-top flex items-center sm:justify-center bg-position-sm:right">
            <div className="sm:pl-10 text-mid text-white pl-40">
                <Slide triggerOnce duration={1000} cascade>
                <h1 className="font-extrabold uppercase text-6xl">YOPEDIA</h1>
                <p className="font-medium text-xl tracking-widest text-center">Made by LC092</p>
                <div className="flex justify-center w-full p-2">
                    <HomeButton className=''/>
                </div>
                </Slide>
            </div>
            </div>
            </Fade>
        </div>
        </Fade>
    );
}

export default HomeComp;