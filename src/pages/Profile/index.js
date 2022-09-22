import React from "react";
import './style.css';

export default function Profile() {
    return (
        <div id="profile-container">
            <h1>Cadastro</h1>
            <form>
                <strong>Nome:</strong>
                <input name="name" />
                <strong>Email:</strong>
                <input type="email" name="email" />
                <strong>Idade:</strong>
                <input name="age" />
                <strong>Empresa:</strong>
                <input name="company" />

                <div className="actions">
                    <button className="button" type="">Voltar</button>
                    <button className="button" type="submit">Salvar</button>
                </div>
            </form>
        </div>
    );
}