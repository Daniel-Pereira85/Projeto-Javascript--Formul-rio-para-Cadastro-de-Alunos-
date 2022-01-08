//CADASTRAR ALUNO

//variável de incremento para ser utilizada no ID da TR
let i = 0;

document.getElementById("form-input").addEventListener("submit", function (e) {

    //seta vazio a mensagem de validação
    document.getElementById("msg").innerHTML = "";

    e.preventDefault();


    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const phone = document.getElementById("phone-input").value;
    const date = document.getElementById("date-input").value;
    const notaFinal = document.getElementById("nota-final-input").value;

    //validação dos campos
    if (name.trim() == "") {
        document.getElementById("msg").innerHTML = "Necessário preencher o campo Nome!";
        return false;
    }
    if (email.trim() == "") {
        document.getElementById("msg").innerHTML = "Necessário preencher o campo E-mail!";
        return false;
    }
    if (phone.trim() == "") {
        document.getElementById("msg").innerHTML = "Necessário preencher o campo Telefone!";
        return false;
    }
    if (date.trim() == "") {
        document.getElementById("msg").innerHTML = "Necessário preencher o campo Data de Nascimento!";
        return false;
    }
    else {
        alert("Cadastro efetuado com sucesso!")
    }

    //cria a linha com os valores inseridos no formulário
    createLine(name, email, phone, date, notaFinal);

    //função para apagar o conteúdo do form
    eraseForm();

});

function createLine(name, email, phone, date, notaFinal) {
    //cria a tag TR
    const tr = document.createElement("tr");
    i++;
    tr.id = i;

    //cria a tag TD com valor de nome
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(name));
    tr.appendChild(td);

    //cria a tag TD com valor de e-mail
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(email));
    tr.appendChild(td);

    //cria a tag TD com valor de telefone
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(phone));
    tr.appendChild(td);

    //cria a tag TD com valor de data
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(convertDate(date)));
    tr.appendChild(td);

    //cria a tag TD com valor de nota final
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(notaFinal));
    tr.appendChild(td);

    //cria o botão de exclusão da linha
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Excluir"));
    btn.setAttribute("onclick", "deleteLine(" + i + ");");

    //cria a tag TD com o botão
    var td = document.createElement("td");
    td.appendChild(btn);
    tr.appendChild(td);

    //insere o TR na div com id = results
    document.getElementById("results").appendChild(tr);
}

function convertDate(date) {
    //quebra a data em três partes
    let data = date.split("-");
    //monta a data em novo formato
    return data[2] + "/" + data[1] + "/" + data[0];
}

function eraseForm() {
    document.getElementById("name-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("phone-input").value = "";
    document.getElementById("date-input").value = "";
    document.getElementById("nota-final-input").value = "";

    //deixa o cursor no campo nome
    document.getElementById("name-input").focus();
}

function deleteLine(id) {
    //busca o elemento pai
    var elemento = document.getElementById("results");
    //busca o elemento filho a ser excluído
    var item = document.getElementById(id);
    //exclui o elemento filho
    elemento.removeChild(item);
}

