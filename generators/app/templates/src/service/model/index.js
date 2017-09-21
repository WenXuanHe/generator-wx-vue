import data from './data'
import commonPassenger from './commonPassenger'
import _ from 'lodash'

class TODO {
    constructor(){
        this.mapPersons=null;
        this.root = null;
    }
    changeMap(data){
        if(this.mapPersons){
            return this.mapPersons;
        }
        var map = {};
        data.forEach(function(item){
            map[item.domainDeptID] = item;
        });
        this.mapPersons = map;
        return map;
    }
    /**
     * 获得根元素 
     */
    getRoot() {

        if(this.root) return this.root;
        let root = [];
        if (!data.deptUserTreeBos.length) {
            return this.root=root;
        }

        root = data.deptUserTreeBos[0];
        if (root.foreNodeCode === root.domainDeptID) {
            return this.root=root;
        }

        root = this.data.filter((item) => item.domainDeptID === item.foreNodeCode);
        if (root.length) {
            return this.root=root[0];
        }
        return this.root=root;
    }

    /**
     *
     * @param {*} p_id 父id
     */
    getInfoByType(p_id) {

        let departLength = 0;
        let staffLength = 0;
        let list =  data.deptUserTreeBos.filter((item) => {
            if(item.foreNodeCode === p_id && item.foreNodeCode !== item.domainDeptID){
                return item;
            }
        });
        return list;
    }

    /**
    * 獲得員工和部门信息
    * 1.如果部门和员工同时存在，把员工加入未分配组
    * 2.只有员工，则展示员工组件
    */
    getDeptAndStaff(p_id = '', special='') {
        if(special === 'NeverAllot'){
            
        }
        if (p_id === '') {
            p_id = this.getRoot().domainDeptID;
        }
        let list = this.getInfoByType(p_id);
        return list;
    }

    getCommonPassIds(){
        return _.map(commonPassenger, 'StaffNo');
    }

    /**
     * 获得常用乘车人
     */
    getCommonPassengerList(){
        var hashMap = this.changeMap(data.deptUserTreeBos);
        var ids = this.getCommonPassIds();
        return ids.map(id => hashMap[id]).filter((item) => item);
    }

    getDepartNames(p_id){
        var hashMap = this.changeMap(data.deptUserTreeBos);
        var departNames=[];
        while(hashMap[p_id]){
           
            if(hashMap[p_id].foreNodeCode === hashMap[p_id].domainDeptID){
                return departNames.reverse();
            }
            
            departNames.push({
                nodeDesc:hashMap[p_id].nodeDesc,
                foreNodeCode:hashMap[p_id].foreNodeCode
            });
            
            p_id = hashMap[p_id].foreNodeCode;
        }

        return departNames.reverse();
    }
};

export default TODO;

