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


async function getTodosJogos(){  
   const response = await api.get('/jogos/')
   
   return response.data;
}

export { criarJogo , getTodosJogos }