import Lokka from 'lokka';
import Transport from 'lokka-transport-http';

const client = new Lokka({
    transport: new Transport(`http://localhost/graphql`)
})

// const passengerInfo = client.createFragment(`
//   fragment on Passenger {
//     domainDeptID
//     type
//     nodeDesc
//     deptNodeName
//     foreNodeCode
//   }
// `)

export const getDeptAndStaff = (p_id="") => {
    return client.query(`
  {
    passenger (p_id:"${p_id}") {
        domainDeptID
        type
        nodeDesc
        deptNodeName
        foreNodeCode
    }
  }
  `)
};

export const getCompanyInfo = () => {
    return client.query(`
    {
        companyInfo {
            domainDeptID
            nodeDesc
      }
    }
    `)
};


export const getDepartNames = (p_id) => {
    return client.query(`
    {
        departNames (p_id: "${p_id}") {
            nodeDesc
            foreNodeCode
      }
    }
    `)
};


export const getCommonPassengerList = () => {
    return client.query(`
    {
        commonPassenger{
            domainDeptID
            type
            nodeDesc
            deptNodeName
            foreNodeCode
        }
    }
    `)
};

export default{
    getDeptAndStaff,
    getCompanyInfo,
    getDepartNames,
    getCommonPassengerList
}
