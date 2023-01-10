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
		<div className="container d-flex justify-content-center">
			<div className="card mb-3" style={{maxWidth: "540px"}}>
				<div className="row g-0">
					{itemDetails.image ? <div className="col-md-4">
						<img src={itemDetails.image} className="img-fluid rounded-start" alt="..."/>
					</div>  : null}
					
					<div className="col-md-8">
						<div className="card-body">
							<h2><b>{params.type.toUpperCase()}</b></h2>
							<h4 className="card-title"><b>Name: </b>{itemDetails.name}</h4>
							<div className="card-text">	
								{Object.keys(itemDetails).map((x,i)=> {
									if(typeof itemDetails[x] != "object") {
										if(itemDetails[x] !== itemDetails.id & itemDetails[x] !== itemDetails.name){
										return (<p key={i}><b>{x}:</b> {itemDetails[x]}</p>)
									}		
								}	
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

