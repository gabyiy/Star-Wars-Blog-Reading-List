import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const VehicleCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			<div className="card" style={{ width: "18rem" }}>
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjruchrAW5Yq_pxmT59dphzu3F8WeGGk8LpA&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title"> {props.vehicle.name}</h5>
					<p className="card-text"> Class: {props.vehicle.vehicle_class}</p>
					<p className="card-text"> Cost in credits: {props.vehicle.cost_in_credits}</p>
					<p className="card-text"> Passengers: {props.vehicle.passengers}</p>
					<Link to={{ pathname: `/Vehicle/${props.vehicle.name}`, state: props.vehicle }}>
						<button className="btn btn-primary">See more</button>
					</Link>
					{store.favorites.length > 0 && store.favorites.includes(props.vehicle) ? (
						<button style={{ float: "right" }}>
							<a href="#" className="btn btn-warning" style={{ width: "50px" }}>
								<i className="far fa-heart" />
							</a>
						</button>
					) : (
						<button
							onClick={() => {
								actions.addFavorite(props.vehicle);
							}}
							style={{ float: "right" }}>
							<a href="#" className="btn btn-primary" style={{ width: "50px" }}>
								<i className="far fa-heart" />
							</a>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

VehicleCard.propTypes = {
	vehicle: PropTypes.json
};
