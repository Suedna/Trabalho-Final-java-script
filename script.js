documento.addeEventListener("DOMContentLoaded",function(){
    const form=document.getElementById("formulario-contato");

    form.addEventListener("submit, function(evente"){

        Event.preventDefault();


        const nome= document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();
        const telefone = document.getElementById("telefone").value.trim()
        if(nome==""){
            alert("por favor, preencha seu nome");
            return;
        }
        if(email==""){
            alert("por favor, preencha seu email.");
            return; 
        }
        if (telefone==""){
            alert("por favor, escreva seu telefone.");
            return; 
        if (mensagem==""){
            alert("por favor, escreva sua mensagem.");
            return; 
        }
    }
}

})