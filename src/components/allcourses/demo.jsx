import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ObjectFilter = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const result = await fetch('https://powerful-tuna-moccasins.cyclic.app/read-course');
        const data = await result.json();
        setUsers(data);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredUsers = users.filter(user => {
        return user.title.toLowerCase().includes(filter.toLowerCase());
    });

    return (
        <div>
            <input type="text" placeholder="Search by name" value={filter} onChange={handleFilterChange} />
            <ul>
                {filteredUsers.map(user => (
                    <li key={user.id}>
                        <Link to={`/user/${user.id}`}>{user.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ObjectFilter;