const bool1 = false;
const bool2 = true;
const bool3 = true;

if(bool1){
    alert('Entrei no if, sou true')
} else { 
    alert('Entrei no else, sou false')
}

if (bool1 === bool2) {
    alert('sao iguais')
} else if(bool2 === bool3) {
    alert('2 e 3 são iguais')
} else if(bool1 === bool3) {
    alert('1 e 3 são iguais')
} else {
    alert('nenhuma é verdadeira')
}

const idade = 66;

if(idade >= 60 || idade >= 16 && idade < 18) {
    alert('o voto é facultativo')
} 
else if(idade >= 18) {
    alert('deve emitir o titulo')
} else {
    alert('não pode emitir o titulo')
} 

const media = 5;

if(media >=5) {
    console.log('aluno aprovado')
} else if( media >=3) {
    console.log('aluno de recuperação')
} else if(media <3) {
    console.log('aluno reprovado')
} else {
    console.log('dado inválido')
}