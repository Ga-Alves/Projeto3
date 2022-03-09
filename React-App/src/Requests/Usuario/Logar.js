import api from '../../Service/api'

import history from '../../Service/history';


export default function Logar(body){

   api.post('/usuarios/login', body)
    .then((res) =>{
        console.log("Res: ", res);
        const usuario = JSON.stringify(res.data);
        console.log(usuario);
        localStorage.setItem("user", JSON.stringify(res.data));
        history.push("/dashboard/Home");
        document.location.reload(true);
    })
    .catch((err) =>{
        console.log("Err: ", err);
        console.log(body)
    })
}