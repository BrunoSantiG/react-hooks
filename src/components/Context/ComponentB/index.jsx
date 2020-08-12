import React from "react";
import { useContext } from "react";
import { UserContext, TechContext } from "../../../App";

function ComponentB() {
	const user = useContext(UserContext);
	const techs = useContext(TechContext);
	return (
		<>
			<h3>Name: {user.name}</h3>
			<h4>Age: {user.age}</h4>

			<h4>Techs: </h4>
			<ul>
				{techs.techs.map((tech) => {
					return <li key={tech.id}>{tech.name}</li>;
				})}
			</ul>
		</>
	);
}

export default ComponentB;
