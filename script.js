const inputCheck = document.querySelector('#modo-noturno');
const elemento = document.querySelector('body');

inputCheck.addEventListener('click', () =>{
    const modo = inputCheck.checked ? 'dark' : 'light';
    elemento.setAttribute("data-bs-theme", modo)
})

const formulario = document.querySelector("[data-formulario]"); 

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    var nome = event.target.elements["nome"].value;
    var email = event.target.elements["email"].value;
    var telefone = event.target.elements["telefone"].value;

    let cadastro = new Array();

    if(localStorage.hasOwnProperty("cadastro")){
        cadastro = JSON.parse(localStorage.getItem("cadastro"))
    }
    cadastro.push({nome, email, telefone})

    localStorage.setItem("cadastro", JSON.stringify(cadastro))
    alert("Cadastro realizado com sucesso!")
    
    window.location.href = './index.html';

});
