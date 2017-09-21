const typeDefs = `

type Passenger {
    domainDeptID: String
    type: Int
    nodeDesc: String
    deptNodeName: String
    foreNodeCode: String
}

type Depart{
    nodeDesc: String
    foreNodeCode: String
}

type Query {
    passenger(p_id: String): [Passenger],
    commonPassenger: [Passenger],
    departNames(p_id: String):[Depart],
    companyInfo:Passenger,
}

`;

export default typeDefs;
