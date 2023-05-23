import { Link } from "react-router-dom";

function HomePage() {   
    return (
        <>
            <nav> 
                <Link to="/account">Account</Link>
                <Link to="/">Logout</Link>
            </nav>

            <h2>Home</h2>

            <Link to="/createAccount"><button>Create Account</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </>
    );
}

export default HomePage;