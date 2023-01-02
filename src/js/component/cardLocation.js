import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const CardLocation = (props) => {

    const {store, actions} = useContext(Context);
    
	return (
       <div className="card" style={{width: "18rem"}}>
            <img src="https://img.freepik.com/vector-gratis/tierra-lineas-red_1017-8010.jpg?w=740&t=st=1672395933~exp=1672396533~hmac=30ff67524a594d787a28559fdac30043ef4ede09e4ebee30e862ff27bbe17596" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Type: {props.type}</p>
            <p className="card-text">Dimension: {props.dimension}</p>
            <p className="card-text">{props.description}</p>
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