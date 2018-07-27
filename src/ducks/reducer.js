const initialState = {
  username:'',
  userId:'',
  profile_pic:''
}

const GET_LOGIN_DATA = "GET_LOGIN_DATA"

export default function reducer(state=initialState,action){
  switch(action.type){
    case GET_LOGIN_DATA:  
      return Object.assign({}, state, {user:action.payload})

    default: 
      return state
  }
  
}

export function getLoginData(id,username,image){
  let user = {username:username, userId:id, profile_pic:image}
  return{
    type:GET_LOGIN_DATA,
    payload:user
  }
}