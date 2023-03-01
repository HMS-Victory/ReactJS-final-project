import axios from 'axios';


const url='http://localhost:5000/'

// include action functions here.
export const fetchHomePage=()=>axios.get(url);
export const updateHomePage=(editData)=>axios.patch(url, editData)
export const login=()=>axios.get(url+ 'login');
export const fetchServers=()=>axios.get(url+'servers');
export const createNewServer=(server)=>axios.post(url+'servers', server);
export const updateRules=(id, server)=>axios.post(url+`servers/${id}`, server);
export const deleteServer=(id)=>axios.delete(url+`servers/${id}`);
export const updateServer=(id, server)=>axios.patch(url+`servers/${id}`, server);