import { Link } from "react-router-dom";

function AccountPage() {
    return (
        <>
            <nav> 
                <Link to="/">Back</Link>
                <Link to="/">Home</Link>
                <Link to="/">Logout</Link>
            </nav>

            <h2>Your Account</h2>

            <section>
                <h3>Your Monitored Accounts</h3>

                <article>
                    <p>Looks like you haven't added any accounts yet.</p>
                    <p>
                        When you add new accounts they'll show up here. 
                        Incoming messages to the accounts you link will be scanned
                        for suspicious messages which could be scams.
                    </p>
                    <p>
                        Click "Link New Account" below to link a new account and get started.
                    </p>
                </article>
                
            </section>
            
            <Link to="/linkAccount"><button>Link New Account</button></Link>
        </>
    );
}

export default AccountPage;