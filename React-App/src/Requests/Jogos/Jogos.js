import api from '../../Service/api'


function criarJogo(body){
   api.post('/jogos/', body)
   .then((res) =>{
      console.log("criou",res);
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

async function deleteJogo(id){  
   await api.delete(`/jogos/${id}`)
   .then((res) =>{
      console.log(res);
   })
   .catch((err) =>{
      console.log(err);
   });
}

async function editarJogo(id, body){  

   console.group("dentro editar")
   console.log(id)
   console.log(body)
   console.groupEnd("dentro editar")

   await api.put(`/jogos/${id}`, body)
   .then((res) =>{
      console.log("success:")
      console.log(res);
   })
   .catch((err) =>{
      console.log("error:")
      console.log(err);
   });
}

export { criarJogo , getTodosJogos, deleteJogo, editarJogo}