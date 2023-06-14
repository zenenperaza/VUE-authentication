import { Ref, ref } from "vue";
class AuthService{

    private jwt: Ref<string>
    private error: Ref<string>


    constructor(){
        this.jwt = ref('')
        this.error = ref('')
        
    }

    getJwt(): Ref<string> {
        return this.jwt
    }

    getError(): Ref<string> {
        return this.error
    }

    async login (username:string, password:string): Promise<boolean>{

        try {
            const res = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    'username': username,
                    'password': password
                })
            })

            const response = await res.json()

            if ('error' in response) {                
                this.error.value = "Login failed"
                return false
            } 

            this.jwt.value = response.token
            // $cookies.set("Auth", response.token)
            // $session.start()
            // $session.set('auth', response.token)

            if(this.jwt.value){
                return response.token
            }else {
                return false
            }
            
        

        } catch (error) {
            this.error.value = "Login failed"
            return false
            
        }
    }
}

export default AuthService