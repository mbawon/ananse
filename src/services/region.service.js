import http from '../http-common'

const createRegion= async (data) => {
    return http.post('/region',data)
}

const updateRegion= async (data) => {
    return http.patch(`/region/${data.id}`,data)
}

const deleteRegion= async (data) => {
    return http.delete(`/region/${data.id}`,data)
}

const getRegions = async () => {
    return http.get('/regions')
}

const regionServices = {
    createRegion,
    updateRegion,
    deleteRegion,
    getRegions
}

export default regionServices;