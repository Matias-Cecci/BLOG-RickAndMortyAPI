import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const CardEpisode = (props) => {

    const {store, actions} = useContext(Context);
    
	return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src="https://img.freepik.com/vector-gratis/tierra-lineas-red_1017-8010.jpg?w=740&t=st=1672395933~exp=1672396533~hmac=30ff67524a594d787a28559fdac30043ef4ede09e4ebee30e862ff27bbe17596" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <hr />
                    <p className="card-text text-start visually-hidden">{props.id}</p>
                    <p className="card-text text-start">Air date: {props.air_date}</p>
                    <p className="card-text text-start">URL: {props.url}</p>
                    <div className="d-flex justify-content-between">
                            <Link to={"/details/episode/" + props.id}>
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
        </div>
	);
};