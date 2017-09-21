import axios from 'axios'

export const getDeptAndStaff = (p_id) => {
    return axios.get('/apis/getDeptAndStaff', {params:{p_id}})
}

export const getCompanyInfo = () => {
    return axios.get('/apis/getCompanyInfo');
}

export const getDepartNames = (p_id) => {
    return axios.get('/apis/getDepartNames', {params:{p_id}})
}

export const getCommonPassengerList = () => {
    return axios.get('/apis/getCommonPassengerList');
}

export default{
    getDeptAndStaff,
    getCompanyInfo,
    getDepartNames,
    getCommonPassengerList
}
