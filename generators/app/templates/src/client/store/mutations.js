export default {

    CHOOSE_BY_INFO (state, info) {
        state.choosedPersons.push(info);
    },
    UNCHOOSE_BY_INFO(state, info){
        let index = state.choosedPersons.indexOf(info);
        state.choosedPersons.splice(index, 1);
    },

    /**
     * 注入從服務端取出的數據
     * @param {*State} state
     * @param {*Person} Persons
     */
    INJECT_PERSONS(state, Persons){
        state.persons = Persons;
    },
    /**
     * 改变 是否显示常用联系人
     * @param {*State} state
     * @param {*boolean} show 是否显示常用联系人
     */
    CHANGE_COM_CONTRACT(state, show){
        state.comContractIsShow = show;
    },
    INSERT_DEPART_NAMES(state, data){
        if(Array.isArray(data)){
            state.departNames = [];
            state.departNames.push(...data);
        }else{
            state.departNames.push(data);
        }
    },
    DELETE_DEPART_NAMES(state, len){
        state.departNames = state.departNames.slice(0, len)
    },

    /**
     * 设置只选择一个乘车人，将maxNum设置为1
     * @param {*State} state
     */
    SET_SINGLE(state){
        state.maxNum = 1;
    },

    INJECT_ROOT(state, {companyNO, companyName}){
        state.root.companyNO = companyNO;
        state.root.companyName = companyName;
    },

    INSERT_COMMON_PASSENGERS(state, compassengers){
        if(typeof compassengers === 'string'){
            state.commonPersons.push(compassengers);
        }else {
            state.commonPersons.push(...compassengers);
        }
    }
  }
