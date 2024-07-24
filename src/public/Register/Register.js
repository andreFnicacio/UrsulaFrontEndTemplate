import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doRegister } from '../../services/AuthService';

function Register() {

    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onChangeInput(event) {
        if (event.target.id === 'name') {
            setName(event.target.value)
        }
        else if (event.target.id === 'phone') {
            setPhone(event.target.value);
        }
        else if (event.target.id === 'email') {
            setEmail(event.target.value);
        }
        else {
            setPassword(event.target.value);
        }
    }


    async function onSubmit(event) {
        event.preventDefault();

        const success = await doRegister(name, phone, email, password);
        if (success) {
            navigate('/login');
        }
    }
    const mainStyle = {
        border: '1px solid #000',
        background: 'linear-gradient(120deg, #4510A3 0.67%, #0CD2AB 99.33%)',
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        textAlign: 'center'
    };

    return (
        <main style={mainStyle}>
            <section className="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
                <div className="container">
                    <p className="text-center">
                        <Link to="/" className="d-flex align-items-center justify-content-center link-white">
                            <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                            </svg>
                            Página principal
                        </Link>
                    </p>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center">
                                <img src="/img/favicon/logoa 1.png" alt="GrantoUS" width={64} />
                            </div>
                            <form action="#" className="mt-4" onSubmit={onSubmit}>
                                <div className="form-group">
                                    <div className="form-group mb-4">
                                        <label htmlFor="name">Nome</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </span>
                                            <input type="name" className="form-control" placeholder="Ursula GrantoUs" id="name" autofocus required onChange={onChangeInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group mb-4">
                                        <label htmlFor="phone">Telefone</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </span>
                                            <input type="phone" className="form-control" placeholder="279999888" id="phone" autofocus required onChange={onChangeInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group mb-4">
                                        <label htmlFor="email">Email</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon1">
                                                <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                                            </span>
                                            <input type="email" className="form-control" placeholder="example@grantous.com" id="email" autofocus required onChange={onChangeInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-group mb-4">
                                        <label for="password">Senha</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon2">
                                                <svg className="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                            </span>
                                            <input type="password" placeholder="Password" className="form-control" id="password" required onChange={onChangeInput} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-gray-800">Cadastrar</button>
                                </div>
                                {
                                    error ? (
                                        <div className="alert alert-danger mt-2">{error}</div>
                                    ) : (
                                        <React.Fragment></React.Fragment>
                                    )
                                }
                                <br></br>
                                <br></br>
                                <p className="text-center">
                                    <Link to="/login" className="d-flex align-items-center justify-content-center">
                                        <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path>
                                        </svg>
                                        Já possui um cadastro ? Vamos conectar!
                                    </Link>
                                </p>

                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Register;
