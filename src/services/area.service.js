import http from '../http-common'

const createArea= async (data) => {
    return http.post('/area',data)
}

const updateArea= async (data) => {
    return http.patch(`/area/${data.id}`,data)
}

const deleteArea= async (data) => {
    return http.delete(`/area/${data.id}`,data)
}

const getAreas = async () => {
    return http.get('/areas')
}

const areaServices = {
    createArea,
    updateArea,
    deleteArea,
    getAreas
}

export default areaServices;