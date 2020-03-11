import React from 'react';
import FormInput from '../../components/form-input/form-input.component';

import './style.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2>Sign In</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" 
                    value={this.state.email} 
                    required 
                    handleChange={this.handleChange}
                    label="Email" />
                    <FormInput type="password" name="password" 
                    value={this.state.password} 
                    required 
                    handleChange={this.handleChange}
                    label="Password" />
                    <input type="submit" value="Submit Form" />
                </form>
            </div>
        )
    }
}

export default SignIn;