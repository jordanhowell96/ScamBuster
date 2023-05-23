import { Link } from "react-router-dom";

function CreateAccountPage() {
    return (
        <>
            <nav> 
                <Link to="/">Back</Link>
            </nav>
            
            <h2>Create Account</h2>

            <form>
                <input type="email" name="email" pattern="[^ @]+@[^ @]+.[a-z]+" placeholder="email@domain.com" required autoFocus></input>
                <label htmlFor="email">Email</label>
                
                <input type="password" name="password" placeholder="your password" required></input>
                <label htmlFor="password">Create password</label>

                <input type="password" name="confirmPassword" placeholder="your password" required></input>
                <label htmlFor="confirmPassword">Confirm password</label>
                
                <Link className="block" to="/account"><button>Create Account</button></Link>
                <Link to="/login">Already have an account?</Link>
            </form>

        </>
    );
}

export default CreateAccountPage;

