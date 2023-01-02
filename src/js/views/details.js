import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	//Acá debería poner un condicional que dependiendo de que boton toque (Character or Location) me muestre una u otra cosa
	return (
		<div className="">
			HOLAAAAAAAAAAA
		</div>
	);
};

Details.propTypes = {
	match: PropTypes.object
};
