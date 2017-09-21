import TODO from '../model/index';
let todo = new TODO();
const resolvers = {

    Query: {
        passenger: (_, args) => {
            console.log('args', args);
            return todo.getDeptAndStaff(args.p_id);
        },

        commonPassenger: (_, args) => {
            return todo.getCommonPassengerList();
        },

        departNames: (_, args) => {
            return todo.getDepartNames(args.p_id);
        },

        companyInfo: (_, args) => {
            return todo.getRoot();
        },
    }
};

export default resolvers;
