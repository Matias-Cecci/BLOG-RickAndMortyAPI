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
				{store.characters.map((character)=>{
					return (<CardCharacter key={character.id} 
						id = {character.id}
						name = {character.name}
						image = {character.image}
						species = {character.species}
						gender = {character.gender}
						status = {character.status}
					/>
				)
				})}
			</div>

			<h2 className="my-3">LOCATIONS</h2>
			<div className="row flex-nowrap overflow-auto">
				{store.locations.map((location)=>{
					return (<CardLocation key={location.id} 
						id = {location.id}
						name = {location.name}
						type = {location.type}
						dimension = {location.dimension}
					/>)
				})}
			</div>

			<h2 className="my-3">EPISODES</h2>
			<div className="row flex-nowrap overflow-auto">
				{store.episodes.map((episode)=>{
					return (<CardEpisode key={episode.id} 
						id = {episode.id}
						name = {episode.name}
						air_date = {episode.air_date}
						dimension = {episode.episode}
						url = {episode.url}
					/>)
				})}
			</div>
		</div>
		)
};
