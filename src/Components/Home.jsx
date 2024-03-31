import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext);
    console.log(authInfo);
    return (
        <div>
            <h3>Hello From home</h3>
        </div>
    );
};

export default Home;