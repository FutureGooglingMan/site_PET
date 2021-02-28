function abre_ou_fecha_barra(){;
    var estado_barra = document.getElementById("barra").style.display;
    if (estado_barra === "flex"){
        document.getElementById("barra").style.display = "none";
    }else{
        document.getElementById("barra").style.display = "flex";
        document.getElementById("barra").style.flexDirection = "row";
        document.getElementById("barra").style.justifyContent = "center";
    }
}

function exibe_secao_sobre(){
    var estado_secao = document.getElementById("sobre_evento").style.display;
    if(estado_secao === "block"){
        document.getElementById("sobre_evento").style.display = "none";
    }else{
        document.getElementById("sobre_evento").style.display = "block";
        document.getElementById("sobre_evento").style.marginLeft = "300px";
        document.getElementById("sobre_evento").style.marginRight = "300px";
        document.getElementById("sobre_evento").style.textAlign = "justify";
    
    }
}

function exibe_secao_cronograma(){
    var estado_secao = document.getElementById("cronograma").style.display;
    if(estado_secao === "flex"){
        document.getElementById("cronograma").style.display = "none";
    }else{
        document.getElementById("cronograma").style.display = "flex";
        document.getElementById("cronograma").style.flexDirection = "row";
        document.getElementById("cronograma").style.justifyContent = "center";
        document.getElementById("cronograma").style.marginLeft = "300px";
        document.getElementById("cronograma").style.marginRight = "300px";
    }
}

function exibe_secao_form(){
    var estado_secao = document.getElementById("formulario_inscricao").style.display;
    if(estado_secao === "flex"){
        document.getElementById("formulario_inscricao").style.display = "none";
    }else{
        document.getElementById("formulario_inscricao").style.display = "flex";
        document.getElementById("formulario_inscricao").style.flexDirection = "row";
        document.getElementById("formulario_inscricao").style.justifyContent = "center";
        document.getElementById("formulario_inscricao").style.textAlign = "justify";
        document.getElementById("formulario_inscricao").style.width = "100%";
        document.getElementById("formulario_inscricao").style.backgroundColor = "#002230";
        document.getElementById("formulario_inscricao").style.padding = "10px 0px 10px 0px";
        document.getElementById("formulario_inscricao").style.margin = "auto";
    }
}

function exibe_secao_faq(){
    var estado_secao = document.getElementById("faq").style.display;
    if(estado_secao === "block"){
        document.getElementById("faq").style.display = "none";
    }else{
        document.getElementById("faq").style.display = "block";
        document.getElementById("faq").style.padding = "10px";
        document.getElementById("faq").style.backgroundColor = "#415a75";
    }
}