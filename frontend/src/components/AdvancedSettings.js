function AdvancedSettings() {
    return (
        <>
            <h3>Advanced Settings</h3>

            <input type="text" name="emailsToIgnore" placeholder="example@domain.com" autoFocus></input>
            <label htmlFor="emailsToIgnore">Emails to not scan</label>

            <input type="text" name="domainsToIgnore" placeholder="example.com" autoFocus></input>
            <label htmlFor="domainsToIgnore">Domains to not scan</label>
        </>
    );
}

export default AdvancedSettings;