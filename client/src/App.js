import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoApp from './components/TodoApp.jsx';
import QuizApp from './components/QuizApp.jsx';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // API 호출
        axios.get('http://localhost:5000/api/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>

            <TodoApp />
            <QuizApp />
        </div>
    );
}

export default App;