import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store, actions} = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	},[])

	return(
		<div className="text-center mt-5">
			<h1>CHARACTERS</h1>
			<div className="row">
				{store.characters.map((item)=>{
					console.log(item)
					return <Card key={item.id}/>
				})}
			</div>
			<h1>PLANETS</h1>
			<div className="row">
				
			</div>
		</div>
		)
};
