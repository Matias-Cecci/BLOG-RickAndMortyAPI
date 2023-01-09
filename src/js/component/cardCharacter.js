import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const CardCharacter = ({character}) => {

	const {store, actions} = useContext(Context);

	return (
            <div className="col">
                <div className="card" style={{width: "18rem"}}>
                        <img src={character.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <hr />
                            <p className="card-text text-start"><b>Status:</b> {character.status}</p>
                            <p className="card-text text-start visually-hidden">{character.id}</p>
                            <p className="card-text text-start"><b>Specie:</b> {character.species}</p>
                            <p className="card-text text-start"><b>Gender: </b>{character.gender}</p>
                            <p className="card-text text-start">{character.description}</p>
                            <div className="d-flex justify-content-between">
                                <Link to={"/details/character/" + character.id}>
                                    <button className="btn btn-outline-primary">
                                        Learn More!
                                    </button>
                                </Link>
                                <button onClick={() => actions.setFavorites(character.name)}
                                className="btn btn-outline-warning">
                                        <i className="fa-regular fa-heart "></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
	);
};