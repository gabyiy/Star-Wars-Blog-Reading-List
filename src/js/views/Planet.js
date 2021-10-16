import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Planet = props => {
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
					<h3>Climate</h3> <br /> <h6>{props.location.state.climate}</h6>
				</div>
				<div className="text">
					<h3>Population</h3> <br /> <h6>{props.location.state.population}</h6>
				</div>
				<div className="text">
					<h3>Terrain</h3> <br /> <h6>{props.location.state.terrain}</h6>
				</div>
				<div className="text">
					<h3>Diameter</h3> <br /> <h6>{props.location.state.diameter}</h6>
				</div>
				<div className="text">
					<h3>Surface Water</h3> <br /> <h6>{props.location.state.surface_water}</h6>
				</div>
			</div>
			<br />
		</div>
	);
};

Planet.propTypes = {
	location: PropTypes.json
};
