import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CardCharacter } from "../component/cardCharacter";

export const Details = () => {
	const { store, actions } = useContext(Context);
	//const params = useParams();
	//console.log(params)

	let {id} = useParams();
	return (
		<div className="">
			HOLAAAAAAAAAAA
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};