import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js'
import LoginPage from './pages/LoginPage.js'
import CreateAccountPage from './pages/CreateAccountPage.js'
import AccountPage from './pages/AccountPage.js'
import LinkAccountPage from './pages/LinkAccountPage.js'
// example pages
import AccountExamplePage from './tempPages/AccountExamplePage.js'
import EditAccountExamplePage from './tempPages/EditAccountExamplePage.js'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <h1>ScamBuster</h1>
                </header>

                <main>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/login" element={<LoginPage/>} />
                        <Route path="/createAccount" element={<CreateAccountPage/>} />
                        <Route path="/account" element={<AccountPage/>} />
                        <Route path="/linkAccount" element={<LinkAccountPage/>} />
                        <Route path="/accountExample" element={<AccountExamplePage/>} />
                        <Route path="/editAccountExample" element={<EditAccountExamplePage/>} />
                    </Routes>   
                </main>
                
                <footer>
                    <p>&copy;2023 Jordan Howell</p>
                </footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
