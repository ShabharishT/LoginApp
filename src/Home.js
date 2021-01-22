import React, {Component} from 'react';

/*
 * Home component welcoming user and
 * providing a logout action
 */
export default class Home extends Component{

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.history.push('/login');
    }

    render() {
        const {userName} = this.props.location.state;
        return (
            <div>
                Welcome {userName}!<br/><br/>
                <input type="button" onClick={this.handleLogout} value="Logout"/>
            </div>
        );
    }
}