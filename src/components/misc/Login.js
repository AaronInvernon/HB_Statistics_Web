import React from 'react';
import HBService from '../../services/HBService';
import { Link, Redirect } from 'react-router-dom';
import { withAuthConsumer } from '../../contexts/AuthContext';
import { player } from '../../assets'

class Login extends React.Component {
    state = {
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
        this.setState({ loading: true, error: false }, () => {
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
            return <Redirect to="/" />
        }

        return (
            <div className="Login container  m-5">
                <div className="container text-center w-50 center">
                    <img className=" w-50" src={player} alt="logo" />
                    <h1>Handball Statistics</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                            value={this.state.data.email}
                            onChange={this.handleChange}
                            autoComplete="off"
                            name="email"
                            type="email"
                            className={`form-control ${errorClassName}`}
                            id="email"
                            placeholder="Enter email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input
                            value={this.state.data.password}
                            onChange={this.handleChange}
                            autoComplete="off"
                            name="password"
                            type="password"
                            className={`form-control ${errorClassName}`}
                            id="password"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mr-3"
                        disabled={this.state.loading}
                    >
                        Login
                    </button>

                    <Link to="/signup" className="btn btn-info"> Sign Up</Link>
                </form>
            </div>
        )
    }
}

export default withAuthConsumer(Login);