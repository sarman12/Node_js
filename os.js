const os=require('os');
const user=os.userInfo();
console.log(user);
console.log(`the system uptime is  ${os.uptime()} seconds`);
const crntos= {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freeemem: os.freemem(),
}
console.log(crntos);
console.log(os.machine());