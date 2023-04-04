let dbUsers = [
    {
        username: "afnan",
        password: "password",
        name: "Afnan",
        email: "muhd.afnann@utem.edu.my"

    },
    {
        username: "amarboy",
        password: "gohome",
        name: "Amareen",
        email: "amareen@utem.edu.my"
    },
    {
        username: "bazli",
        password: "990817",
        name: "Bazli",
        email: "bazlip@utem.edu.my"
    }

]

 function login(reqUsername, reqPassword){
     let matchUser = dbUsers.find(
         user => user.username == reqUsername 
     )
     console.log(matchUser)
 }

 // function login(reqUsername, reqPassword){
 //     let matchUser = dbUsers.find(x => x.username == reqUsername 
 //     )
    
 //     if(!matchUser) return "User not found!"
 //     if(matchUser.password == reqPassword){
 //         return matchUser
 //     }else{
 //         return "Invalid password"
 //     }
 // }


function register(reqUsername,reqPassword,name,email){
    dbUsers.push({
        username: reqUsername,
        password: reqPassword,
        name: name,
        email: email
    })
}

//try login
console.log(login("bazli", "990817"))
register("bazli","990817"," Bazli","bazlip@utem.edu.my")