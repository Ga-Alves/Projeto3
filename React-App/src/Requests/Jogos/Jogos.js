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


function getTodosJogos(){
   let response;
  
   api.get('/jogos/')
   .then((res) =>{
      response = res.data;
      return response;
   })
   .catch((err) =>{
      console.log(err);
   });  
}

export { criarJogo , getTodosJogos }