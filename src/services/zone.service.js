import http from '../http-common'

const createZone= async (data) => {
    return http.post('/zone',data)
}

const updateZone= async (data) => {
    return http.patch(`/zone/${data.id}`,data)
}

const deleteZone= async (data) => {
    return http.delete(`/zone/${data.id}`,data)
}

const getZones = async () => {
    return http.get('/zones')
}

const zoneServices = {
    createZone,
    updateZone,
    deleteZone,
    getZones
}

export default zoneServices;