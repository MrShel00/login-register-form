import React, {useState} from "react";

export const Login = (props) => {
    const [username, setUsername ] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
        <div className="auth-form-container">
              
            <div className="position">
                <h2>HALODOS</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="usernmae" name="username" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value) } type="password" id="password" name="password" />
                <button>Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('Register')}>Tidak Mempunyai Akun? Buat Akun</button>
            </div>
          
        </div>
    )
}