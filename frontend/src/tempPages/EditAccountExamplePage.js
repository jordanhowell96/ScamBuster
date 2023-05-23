import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { Link } from "react-router-dom";
import AdvancedSettings from '../components/AdvancedSettings';

function EditAccountExamplePage() {
    const redirect = useNavigate();

    const [showAdvanced, setAdvanced] = useState(false);
    const toggleAdvanced = () => setAdvanced(!showAdvanced);

    const removeAccount = () => {
        if (window.confirm('Warning: Deleting a Linked Account cannot be undone!')) {
            redirect("/account")
        }
    };

    return (
        <>
            <nav> 
                <Link to="/accountExample">Back</Link>
                <Link to="/">Home</Link>
                <Link to="/">Logout</Link>
            </nav>

            <h2>Edit Account</h2>

            <button onClick={removeAccount} className='remove-account-button red-button'>Remove Account</button>
            
            <form>
                <input type="text" name="accountName" value="Primary Email" required></input>
                <label htmlFor="accountName">Account nickname</label>

                {showAdvanced
                    ? 
                    <>
                        <AdvancedSettings></AdvancedSettings>
                        <Link className="advanced-settings-toggle" onClick={toggleAdvanced}>Hide Advanced Settings</Link>
                    </>     
                    : <Link className="advanced-settings-toggle" onClick={toggleAdvanced}>Show Advanced Settings</Link>
                }
                
                <Link to="/accountExample"><button className='red-button'>Cancel</button></Link>
                <Link to="/accountExample"><button>Confirm</button></Link>
            </form>
        </>
    );
}

export default EditAccountExamplePage;