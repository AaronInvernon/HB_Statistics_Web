import React from 'react';
import HBService from '../../services/HBService';
import { Link, Redirect } from 'react-router-dom';
import { withAuthConsumer } from '../../contexts/AuthContext';

class Register extends React.Component {
    state = {
        data: {
            name: '',
            email: '',
            password: ''
        },
        error: false,
        loading: false,
        success: false
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
        const { data } = this.state

        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('password', data.password)

        this.setState({ loading: true, error: false }, () => {
            HBService.register(formData)
                .then(() => {
                    this.setState({ success: true })
                })
                .catch(() => {
                    this.setState({ error: true, loading: false })
                })
        })
    }

    render() {
        const errorClassName = this.state.error ? 'is-invalid' : ''

        if (this.state.success) {
            return <Redirect to="/login" />
        }


        return (
            <div className="Register">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name: </label>
                        <input
                            value={this.state.data.name}
                            onChange={this.handleChange}
                            autoComplete="off"
                            name="name"
                            type="text"
                            className={`form-control ${errorClassName}`}
                            id="name"
                            placeholder="Enter name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>

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

                    <div className="form-group mb-5">
                        <label htmlFor="password">Password</label>

                        <input
                            value={this.state.data.password}
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            className={`form-control ${errorClassName}`}
                            id="password"
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary mb-3"
                        disabled={this.state.loading}
                    >
                        Sign up
                    </button>
                    <Link to="/login"> Log in</Link>
                </form>
            </div>
        )
    }

}

export default withAuthConsumer(Register)