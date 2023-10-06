import { Navigate, useLocation} from 'react-router-dom'
import * as Api from '../api'
import { Route } from 'react-router-dom';
import { ReactNode, useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';

interface IPrivateRouteProps {
	Component: React.ComponentType;
	path: string
}



export const PrivateRoute: React.FC<IPrivateRouteProps> = ({ Component, path }) => {
	const location = useLocation()
	let {loading,authenticated} = useAuth();

	return (
		<Route
			path={path}
			children={authenticated
			? <Component />
			: <Navigate to="/login" replace />
			}
	  	/>
	  );
}
