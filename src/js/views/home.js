import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { CharacterCard } from "../component/CharacterCard";
import { VehicleCard } from "../component/VehicleCard";
import { PlanetCard } from "../component/PlanetCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container-fluid">
				<h1 style={{ color: "white" }}>Characters:</h1>
				<div style={{ display: "flex", overflow: "scroll" }}>
					{store.character.map((value, index) => {
						return <CharacterCard key={index} character={value} />;
					})}
				</div>
			</div>
			<div className="container-fluid">
				<h1 style={{ color: "white" }}>Vehicles:</h1>
				<div style={{ display: "flex", overflow: "scroll" }}>
					{store.vehicle.map((value, index) => {
						return <VehicleCard key={index} vehicle={value} />;
					})}
				</div>
			</div>
			<div className="container-fluid">
				<h1 style={{ color: "white" }}>Planets:</h1>
				<div style={{ display: "flex", overflow: "scroll" }}>
					{store.planet.map((value, index) => {
						return <PlanetCard key={index} planet={value} />;
					})}
				</div>
			</div>
		</div>
	);
};
