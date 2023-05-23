import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <>
            <nav> 
                <Link to="/">Back</Link>
            </nav>

            <h2>Login</h2>
            <form>
                <input type="email" name="email" pattern="[^ @]+@[^ @]+.[a-z]+" placeholder="email@domain.com" required autoFocus></input>
                <label htmlFor="email">Email</label>
                
                <input type="password" name="password" placeholder="your password" required></input>
                <label htmlFor="password">Password</label>
                
                <Link className="block" to="/account"><button>Login</button></Link>
                <Link to="/createAccount">Create Account</Link>
            </form>
        </>
    );
}

export default LoginPage;