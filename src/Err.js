export const server_err = {
    code: 0,
    message: 'Error from server',
    data: null
}


// register
export const email_existed = {
    code: -1,
    message: 'The email is already exist',
    data: null
}
export const phone_existed = {
    code: -2,
    message: 'The phone number is already exist',
    data: null
}


//login
export const password_incorrect = {
    code: -3,
    message: 'The password is incorrect',
    data: null
}

export const login_failed = {
    code: -4,
    message: 'The password is incorrect',
    data: null
}

//handle get accesstoken


export const RT_incorrect = {
    code: -5,
    message: 'Refresh token is incorrect',
    data: null
}
export const RT_invalid = {
    code: -6,
    message: 'Refresh token is invalid or expired',
    data: null
}
export const not_find_RT = {
    code: -7,
    message: 'Can\'t find refresh token',
    data: null
}

//middlewares
export const access_denied = {
    code: -8,
    message: 'Access denied',
    data: null
}

export const access_token_err = {
    code: -9,
    message: 'Your accesstoken is expired or incorrect',
    data: null
}


