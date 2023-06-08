import { ref } from "vue";

class AuthService{


    constructor(){
        this.jwt = ref('')
        this.error = ref('')
        
    }

    getJwt(){
        return this.jwt
    }

    getError(){
        return this.error
    }

    async login (email, password){
        try {
            const res = await fetch('https://restful-booker.herokuapp.com/auth', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            const response = await res.json()

            if ('error' in response) {
                
                this.error = "Login failed"
                return false
            }

            this.jwt = response.token
            return true

        } catch (error) {
            console.log(error);
            
        }
    }
}