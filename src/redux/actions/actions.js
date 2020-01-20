import {CREATE_USER,LOGIN_USER, LOGOUT_USER, UPLOAD_STORIE,GET_STORIES} from '../actions/types';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';



export const createUser = (user,history) => dispatch =>{
   axios.post('http://localhost:4000/signup',user).then((res)=>{
  
      
      let decoded = jwt_decode(res.data);


   dispatch({
        type: CREATE_USER,
        payload: decoded.payload
    })

   })
   .catch(e =>{
      console.log(e)
   })
 
}



export const loginUser = (user,history) => dispatch =>{
   axios.post('http://localhost:4000/login',user).then((res)=>{

   
      getToken(res.data);
      let decoded = jwt_decode(res.data);

   history.push('/home')

   dispatch({
        type: LOGIN_USER,
        payload: decoded.payload
    })
   })
   .catch(e =>{
      console.log(e)
   })
 
}

export const logoutUser = history => dispatch =>{
   axios.post('http://localhost:4000/logout').then((res)=>{

   localStorage.removeItem('token')

   setAuthToken(false)

   dispatch({
        type: LOGOUT_USER
    })

    history.push('/')
   })
   .catch(e =>{
      console.log(e)
   })
 
}

export const uploadStorie = data => dispatch =>{
   console.log('chamou')
   axios.post('http://localhost:4000/users/storie',data).then((res)=>{

   
   getStories(dispatch);

   })
   .catch(e =>{
      console.log(e)
   })
 
}

const getStories = (dispatch) =>{
   axios.get('http://localhost:4000/users/storie/me').then((res)=>{

     console.log('chamou getStories')
      dispatch({
         type: GET_STORIES,
         payload: res
      })
   
      })
      .catch(e =>{
         console.log(e)
      })
    
   
}



const getToken = token =>{
   localStorage.setItem('token', token)
   setAuthToken(token);

}