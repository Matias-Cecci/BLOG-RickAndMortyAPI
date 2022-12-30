import React from "react";
import "../../styles/home.css";


export const CardLocation = (props) => {
	return (
       <div className="card" style={{width: "18rem"}}>
            <img src="https://img.freepik.com/vector-gratis/tierra-lineas-red_1017-8010.jpg?w=740&t=st=1672395933~exp=1672396533~hmac=30ff67524a594d787a28559fdac30043ef4ede09e4ebee30e862ff27bbe17596" className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Type: {props.type}</p>
            <p className="card-text">Dimesion: {props.dimension}</p>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between">
                <button className="btn btn-outline-primary">Learn More!</button>
                <button className="btn btn-outline-warning"><i className="fa-regular fa-heart "></i></button>
            </div>
            </div>
        </div>
	);
};