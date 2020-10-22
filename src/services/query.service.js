import Query from '../database/models/query.model.js';

const postQuery = async (query)=>{
    return await Query.create(query);
}

const getQuery = async () => {
    return await Query.find();
}

export default {
    postQuery,
    getQuery
}