import React from "react";
import { Link } from "react-router-dom";

export default function User(props) {
	return (
		<div className="user">
			<img src={props.image} alt={props.nom} />
			<h2>
				{props.nom} {props.prenom}
			</h2>
			<Link to={`detailUser/${props.id}`}>
				<button>Detail User</button>
			</Link>
			<Link to={`listPosts/${props.id}`}>
				<button>Liste des posts</button>
			</Link>
		</div>
	);
}