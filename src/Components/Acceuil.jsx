import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailUser from "./DetailUser";
import ListPosts from "./ListPosts";
import ListUser from "./ListUser";

export default function Acceuil() {
	return (
		<div>
			<nav>
				<h1>POSTS</h1>
			</nav>
			<Routes>
				<Route path="/" element={<ListUser />} />
				<Route path="/detailutilisateur/:id" element={<DetailUser />} />
				<Route path="/listedesPostes/:id" element={<ListPosts />} />
			</Routes>
		</div>
	);
}