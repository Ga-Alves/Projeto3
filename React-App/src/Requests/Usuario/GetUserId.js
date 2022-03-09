export default function GetUserId(){

let Usuario = {}
  Usuario = localStorage.getItem('user');
  Usuario = JSON.parse(Usuario);
  return Usuario.id;
}