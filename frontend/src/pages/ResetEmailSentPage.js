import { Link } from "react-router-dom";

function ForgotPasswordPage() {
    return (
        <>
            <nav> 
                <Link to="/login">Back</Link>
            </nav>

            <h2>Email Sent</h2>
            <p>Instructions for resetting your password will be emailed to you.</p>
   
            <Link to="/login"><button>Login</button></Link>
        </>
    );
}

export default ForgotPasswordPage;