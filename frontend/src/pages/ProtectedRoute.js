import { Route, Redirect, redirect, Navigate, Outlet, NavLink, useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import { useSelector } from "react-redux";

function ProtectedRoute() {

	const { userInfo } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	useEffect(() => {
		if (Object.keys(userInfo).length === 0) {
		  navigate("/signin");
		}
	  }, [userInfo]);

	if (!userInfo) {
		return (
			<div className="unauthorized">

				<h1>Unauthorized</h1>
				{/* <span>
					<NavLink to='/login'>Login</NavLink> to gain access
				</span> */}
			</div>
		)
	}
	return <Outlet />
	
}

export default ProtectedRoute


//ilk donemki
// function ProtectedRoute({ loggedIn, children }) {

// 	if (!loggedIn) {
// 		return <Navigate to="/login" replace />
// 	}

// 	return children;
// }

// export default ProtectedRoute;
