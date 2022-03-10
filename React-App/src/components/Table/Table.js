import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAddGame from "../ModalAddGame/ModalAddGame";
import "./Table.css";
import add from '../../images/add.svg';
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { criarJogo } from "../../Requests/Jogos/Jogos";

export default function Table({ todosJogos, games, handleRenderPage, setTodosJogos}) {
    const [openModalAddGame, setOpenModalAddGame] = useState(false);
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [genero, setGenero] = useState('');
  
    const handleClose = () => {
        handleRenderPage()
    }
    useEffect(() => {
      // Ver_Usuario(Id).then(setUsuario)
    }, [])
    const onSubmitJogo =(value)=>{
        setNome(value.nome)
        setPreco(value.preco)
        setGenero(value.genero)
        // setTodosJogos(...todosJogos, { nome, preco, genero })
        // console.log("value",value)
        // console.log({ nome, preco, genero })
        criarJogo({ nome, preco, genero })
        handleRenderPage()
    }
    const OpenModalAdd =()=>{
        Swal.fire({
          title: "Adicionar um Jogo",
          html:
          '<h2>Nome</h2>' +
          '<input id="nome" class="swal2-input">' +
          '<h2>Preço</h2>' +
          '<input id="preco" class="swal2-input">' +
          '<h2>Gênero</h2>' +
          '<input id="genero" class="swal2-input">',
          showCancelButton: true,
          cancelButtonText:`Cancelar`,
          confirmButtonText: `Enviar`, 
          preConfirm: () => {
            const nome = Swal.getPopup().querySelector('#nome').value
            const preco = Swal.getPopup().querySelector('#preco').value
            const genero = Swal.getPopup().querySelector('#genero').value
            if (!nome || !preco || !genero) {
                Swal.showValidationMessage('Por favor, preencha todos os campos!')
            }
            return { nome, preco, genero }
          }
    
        }).then((res)=>{
          console.log(res);
          if(res.isConfirmed){
            onSubmitJogo(res.value);
    
            Swal.fire({
              icon: "success" ,
              timer: '1000' , 
              showConfirmButton: false,
              text: "Edição enviada"
            })
          }
        }) 
      }
    
    return (
        <>
          <div className="tabela">
              <div className="titulo row">
                  <div className="col-3">Titulo</div>
                  <div className="col-3">Preço</div>
                  <div className="col-3">Gênero</div>
                  <div
                      className="col add"
                      onClick={() => { if (!openModalAddGame) setOpenModalAddGame(true);}}>
                          Adicionar um Jogo
                      <img style={{paddingLeft: "7px"}} src={add} alt="out">
                      </img>
                  </div>
              </div>

              {games.map(a => <>{a}</>)}

              <div
                  className="add"
                  onClick={() => OpenModalAdd()}>
                      Adicionar um Jogo
                  <img src={add} alt="out" style={{paddingLeft: "7px"}}></img>
              </div>
              
              {openModalAddGame && <ModalAddGame closeModal={setOpenModalAddGame} onModalClose={handleClose}/>}
          </div>
        </>
    );
  }