import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/PostsSlice";
import React, { useEffect } from "react";

export default function ListPost() {
	const listPosts = useSelector((state) => state.posts);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, []);

	return (
		<div>
			<h1>Liste des Posts:</h1>
			<div className="ListPosts">
				{listPosts.loading ? (
					<div>
						<h1>Encours...</h1>
					</div>
				) : listPosts.error ? (
					<div>
						<h2>{listPosts.error}</h2>
					</div>
				) : (
					listPosts.map((item) => (
						<div key={item.id}>
							<h2>{item.title}</h2>
							<p>{item.body}</p>
						</div>
					))
				)}
			</div>
			</div>
	);
}