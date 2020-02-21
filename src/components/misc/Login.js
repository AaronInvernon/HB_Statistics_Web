import React from 'react';
import HBService from '../../services/HBService';
import { Link, Redirect } from 'react-router-dom';
import  { withAuthConsumer }  from '../../contexts/AuthContext';

class Login extends React.Component {
    state ={
        data: {
            email: '',
            password: ''
        }, 
        error: false, 
        loading: false
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            data: {
                ...this.state.data, 
                [name]: value
            }
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ loading: true, error: false}, () => {
            HBService.login({ ...this.state.data })
            .then(
                (user) => {
                    this.props.setUser(user)
                },
                () => {
                    this.setState({ error: true, loading: false })
                }
            )
        })
    } 

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''
        
        if (this.props.currentUser) {
            return <Redirect to="/"/>
        }

        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input 
                            value={this.state.data.email}
                            onchange={this.handleChange}
                            autoComplete="off"
                            name="email"
                            typw="email"
                            className={`form-control ${errorClassName}`}
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input 
                            value={this.state.data.password}
                            onchange={this.handleChange}
                            autoComplete="off"
                            name="password"
                            typw="password"
                            className={`form-control ${errorClassName}`}
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mb-3"
                        disabled={this.state.loading}
                    >
                        Login
                    </button>

                    <Link to="/signup"> Register</Link>
                </form>
            </div>
        )
    }   
}

export default withAuthConsumer(Login);