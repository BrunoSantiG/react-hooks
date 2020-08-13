import React, { useState, useCallback } from "react";
import Title from "./components/Title";
import Count from "./components/Count";
import Button from "./components/Button";

// import { Container } from './styles';

function Callback() {
	const [age, setAge] = useState(22);
	const [salary, setSalary] = useState(1000);

	const incrementAge = useCallback(() => {
		setAge(age + 1);
	}, [age]);

	const incrementSalary = useCallback(() => {
		setSalary(salary + 100);
	}, [salary]);

	return (
		<div>
			<Title />
			<Count text="Age" count={age} />
			<Button handleClick={incrementAge}>Increment age</Button>
			<Count text="Salary" count={salary} />
			<Button handleClick={incrementSalary}>Increment salary</Button>
		</div>
	);
}

export default Callback;
