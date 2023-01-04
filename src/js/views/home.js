import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardEpisode } from "../component/cardEpisode";
import { CardLocation } from "../component/cardLocation"
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters();
		actions.getLocations();
		actions.getEpisodes();
	},[])

	return(
		<div className="container text-center mt-2">
			<h2 className="my-3">CHARACTERS</h2>
			<div className="container row flex-nowrap overflow-auto">
				{store.characters.map((item)=>{
					return (<CardCharacter key={item.id} 
						id = {item.id}
						name = {item.name}
						image = {item.image}
						species = {item.species}
						gender = {item.gender}
						origin = {item.origin.name}
					/>
				)
				})}
			</div>

			<h2 className="my-3">LOCATIONS</h2>
			<div className="row flex-nowrap overflow-auto">
				{store.locations.map((item)=>{
					return (<CardLocation key={item.id} 
						name = {item.name}
						type = {item.type}
						dimension = {item.dimension}
					/>)
				})}
			</div>

			<h2 className="my-3">EPISODES</h2>
			<div className="row flex-nowrap overflow-auto">
				{store.episodes.map((item)=>{
					return (<CardEpisode key={item.id} 
						name = {item.name}
						air_date = {item.air_date}
						dimension = {item.episode}
						url = {item.url}
					/>)
				})}
			</div>
		</div>
		)
};
