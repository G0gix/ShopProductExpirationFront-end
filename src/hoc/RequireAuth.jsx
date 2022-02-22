import React from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router';
import { useAuth } from '../components/hooks/useAuth';

const RequireAuth = ({ children }) => {
	const location = useLocation();
	const navigate = useNavigate();
	debugger;
	const auth = useAuth();

	if (auth.user == null) {
		return <Navigate to="/login" state={{ from: location }} />
	}

	return children;
};

export default RequireAuth;