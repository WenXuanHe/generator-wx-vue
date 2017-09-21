/**
 * 身份信息類
 */
type IdentityCardInfo = {

  "keyID": string,
  "number": string,
  "companyNO": string,
  "type": number,
  "cardNO": string,
  "typeName": string,
  "identityCardType": number,
  "identityCardTypeName": string,
  "identityCardNO": string,
  "effectiveDate": string,
  "state": number,
  "stateName": string,
  "addTime": string,
  "modifyTime": string,
  "isDelete": number,
  "modifyUser": string

}

/**
 * 一個person的信息
 */
type Person = {
  domainDeptID: string,
  type: number,
  nodeDesc: string,
  deptNodeName: string,
  foreNodeCode: string,
  character: string, //字母
  choosed: boolean,
  isCommon:boolean, //是常用数据
  gender?: number,
  genderName?: string,
  birthDay?: string,
  phone?: string,
  userNO?: string,
  englishName?: string,
  isSeniorExecutive?: number,
  identityCardInfoList?: Array<IdentityCardInfo>
}
type Company = {
  companyNO: string,
  companyName: string
}

type myState = {
  count: number,
  searchVal: string,
  maxNum: number,
  persons: Array<Person>,
  choosedPersons: Array<Person>,
  commonPersons: Array<Person>,
  title: string,
  comContractIsShow: boolean,
  isPrivate: boolean,
  isSingle: boolean,
  departNames:Array<string>,
  root: Company
}

const data:myState = {
  count: 6,
  searchVal: '',
  // 最大可选人数
  maxNum: 9,
  // 用户数据
  persons: [],
  // 常用数据 一定是包含在Person中的
  title: '乘车人',
  //是否显示常用
  comContractIsShow:true,
  //是否因私
  isPrivate: false,
  //只选择单个,说明maxNum应该为1
  isSingle: false,
  choosedPersons:[],
  commonPersons: [],
  departNames:[],
  root:{
    companyNO:'',
    companyName:''
  }
}
export default data
