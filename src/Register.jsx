import React, {useState} from "react";

export const Register = (props) => {
    const [noHp, setNoHp] = useState(''); // Fixed destructuring here
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');  
    const [role, setRole] = useState('');
    const [pass, setPass] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
    <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="nohp">No Hp</label>
            <input value={noHp} onChange={(e) => setNoHp(e.target.value)} name="nohp" id="nohp" type="number" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" />
            {/* <label htmlFor="role">Daftar Sebagai</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} id="role" name="role">
                    <option value="">Pilih peran...</option>
                    <option value="siswa">Siswa</option>
                    <option value="mahasiswa">Mahasiswa</option>
                    <option value="umum">Umum</option>
                </select>
            <input value={role} onChange={(e) => setRole(e.target.value)} type="radioButton" id="name" name="name" /> */}
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="password" name="password" />
            <button>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Sudah Mempunyai Akun? Log in</button>
        
    </div>
    )
}