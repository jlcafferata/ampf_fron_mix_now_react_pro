import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { store } from '../_helpers';


class HomePage extends React.Component {

    componentWillMount() {
        this.setState({user: store.getState().authentication.user});
    }
    
    render() {
        const { user, errors } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Bienvenido</h1>
                <h3>{user.email}</h3>
                {errors && errors.error && <span className="text-danger">ERROR: {errors.error}</span>}
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user, errors } = state;
    return {
        user, 
        errors
    };
}


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };