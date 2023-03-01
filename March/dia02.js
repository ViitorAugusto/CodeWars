// Considere uma matriz/lista de ovelhas onde algumas ovelhas podem estar faltando em seu lugar. Precisamos de uma função que conte o número de ovelhas presentes no array (verdadeiro significa presente).

// Por exemplo,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// A resposta correta seria 17.

// Dica: não se esqueça de verificar valores incorretos como null/undefined
const ovelhas = [
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
 


const countTrue = () => {
        let soma = 0
    ovelhas.forEach((ovelha)=> {
       if(ovelha === true) {
            soma++
        }

    })
    return soma
};
console.log(countTrue())