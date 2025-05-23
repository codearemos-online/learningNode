const { createCounter, createUser, createRole, createConection} = require("../exercises/factory-functions");


//Exercise 1
/** 
    const user = createUser("Diego")
    console.log(user.greet("1996-03-27"));
*/

//Exercise 2
/** 
    const number = createCounter();

    number.increment();
    number.increment();
    number.decrement();
    number.increment();
    number.decrement();

    console.log(number.getNumber());
*/

//Exercise 3

/** 
    const admin = createRole("admin");
    const user = createRole("user");

    console.log(admin.havePermissions());
    console.log(user.havePermissions());
*/

//Exercise 4


    const conexion = createConection();
    conexion.connect();
    conexion.disconnect();
    

