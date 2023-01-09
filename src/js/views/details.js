import { object } from "prop-types";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

export const Details = () => {

	const params = useParams();
	const [itemDetails, setItemDetails] = useState({})

	useEffect(() => {
		getDetails()
	},[])

	const getDetails = async () => {
		const response = await  fetch("https://rickandmortyapi.com/api/" + params.type +"/"+ params.id);
		const data = await response.json();
		setItemDetails(data);
	}

	return (
		<div className="container">
			<h1>Details {params.type}</h1>
			<p>Name: {itemDetails.name}</p>
			{Object.keys(itemDetails).map((x,i)=> {
				if(typeof itemDetails[x] != "object") {return (<p key={i}>{x}: {itemDetails[x]}</p>);}
			})}
		</div>
	);
};

