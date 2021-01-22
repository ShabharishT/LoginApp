import React, {Component} from 'react';
import FormErrors from './FormErrors';

/*
 * Login component to validate user inputs,
 * authenticate and route to Home page.
 */
export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password : '',
            validUserName: false,
            validPassword: false,
            formValid: false,
            formErrors: {username: '', password: ''}
        };
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUserInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, () => {this.validateField(name, value)});
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let validUserName = this.state.validUserName;
        let validPassword = this.state.validPassword;

        switch(fieldName) {
            case 'username':
                // Using a valid regex pattern for email pattern
                validUserName = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.username = validUserName ? '' : ' is invalid';
                break;

            case 'password':
                validPassword = value.length >= 6;
                fieldValidationErrors.password = validPassword ? '': ' is too short';
                break;

            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            validUserName: validUserName,
            validPassword: validPassword
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.validUserName && this.state.validPassword});
    }


    handleLogin() {
        this.props.history.push({
            pathname: '/home',
            state: {userName: this.state.username}
        });
    };

    render() {
        const {formErrors, formValid} = this.state;
        return (
            <form className="demoForm">

                <h4>Enter your credentials</h4>

                <div className="panel panel-default">
                    <FormErrors formErrors={formErrors} />
                </div>

                <div className="form-group">
                    <div><label htmlFor="email">Username</label></div>
                    <input type="email" className="form-control" name="username"
                           onChange={(event) => this.handleUserInput(event)}/>
                </div>

                <br/>

                <div className="form-group">
                    <div><label htmlFor="password">Password</label></div>
                    <input type="password" className="form-control" name="password"
                           onChange={(event) => this.handleUserInput(event)}/>
                </div>

                <br/>

                <button type="submit" className="btn btn-primary" disabled={!formValid}
                        onClick={this.handleLogin}>Login</button>

            </form>
        );
    }
}