import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Card } from "./card";
import "../../styles/people.scss";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
	return (
		<div className="container-fluid characters mt-5">
			<h1>Planets</h1>
			<div className="row">
				{store.planets !== undefined
					? store.planets.map((item, index) => {
							return (
								<div key={index}>
									<Card
										image={item.img}
										name={item.name}
										population={item.population}
										terrain={item.terrain}
									/>
								</div>
							);
					  })
					: "loading..."}
			</div>
		</div>
	);
};
