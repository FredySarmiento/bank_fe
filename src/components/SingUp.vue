<script>
import axios from 'axios';

export default {
    name: "LogIn",

    data: function(){
        return {
            user: {
                username:"",
                password:""
            }
        }
    },

    methods: {
        processLogInUser: function(){
            axios.post(
                "https://mision-tic-bank-be-fredy.herokuapp.com/login/",
                this.user,
                {headers: {}}
                )
                .then((result) => {
                    let dataLogIn = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }

                    this.$emit('completedLogIn', dataLogIn)

                })
                .catch((error) => {

                    if (error.response.status == "401")
                        alert("ERROR 401: Credenciales Incorrectas.");
                });
        }
    }
}
</script>