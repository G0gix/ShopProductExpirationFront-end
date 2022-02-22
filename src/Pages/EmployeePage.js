import React from 'react';
import { useNavigate } from 'react-router';

const EmployeePage = () => {
	const navigate = useNavigate();

	const goBack = () => navigate(-2);


	return (
		<div>
			<button style={{ marginTop: 150 }} onClick={goBack}>222</button>
		</div>
	);
};

export default EmployeePage;