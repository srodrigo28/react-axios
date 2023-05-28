import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export function MyRoute({ component: Component, isCloused, ...rest }){
    const isLoggedIn = false;

    if(isCloused && !isLoggedIn) {
        return(
            <Redirect
                to={{ pathname: '/login', state: { prevePath: rest.location.pathname } }}
            />
        );
    }

    return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
    isCloused: false,
}

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    isCloused: PropTypes.bool,
}