import { Link } from "react-router-dom";
import { MdEdit } from 'react-icons/md';

function AccountExamplePage() {
    return (
        <>
            <nav> 
                <Link to="/">Back</Link>
                <Link to="/">Home</Link>
                <Link to="/">Logout</Link>
            </nav>

            <h2>Your Account</h2>

            <section>
                
                <article>

                    <table className="account-table">

                        <caption><h3>Your Monitored Accounts</h3></caption>

                        <thead>
                            <tr>
                                <th>Account Name</th>
                                <th>Account Type</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Primary Email</td>
                                <td>Email</td>
                                <td><Link to="/editAccountExample"><MdEdit/></Link></td>
                            </tr>
                        </tbody>
                    </table>

                </article>
  
            </section>
            
            <Link to="/linkAccount"><button>Link New Account</button></Link>
            <Link to="/flaggedMessagesExample"><button>Flagged Messages</button></Link>
        </>
    );
}

export default AccountExamplePage;