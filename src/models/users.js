import api from '../api';

export async function fetchUsers() {
    const response = await api.get('data');
    return response;
}

export async function deleteUserAsync(userId) {
    const response = await api.delete(`data/${userId}`);
    return response;
}

export async function createUser(user) {
    const response = await api.post('data', user);
    return response;
}

export async function updateUser(userId, user) {
    const response = await api.put(`data/${userId}`, user);
    return response;
}
