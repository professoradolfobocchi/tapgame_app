import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { registerStart } from '../../store/modules/usuario/actions';

function Signup(props) {
    const [credentials, setCredentials] = useState({nome: '', nick: '', email: '', password: ''});
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerStart(credentials));
    }

    return (
        <div class="login-area">
            <div class="form-area">
                <form onSubmit={handleSubmit}>
                    <div class="form-content">
                        <div class="input-area">
                            <label for="nome">Nome</label>
                            <input type="text" name="nome" id="nome" value={credentials.nome} onChange={handleChange}  />
                        </div>
                        <div class="input-area">
                            <label for="avatar">Avatar</label>
                            <input type="file" name="avatar" id="avatar" />
                        </div>
                        <div class="input-area">
                            <label for="nick">Nick</label>
                            <input type="text" name="nick" id="nick" value={credentials.nick} onChange={handleChange}/>
                        </div>

                        <div class="input-area">
                            <label for="email">E-mail</label>
                            <input type="email" name="email" id="email" value={credentials.email} onChange={handleChange}/>
                        </div>
                        <div class="input-area">
                            <label for="password">Senha</label>
                            <input type="password" name="password" id="password" value={credentials.password} onChange={handleChange} />
                        </div>

                    </div>
                    <div class="form-text">
                    </div>
                    <div class="form-btn-area">
                        <button class="btn" type="button" onClick={() => props.onClickCancel()}>CANCELAR</button>
                        <button class="btn" type="submit">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;