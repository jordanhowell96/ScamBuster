import { Link } from "react-router-dom";

function ForgotPasswordPage() {
    return (
        <>
            <nav> 
                <Link to="/login">Back</Link>
            </nav>

            <h2>Password Reset</h2>
            <p>Enter your account email below and instructions on how to reset your password will be sent to you.</p>

            <form>
                <input type="email" name="email" pattern="[^ @]+@[^ @]+.[a-z]+" placeholder="email@domain.com" required autoFocus></input>
                <label htmlFor="email">Email</label>
                
                <Link to="/resetEmailSent"><button>Reset</button></Link>
            </form>
        </>
    );
}

export default ForgotPasswordPage;