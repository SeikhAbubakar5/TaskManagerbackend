const bcrypt=require ('bcryptjs');

const password='12345';
 const run=async ()=>{
    const salt= await bcrypt.genSalt(10)
    const hashPassword= await bcrypt.hash(password,salt)

console.log(salt)
console.log("hashpassword",hashPassword)
hashPassword="$2a$10$VXkXc7WEQ22WlwytEVArDeRE/pERvuJoqxHg6vm.D.7hs4l0Dqnoi"
console.log(await bcrypt.compare(password,hashPassword))
 }
run ()