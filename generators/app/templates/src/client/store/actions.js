import {getDeptAndStaff, getCompanyInfo, getDepartNames, getCommonPassengerList} from '$apis/<%= model %>'
/**
 * string轉換大寫
 * @param {*string} str
 */
export const toUpperCase = (str) => String.prototype.toUpperCase.call(str)

export default {

    async getDeptAndStaff({ commit }, {p_id, success}){
        try{
            let result = await getDeptAndStaff(p_id);
            success && success(result.<%=passenger%>);
            commit('INJECT_PERSONS', result.passenger);
        }catch(e){
            console.log('查询部门和员工信息失败', e);
        }
    },

    async getCompanyInfo({ commit }){
        try{
            let result = await getCompanyInfo();
            commit('INJECT_ROOT', {companyName:result.<%=companyInfo%>.nodeDesc, companyNO:result.<%=companyInfo%>.domainDeptID});
        }catch(e){
            console.log('查询公司信息失败', e);
        }
    },

    async getDepartNames({commit}, p_id){
        try{
            let result = await getDepartNames(p_id);
            commit('INSERT_DEPART_NAMES', result.<%=departNames%>);
        }catch(e){
            console.log('查询公司信息失败', e);
        }
    },

    async getCommonPassengerList({commit}){
        try{
            let result = await getCommonPassengerList();
            commit('INSERT_COMMON_PASSENGERS', result.<%=commonPassenger%>);
        }catch(e){
            console.log('查询公司信息失败', e);
        }
    }
}
