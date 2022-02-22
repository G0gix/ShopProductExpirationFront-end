import React from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router';
import { useAuth } from '../components/hooks/useAuth';

const EmployeePage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { signout } = useAuth();


	return (
		<div>
			<button style={{ marginTop: 150 }} onClick={() => signout(() => navigate("/", { replace: true }))}>222</button>
		</div>
	);
};

export default EmployeePage;