import React, { useState } from 'react';
import { Link } from "react-router-dom";
import AdvancedSettings from '../components/AdvancedSettings';

function LinkAccountPage() {
    const [showAdvanced, setAdvanced] = useState(false);
    const toggleAdvanced = () => setAdvanced(!showAdvanced);

    return (
        <>
            <nav> 
                <Link to="/account">Back</Link>
                <Link to="/">Home</Link>
                <Link to="/">Logout</Link>
            </nav>

            <h2>Link New Account</h2>

            <form>
                <input type="text" name="accountName" placeholder="nickname for this account" required autoFocus></input>
                <label htmlFor="accountName">Account nickname</label>

                <input type="email" name="email" pattern="[^ @]+@[^ @]+.[a-z]+" placeholder="email@domain.com" required></input>
                <label htmlFor="email">Email address to link</label>
                
                <input type="password" name="password" placeholder="password for this account" required></input>
                <label htmlFor="password">Email password</label>
                
                {showAdvanced
                    ? 
                    <>
                        <AdvancedSettings></AdvancedSettings>
                        <Link className="advanced-settings-toggle" onClick={toggleAdvanced}>Hide Advanced Settings</Link>
                    </>     
                    : <Link className="advanced-settings-toggle" onClick={toggleAdvanced}>Show Advanced Settings</Link>
                }
                
                <Link to="/account"><button className='red-button'>Cancel</button></Link>
                <Link to="/accountExample"><button>Confirm</button></Link>
            </form>
        </>
    );
}

export default LinkAccountPage;