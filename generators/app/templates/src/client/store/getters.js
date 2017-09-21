export default {
     /**
     * 篩選只篩沒有被選則的數據
     */
    searchedPersons: (state) => {
        let {Persons, searchVal} = state;
        return Persons.filter((person)=>{
            return !person.choosed && person.nodeDesc.indexOf(searchVal)
        });
    },

    characters: (state) => {
        let {Persons} = state;
    },
    //是否超过最大可选人数
    exceedMax: (state) => this.choosedPersons.length > state.maxNum
}
