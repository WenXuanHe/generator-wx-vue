export default {
    // 已选择的人数
    choosedPersons: (state) => state.Persons.filter((item) => item.choosed) ,
    //是否超过最大可选人数
    exceedMax: (state) => this.choosedPersons.length > state.maxNum
}
