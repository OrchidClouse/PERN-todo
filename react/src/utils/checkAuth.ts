import axios from '../axiosConfig'
import * as Api from '../api'
import { useNavigate } from 'react-router-dom'

export const checkAuth = async () => {
	const navigate = useNavigate()
	try {
		const token = localStorage.getItem('_token');
		if (!token) {
		  throw new Error('No token found');
		}
	
		axios.defaults.headers.Authorization = 'Bearer ' + token;
	
		await Api.auth.getMe()
	
		return {
			props: {},
		}
	}catch (err) {
		navigate('/login')
	}
}