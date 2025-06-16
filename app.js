import express from "express";
const app = express();

app.use(express.json());

let doce = [
    {
        id: 1, 
        nome: "Azedinha",
        valor: 3.50
    },
    {
        id: 2, 
        nome: "Jujuba",
        valor: 2.50
    },
    {
        id: 3, 
        nome: "Ouro Branco",
        valor: 4.90
    }
]

function acharDoce(id){
    return doce.findIndex(d => d.id === Number(id));
}

app.get("/", (req, res) => {
    res.status(200).send("Seja bem vindo!")
});

app.get("/listar", (req, res) => {
    res.status(200).json(doce);
});

app.get("/listar/:id", (req, res) => {
    const index = acharDoce(req.params.id);
    res.status(200).json(doce[index]);
});

app.post("/cadastrar", (req, res) => {
    doce.push(req.body);
    res.status(201).send("Cadastro feito com sucesso")
});

app.put("/editar/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, valor} = req.body;
    const DOCE = doce.find(d => d.id === id);
    
    if(!DOCE){
        return res.status(400).send("Doce não encontrado.");
    }else{
        DOCE.nome = nome;
        DOCE.valor = valor;
        res.status(200).send("Dados Atualizados com sucesso!");
    }
});

app.delete("/deletar/:id", (req, res) => {
    const id = parseInt(req.params.id);
    doce = doce.filter(d => d.id !== id);
    res.status(200).send("Doce removido com sucesso!")
});

export default app;