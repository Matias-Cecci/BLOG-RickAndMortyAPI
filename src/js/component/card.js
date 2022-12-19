import React from "react";
import "../../styles/home.css";

export const Card = (id, name, gender, status, image) => {
	return (
       <div className="card" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button className="btn btn-primary">Go some Where</button>
            </div>
        </div>
	);
};