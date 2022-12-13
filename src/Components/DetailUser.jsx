import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailUser() {
	const { id } = useParams();
	const [user, setUser] = useState({});

	useEffect(() => {
		const getUser = async () => {
			const data = await axios
				.get(`https://dummyjson.com/users/${id}`)
				.then((res) => res.data);
			setUser(data);
		};

		getUser();
	}, []);

	return (
		<div className="details">
			
				<div >
					<img src={user.image} alt={user.nom} />
					<div>
						<h1>
							{user.firstName} {user.lastName} <br /> {user.age}{" "}
							ans / {user.gender}
						</h1>
						<div>
                            <ul>
                                <li>
							Email: {user.email} 
                            </li>
                            <li>
							Phone : {user.phone}
                            </li>
                            <li>
							Poids : {user.weight} kg 
                            </li>
                            <li>
							Hauteur : {user.height} cm 
                            </li>
                            <li>
							Date de naissance : {user.birthDate}
                            </li>
                            <li>
							Group sanguine : {user.bloodGroup} 
                            </li>
                            <li>
							Couleur de l'oeil : {user.eyeColor}
                            </li> 
                            </ul>
					</div>
					</div>
				</div>
			
		</div>
	)
            }