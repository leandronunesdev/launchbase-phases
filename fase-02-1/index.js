// Criar um programa que calcula a média
// das notas entre os alunos e envia 
// mensagem do cálculo da média.

const alunosDaTurmaA = [
    {
        nome: "Mayk",
        nota: 1.8
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Fulano",
        nota: 2
    },
    {
        nome: "Novo aluno",
        nota: 10
    }
]

const alunosDaTurmaB = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Diego",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 0
    },
    {
        nome: 'Novo aluno',
        nota: 5
    }
]

function calculaMedia(alunos){
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }

    const media = soma / alunos.length
    return media
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    if (media > 5){
        console.log(`A media da turma ${turma} de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

//MARCAR COMO REPROVADO

function marcarComoReprovado(aluno){
    aluno.reprovado = false;
        if (aluno.nota < 5){
            aluno.reprovado = true;
        }
}

marcarComoReprovado(alunosDaTurmaA)

function enviarMensagemReprovado(aluno){
    if(aluno.reprovado){
        console.log(`o Aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos){
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }     

}

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)


// DESAFIO 1
/*
const idade = 17
// verificar se a pessoa é maior de 18 anos
console.log(idade>18)
//se sim, deixar entrar, se não, bloquear a entrada
//se a pessoa tiver 17 anos
if(idade>=18){
    console.log('deixar entrar')
} else{
    console.log('bloquear a entrada')
}
// avisar para voltar quando fizer 18 anos
if (idade ===17){
    console.log('volte quando tiver 18')
}

console.log(5 == 5 && 6 == 6) //true
console.log(5 == 5 && 6 != 6) //false

console.log(5 == 5 || 6 == 6) //true
console.log(5 == 5 && 6 == 6) //true

console.log(!(5 > 6)) //true
console.log(!(5 < 6)) //true
*/