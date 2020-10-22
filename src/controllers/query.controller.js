import QueryService from '../services/query.service.js';

const {postQuery,getQuery } = QueryService;

const createQuery = async (req, res) =>{
    const formData = req.body;
    const query = await postQuery(formData);
    res.status(201).json({data: query})
}

const retrieveQuery = async(req,res)=>{
const query = await getQuery();
res.status(200).json({data:query})
}

export default {
    retrieveQuery,
    createQuery
}
