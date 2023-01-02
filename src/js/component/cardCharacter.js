import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CardCharacter = (props) => {

	const {store, actions} = useContext(Context);

	return (
       <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text text-start">{props.status}</p>
                <p className="card-text text-start">Specie: {props.species}</p>
                <p className="card-text text-start">Gender: {props.gender}</p>
                <p className="card-text text-start">Origin: {props.origin}</p>
                <p className="card-text text-start">{props.description}</p>
                <div className="d-flex justify-content-between">
                    <Link to="/details/:theid">
                        <button className="btn btn-outline-primary">
                            Learn More!
                        </button>
                    </Link>
                    <button onClick={() => actions.setFavorites(props.name)}
                    className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart "></i>
                    </button>
                </div>
            </div>
        </div>
	);
};