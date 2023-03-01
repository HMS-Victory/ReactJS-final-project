import { FETCH_ALL, LOGIN, UPDATE, CREATE, UPDATERULES, UPDATESERVER, DELETESERVER } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const getHomePage = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHomePage();
      dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const editHomePage= ( changes) => async (dispatch) => {
  try {
    const { data } = await api.updateHomePage(changes);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchServers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchServers();
    dispatch({ type: "FETCH_ALLS", payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const newServer=(server)=>async(dispatch)=>{
  try {
    const { data } = await api.createNewServer(server);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
}
export const updateRules=(id, server)=>async(dispatch)=>{
  try{
    const {data}=await api.updateRules(id, server);
    console.log(data)
    dispatch({ type: UPDATERULES, payload: data });
  }catch(error){
    console.log(error)
  }
}
export const updateServer=(id,server)=>async(dispatch)=>{
  try{
    const {data}=await api.updateServer(id, server);
    dispatch({type:UPDATESERVER,payload:data});
  }catch(error){
    console.log(error);
  }
}
export const deleteServer=(id)=>async(dispatch)=>{
  try {
    await api.deleteServer(id);
    dispatch({ type: DELETESERVER, payload: id });
  } catch (error) {
    console.log(error.message);
  }
}
export const login = async (dispatch) => {
  try {
    const { response } = await api.login();
    dispatch({ type: LOGIN, payload: response });
  } catch (error) {
    console.log(error.message);
  }
};
