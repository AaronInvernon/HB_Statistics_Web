/*import React from 'react'
import { Link } from 'react-router-dom';
import { withContainer } from '../hocs/withContainer'

const LoginForm = ({ form }) =>
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

export default withContainer('loginForm', LoginForm)*/