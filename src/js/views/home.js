import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { CardCharacter } from "../component/cardCharacter";
import { CardEpisode } from "../component/cardEpisode";
import { CardLocation } from "../component/cardLocation"
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {

	},[])

	return(
		<div className="container text-center mt-3">
			<h2 className="my-3 fs-1">CHARACTERS</h2>
			<div className="container">
				<div className="container row flex-nowrap overflow-auto">
					{store.characters.results ? store.characters.results.map((character)=>{
						return (<CardCharacter key={character.id} character={character}/>
					)
					}) : "Loading..."}
					
				</div>
				<div className="my-4">
					<button type="button" className="btn btn-outline-dark" onClick={() => actions.getCharacters(store.characters.info.prev)}><i className="fa-solid fa-angles-left"></i></button>
					<button type="button" className="btn btn-outline-dark" onClick={() => actions.getCharacters(store.characters.info.next)}> <i className="fa-solid fa-angles-right"></i> </button>
				</div>
				<hr />
			</div>


			<h2 className="my-3 fs-1">LOCATIONS</h2>
			<div className="container">
				<div className="container row flex-nowrap overflow-auto">
					{store.locations.results ? store.locations.results.map((location)=>{
						return (<CardLocation key={location.id} location={location}	/>)
					}) : "Loading..."}
				</div>
				<div className="my-4">
						<button type="button" className="btn btn-outline-dark" onClick={() => actions.getLocations(store.locations.info.prev)}><i className="fa-solid fa-angles-left"></i></button>
						<button type="button" className="btn btn-outline-dark" onClick={() => actions.getLocations(store.locations.info.next)}> <i className="fa-solid fa-angles-right"></i> </button>
				</div>
				<hr />
			</div>

			<h2 className="my-3 fs-1">EPISODES</h2>
			<div className="container">
				<div className="container row flex-nowrap overflow-auto">
					{store.episodes.results ? store.episodes.results.map((episode)=>{
						return (<CardEpisode key={episode.id} episode={episode}	/>)
					}) : "Loading..."}
				</div>
					<div className="my-4 ">
						<button type="button" className="btn btn-outline-dark" onClick={() => actions.getEpisodes(store.episodes.info.prev)}><i className="fa-solid fa-angles-left"></i></button>
						<button type="button" className="btn btn-outline-dark" onClick={() => actions.getEpisodes(store.episodes.info.next)}> <i className="fa-solid fa-angles-right"></i> </button>
					</div>
				<hr />
				</div>
		</div>
		)
};
