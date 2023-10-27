import React, {useState} from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h1>Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={name} name="name" id="name" placeholder="Enter your name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email address..." id="email" />
            <label htmlfor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Secrect password goes here..." id="password" />
        </form>
        <button  onClick={() => props.onFormSwitch('login')}>Already have an account? click here</button>
        </div>
    )
}
