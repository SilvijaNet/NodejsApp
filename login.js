
import router from "../router"    
        import axios from "axios"    
        export default {    
            name: "Login",    
            methods: {    
                login: (e) => {    
                    e.preventDefault()    
                    let email = "user@email.com"   
                    let password = "password"    
                    let login = () => {    
                        let data = {    
                            email: email,    
                            password: password    
                        }    
                        axios.post("/api/login", data)    
                            .then((response) => {    
                                console.log("Logged in")    
                                router.push("/dashboard")    
                            })    
                            .catch((errors) => {    
                                console.log("Cannot log in")    
                            })    
                    }    
                    login()    
                }    
            }    
        }
