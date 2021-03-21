import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="col">
			<div className="card" style={{ width: "18rem" }}>
				<img
					className="card-img-top"
					src="data:image/jpeg;base64,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"
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.gender}</p>
					<p className="card-text">{props.hair_color}</p>
					<p className="card-text">{props.eye_color}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	img: PropTypes.string
};
