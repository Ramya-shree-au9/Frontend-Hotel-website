const initialize={
    Ldata:""
}

export default function loginSignupdata(state,action){  
    state = state || initialize;
    
        switch(action.type){
            case 'LOGIN':
                return{...state, Ldata:action.payload}
            case 'BOOKINGS':
                return{...state, Hdata:action.payload}
            default:
                return state
        }
}