import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    console.log(user, 'inside require auth');
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children;
        }
    return <Navigate to='/login' 
    state={{from: location}} replace />
};

export default RequireAuth;