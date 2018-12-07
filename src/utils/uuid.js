
const DEFAULT_CLIENT_KEY=''

export default{
    clientKey:'',
    userKey:'',
    uuid:()=>{
        return (new Date).getTime()
    }
}