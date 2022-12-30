import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardLocation } from "../component/cardLocation"
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getLocations();
	},[])

	return(
		<div className="container text-center mt-5">
			<h1>CHARACTERS</h1>
			<div className="row flex-nowrap overflow-auto">
				{store.characters.map((item)=>{
					console.log(item)
					return (<CardCharacter key={item.id} 
						name = {item.name}
						image = {item.image}
						species = {item.species}
						gender = {item.gender}
						origin = {item.origin.name}
					/>)
				})}
			</div>
			<h1>LOCATIONS</h1>
			<div className="row flex-nowrap overflow-auto">
				{store.locations.map((item)=>{
					console.log(item)
					return (<CardLocation key={item.id} 
						name = {item.name}
						type = {item.type}
						dimension = {item.dimension}
					/>)
				})}
			</div>
		</div>
		)
};
