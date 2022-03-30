import http from '../http-common'

const addToList= async (data) => {
    return http.post('/area',data)
}

const updateArea= async (data) => {
    return http.patch(`/area/${data.id}`,data)
}

const removeFromList= async (data) => {
    return http.delete(`/area/${data.id}`,data)
}

const getConversions = async () => {
    return http.get('/areas')
}

const areaServices = {
    addToList,
    updateArea,
    removeFromList,
    getConversions
}

export default areaServices;