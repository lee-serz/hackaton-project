import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/auth/login", {
                username,
                email,
                password,
            });

            // Обработка успешного ответа, например, сохранение токена и переход к следующей странице
        } catch (error) {
            // Обработка ошибок, например, отображение сообщения об ошибке
        }
    };

    return (
        <div className="container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-title"> Регистрация </div>
                    <div className="form-wrapper">
                        <div>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder={"Логин"}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder={"Почта"}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder={"Пароль"}
                            />
                        </div>
                    
                    
                    <button className="btn register-btn"> Зарегистрироваться</button>
                    
                </div>
                <Link to="/login">Перейти к авторизации</Link>
            </form>
        </div>
    );
};

export default LoginForm;
