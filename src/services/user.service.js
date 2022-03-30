import http from '../http-common'

const createUser = async (data) => {
    return http.post('/user',data)
}

const updateUser = async (data) => {
    return http.patch(`/user/${data.id}`,data)
}

const getUsers = async () => {
    return http.get('/users')
}

const getUserAssignedLocations = async (userId) => {
    return http.get(`/users/${userId}/details`)
}

const assignUserToLocations = async (userId,data) => {
    return http.post(`/users/${userId}`,data)
}

const userServices = {
    createUser,
    updateUser,
    getUsers,
    getUserAssignedLocations,
    assignUserToLocations
}

export default userServices;