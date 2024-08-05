// import { useAuth } from "../../contexts/AuthContext.js";

import axios from "axios";
import Order from "components/Order";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "redux/slices/authSlice";
import { getOrder } from "redux/slices/orderSlice";

import { useGetUserDetailsQuery } from "services/auth/authService";


function Profile({ history }) {
	// const { user, logout } = useAuth();

	// const handleLogout = async () => {
	// 	logout(() => {
	// 		history.push("/");
	// 	});
	// };
	const { userInfo } = useSelector((state) => state.auth)
	const { orders } = useSelector((state) => state.order)

	const dispatch = useDispatch()

	const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
		// perform a refetch every 15mins
		pollingInterval: 900000,
	})

	console.log('data', data)

	useEffect(() => {
		if (data) {dispatch(setCredentials(data))
			
		}
	}, [data, dispatch]
	)


	return (
		<div className="max-w-7xl">
			<p fontSize="22">Profile</p>
			<button >asdfsadfasdfadsf</button>
			<div className="overflow-auto">
				<p>
					{/* {JSON.stringify(user)} */}
					{JSON.stringify(data)}
				</p>
			</div>
			<br />
			<br />
			
			{/* <div className='my-10 flex items-center justify-between border-2 p-3 rounded-2xl' >
				<img className='w-[150px] h-[150px] object-contain' src={cart?.image} alt='' />
				<div className='w-[400px] h-[150px]'>
					<div className='text-xl font-bold mt-3 '>{cart?.title}</div>
					<div>{cart?.description}</div>
				</div>
				<div>
					{cart?.price * cart?.quantity}TL <span className='font-bold'>({cart?.quantity})</span>
				</div>

				<div className='text-red-700 mr-7 h-12 flex items-center justify-center  text-2xl rounded-md'>
					<AiOutlineDelete size={30} onClick={() => dispatch(removeFromCart(cart?.id))} className='cursor-pointer' />
				</div>
			</div> */}

			<Order/>

			{/* <button onClick={handleLogout}>
				Logout
			</button> */}
		</div>
	);

}

export default Profile;