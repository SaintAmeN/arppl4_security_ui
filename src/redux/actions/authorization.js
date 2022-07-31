import {AUTH_LOGIN, AUTH_LOGIN_START} from "./ActionTypes";

export const authorizationStart = () => {
    return {
        type: AUTH_LOGIN_START
    }
}

// authorizationRequest => https://github.com/SaintAmeN/arppl4_spring_security/blob/master/src/main/java/pl/sda/arppl4/spring/security/model/dto/AuthenticationRequest.java
export const authenticateUser = (authorizationRequest) => {
    return dispatch => {
        dispatch(authorizationStart());

    }
}



