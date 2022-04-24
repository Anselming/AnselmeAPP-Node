exports.getUsersCompleto = (REPOSITORY, MODEL, userService) =>{
    return userService.GetAllUsers(REPOSITORY, MODEL);
};

exports.getUsersSimplificado  = (REPOSITORY, MODEL, userService) =>{
    return userService.GetAllUsers(REPOSITORY, MODEL);
};