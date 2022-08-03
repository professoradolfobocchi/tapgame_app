import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginStart } from '../../store/modules/usuario/actions';
import './style.css';
import { useNavigate } from 'react-router-dom';

function Signin() {
    const auth = useSelector(({usuario}) => usuario);
    let navigate = useNavigate();

    const [credentials, setCredentials] = useState({email: '', password: ''});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginStart(credentials));
    }

    useEffect(() => {
        if(auth.currentUser) {
            navigate("/painel");
        }
    }, [auth]);

    return (
        <div class="login-area">
            <div class="form-area">
                <form onSubmit={handleSubmit}>
                    <div class="form-content">
                        <div class="input-area">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange} />
                        </div>
                        <div class="input-area">
                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange}/>
                        </div>

                    </div>
                    <div class="form-text">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            esqueceu a senha?
                        </a>
                    </div>
                    <div class="form-btn-area">
                        <button class="btn" type="submit">ENTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;