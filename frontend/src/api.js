import axios from "axios";

// axios.interceptors.request.use(
// 	function (config) {
// 		const { origin } = new URL(config.url);

// 		const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT];
// 		const token = localStorage.getItem("access-token");

// 		if (allowedOrigins.includes(origin)) {
// 			config.headers.authorization = token;
// 		}

// 		return config;
// 	},
// 	function (error) {
// 		// Do something with request error
// 		return Promise.reject(error);
// 	}
// );

axios.defaults.baseURL = process.env.REACT_APP_BASE_ENDPOINT;

  axios.interceptors.response.use(
    function (response) {

        // return success
        if (response.status === 200 || response.status === 201) {
          return response;
        }
        // reject errors & warnings
      // default fallback
      return Promise.reject(response);
    },
    function (error) {
      // if the server throws an error (404, 500 etc.)
      return Promise.reject(error);
    }
  );

export const fetchLogin = async (input) => {
	console.log("inputum",input,process.env.REACT_APP_BASE_ENDPOINT);
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,input)
	console.log("sasasasas",input);
		return data;
};

export const fetchSiparis = async (input) => {
	console.log("inputum",input,process.env.REACT_APP_BASE_ENDPOINT);
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`,input)
	console.log("sasasasas",input);
		return data;
};

export const fetchRegister = async (input) => {
	console.log('input olmasi gereken yer', input)
	// let fetch = axios.get(
	// 	`${process.env.REACT_APP_BASE_ENDPOINT}/users`
	// );
	// console.log(fetch);
	//---------------------
	const { data } = await axios.post(
		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
		input
	);
	console.log('databudur',data)

	return data;
};

export const fetchUsers = async () => {
	const { data } = await axios.get(
		`${process.env.REACT_APP_BASE_ENDPOINT}/users`
	);
		console.log(data)
	return data;
};

// export const fetchMe = async () => {
// 	const { data } = await axios.get(
// 		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`
// 	);
// 	return data;
// };

// export const fetchLogout = async () => {
// 	const { data } = await axios.post(
// 		`${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
// 		{
// 			refresh_token: localStorage.getItem("refresh-token"),
// 		}
// 	);

// 	return data;
// };

