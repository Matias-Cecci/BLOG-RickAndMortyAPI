import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const CardEpisode = ({episode}) => {

    const {store, actions} = useContext(Context);
    
	return (
        <div className="col">
            <div className="card" style={{width: "18rem"}}>
                <img src="https://imgs.search.brave.com/-GeT4WciwytmdhWYvj_zULm49_BK54dhML1EdwW4Lwo/rs:fit:800:800:1/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9uZW9u/LXNpZ25zLXN0eWxl/LWRlc2lnbi1jYW4t/YmUtdXNlZC1iYW5u/ZXJzLXBvc3RlcnMt/bGlnaHQtYmFubmVy/cy1ldGMtbmV3LWVw/aXNvZGUtbmVvbi1z/aWducy1zdHlsZS10/ZXh0LXZlY3Rvci0x/ODA3NjU5NTkuanBn" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{episode.name}</h5>
                    <hr />
                    <p className="card-text text-start visually-hidden">{episode.id}</p>
                    <p className="card-text text-start"><b>Air date:</b> {episode.air_date}</p>
                    <p className="card-text text-start"><b>URL:</b> {episode.url}</p>
                    <div className="d-flex justify-content-between">
                            <Link to={"/details/episode/" + episode.id}>
                                <button className="btn btn-outline-primary">
                                    Learn More!
                                </button>
                            </Link>
                            <button onClick={() => actions.setFavorites(episode.name)}
                            className="btn btn-outline-warning">
                                    <i className="fa-regular fa-heart "></i>
                            </button>
                    </div>
                </div>
            </div>
        </div>
	);
};