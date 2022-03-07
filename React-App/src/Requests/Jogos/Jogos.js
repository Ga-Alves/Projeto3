import api from '../../Service/api'


function criarJogo(body){
   console.log("passou aqui")
   api.post('/jogos/', body)
   .then((res) =>{
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
      console.log(body);
   });
}


function getTodosJogos(body){
   api.post('/usuarios/', body)
   .then((res) =>{
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
      console.log(body);
   });
}

export { criarJogo , getTodosJogos }