import axios from "axios";
import { AppConstans } from "../Utils/Constants";

export class AuthServices {
	static login = async (username, password) => {
		try {
			// Make a POST request to the server to get access and refresh tokens
			const response = await axios.post(
				AppConstans.AUTH_URL + "/jwt/create",
				{
					username,
					password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			// Extract access and refresh tokens from the response body
			const { access, refresh } = response.data;
			console.log(access, refresh);
			return {
				access,
				refresh,
			};
		} catch (error) {
			// Handle error and display it in a dialog
			throw error;
		}
	}

	static getUserId = async (token) => {
		try {
			// Make a GET request to the server to get the user data
			const response = await axios.get(AppConstans.AUTH_URL + "/users/me", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			// Extract user data from the response body
			const { id, username } = response.data;
			return {
				id,
				username
			};
		} catch (error) {
			// Handle error and display it in a dialog
			throw error;
		}
	}
}