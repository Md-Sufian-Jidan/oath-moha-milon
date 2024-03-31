import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider"

const Home = () => {
    const authInfo = useContext(AuthContext);
    return (
        <div>
            <h3>This is home From :</h3>
        </div>
    );
};

export default Home;