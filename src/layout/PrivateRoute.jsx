import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({children}) => {

    const {user, loading} = children;

    if(loading){
        return <span className="loading loading-ring loading-xs"></span>
    }
    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;


PrivateRoute.propTypes = {
    children: PropTypes.node
}