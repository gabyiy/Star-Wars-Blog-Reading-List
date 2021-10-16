import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Vehicle = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="d-flex">
				<img
					src="https://dummyimage.com/800x600/cccccc/ffffff.jpg"
					className="singleImg"
					style={{ width: "600px", height: "500px", margin: "20px" }}
				/>
				<div style={{ textAlign: "center", margin: "30px" }}>
					<h1 style={{ margin: "30px" }}>{props.location.state.name}</h1>
					<h4 style={{ margin: "30px" }}>
						Sed posuere id dui at luctus. Aliquam erat volutpat. Aenean lacinia consequat faucibus. Aliquam
						sodales ac sem vitae aliquet. Cras eleifend tristique feugiat. Maecenas feugiat luctus elit, et
						volutpat nisl. Integer neque felis, fringilla non pharetra at, placerat eu velit. Nullam non
						bibendum urna..
					</h4>
				</div>
			</div>

			<hr className="line" />
			<div className="d-flex  justify-content-between">
				<div className="text">
					<h3>Name</h3> <br /> <h6>{props.location.state.name}</h6>
				</div>
				<div className="text">
					<h3>Model</h3> <br /> <h6>{props.location.state.model}</h6>
				</div>
				<div className="text">
					<h3>Crew</h3> <br /> <h6>{props.location.state.crew}</h6>
				</div>
				<div className="text">
					<h3>Length</h3> <br /> <h6>{props.location.state.length}</h6>
				</div>
				<div className="text">
					<h3>Passengers</h3> <br /> <h6>{props.location.state.passengers}</h6>
				</div>
				<div className="text">
					<h3>Cost in credits</h3> <br /> <h6>{props.location.state.cost_in_credits}</h6>
				</div>
			</div>
			<br />
		</div>
	);
};

Vehicle.propTypes = {
	location: PropTypes.json
};
