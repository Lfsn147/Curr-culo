const nomeOriginal = "Lucas Felipe";
const cursoOriginal = "Curso: Sistemas de informação";
const fotoOriginal = "imagens/perfil1.jpg";

const nome = document.getElementById("nomePerfil");
const curso = document.getElementById("cursoPerfil");
const foto = document.getElementById("fotoPerfil");
const perfil = document.getElementById("perfil");
const biografia = document.getElementById("biografiaPerfil");

const contador = document.getElementById("contadorAcoes");
const ultimaAcao = document.getElementById("ultimaAcao");

const tema = document.getElementById("temaSelect");
const fonte = document.getElementById("fonteRange");
const valorFonte = document.getElementById("valorFonte");
const mostrarBio = document.getElementById("mostrarBio");

const emailInput = document.getElementById("emailInput");
const telefoneInput = document.getElementById("telefoneInput");

const emailExibido = document.getElementById("emailExibido");
const telefoneExibido = document.getElementById("telefoneExibido");

let totalAcoes = 0;

function registrarAcao(texto){

    totalAcoes++;

    contador.textContent = totalAcoes;

    ultimaAcao.textContent = texto;

}

document.getElementById("btnAlterarNome").addEventListener("click",()=>{

    nome.textContent = "Maria Oliveira";

    registrarAcao("Alteração de nome");

});

document.getElementById("btnAlterarCurso").addEventListener("click",()=>{

    curso.textContent = "Curso: Análise e Desenvolvimento de Sistemas";

    registrarAcao("Alteração de curso");

});

document.getElementById("btnAlterarFoto").addEventListener("click",()=>{

    foto.src = "imagens/perfil2.jpg";

    registrarAcao("Alteração de foto");

});

document.getElementById("btnDestacarPerfil").addEventListener("click",()=>{

    perfil.classList.add("perfil-destaque");

    registrarAcao("Perfil destacado");

});

document.getElementById("btnRestaurar").addEventListener("click",()=>{

    nome.textContent = nomeOriginal;

    curso.textContent = cursoOriginal;

    foto.src = fotoOriginal;

    perfil.classList.remove("perfil-destaque");

    registrarAcao("Perfil restaurado");

});

tema.addEventListener("change",()=>{

    document.body.classList.remove("tema-escuro");
    document.body.classList.remove("tema-azul");

    if(tema.value==="escuro"){

        document.body.classList.add("tema-escuro");

    }

    else if(tema.value==="azul"){

        document.body.classList.add("tema-azul");

    }

    registrarAcao("Tema alterado");

});

fonte.addEventListener("input",()=>{

    biografia.style.fontSize = fonte.value+"px";

    valorFonte.textContent = fonte.value+"px";

    registrarAcao("Tamanho da fonte alterado");

});

mostrarBio.addEventListener("change",()=>{

    if(mostrarBio.checked){

        biografia.style.display="block";

    }

    else{

        biografia.style.display="none";

    }

    registrarAcao("Biografia exibida/ocultada");

});

document.getElementById("btnAtualizarContato").addEventListener("click",()=>{

    emailExibido.textContent = "E-mail: " + emailInput.value;

    telefoneExibido.textContent = "Telefone: " + telefoneInput.value;

    registrarAcao("Contato atualizado");

});