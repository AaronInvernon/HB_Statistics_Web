import axios from 'axios';

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL, 
    withCredentials: true
})

http.interceptors.response.use(
    response => response.data, 
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.clear()
            window.location.assign('/login')
        }

        return Promise.reject(error)
    }
)

const login = ({email, password}) => http.post('/login', {email, password})

const logout = () => http.post('/logout')

const register = (data) => http.post('/signup', data)

const getMatches = () => http.get('/matches')

const getTeams = () => http.get('/teams')

const createTeam = (data) => http.post('/team/new', data)

const newMatch = () => http.get('/match/new')


export default {
    login, 
    logout,
    register, 
    getMatches, 
    createTeam, 
    getTeams, 
    newMatch
}