import { Link } from "react-router-dom";

function FlaggedMessagesExamplePage() {
    return (
        <>
            <nav> 
                <Link to="/accountExample">Back</Link>
                <Link to="/">Home</Link>
                <Link to="/">Logout</Link>
            </nav>

            <h2>Flagged Message History</h2>

            <section>
                
                <article>

                    <table className="flagged-table">

                        <caption><h3>Flagged Messages</h3></caption>

                        <thead>
                            <tr>
                                <th>Sender</th>
                                <th>To</th>
                                <th>Content</th>
                                <th>Reason Flagged</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>legitmoney88@hotmail.com</td>
                                <td>Primary Email</td>
                                <td>Greetings friend click this link to earn $100000 immediately!!1!</td>
                                <td>Phishing attempt</td>
                            </tr>
                            <tr>
                                <td>sir_henry_@aol.com</td>
                                <td>Primary Email</td>
                                <td>You have won our top prize! Please reply!</td>
                                <td>Phishing attempt</td>
                            </tr>
                        </tbody>

                    </table>

                </article>
  
            </section>         
        </>
    );
}

export default FlaggedMessagesExamplePage;