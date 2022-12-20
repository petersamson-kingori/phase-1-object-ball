let employee = {
    name:"",
    streetAdress:""
}

////function declarations



function updateEmployeeWithKeyAndValue(employee, key, value){

    return{
        ...employee,
        [key]:value
    };
}

console.log(updateEmployeeWithKeyAndValue)