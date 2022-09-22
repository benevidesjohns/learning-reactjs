import React, { useState, useEffect } from "react";
import api from '../../services/api';
import { Link } from "react-router-dom";
import './style.css';

export default function User() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data);
        });
    }, [])

    async function handleDelete(id){
        try{
            await api.delete(`/users/${id}`);
            setUsers(users.filter(user => user.id != id));
        }
        catch(error){
            alert('Erro ao deletar!');
        }
    }

    return (
        <div id="user-container">
            <h1>Lista de usuários</h1>
            <Link className="button" id="create-link" to={"/create"}>Criar</Link>
            <ul className="user-list">
                {users.map(user => (
                    <li key={user.id}>
                        <strong>Nome</strong>
                        <p>{user.name}</p>
                        <strong>Email</strong>
                        <p>{user.email}</p>
                        <strong>Idade</strong>
                        <p>{user.age}</p>
                        <strong>Empresa</strong>
                        <p>{user.company}</p>

                        <div className="actions">
                            <Link className="button" onClick={() => handleDelete(user.id)} type="button ">Deletar</Link>
                            <Link className="button" id="create-link" to={`/update/${user.id}`}>Acessar</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );

}