let campoNota1 = document.getElementById('n1')
let campoNota2 = document.getElementById('n2')
let campoNota3 = document.getElementById('n3')
let campoNota4 = document.getElementById('n4')
let campoMedia = document.getElementById('media')
let campoSituacao = document.getElementById('situacao')
let campoFormulario = document.getElementById('form')
let campoSpanNota1 = document.getElementById('erro-n1')
let campoSpanNota2 = document.getElementById('erro-n2')
let campoSpanNota3 = document.getElementById('erro-n3')
let campoSpanNota4 = document.getElementById('erro-n4')


const situacaoAluno = (media)=>{
    if(media >= 7){
        campoSituacao.value = "Aprovado"
        campoSituacao.style.backgroundColor = "green"
        campoSituacao.style.color = "white"
    } else if(media >= 4){
        campoSituacao.value = "Recuperação"
        campoSituacao.style.backgroundColor = "yellow"
        campoSituacao.style.color = "black"
    } else{
        campoSituacao.value = "Reprovado"
        campoSituacao.style.backgroundColor = "red"
        campoSituacao.style.color = "white"
        
    }
}

function calcularMedia(){
    let n1 = Number(campoNota1.value)
    let n2 = Number(campoNota2.value)
    let n3 = Number(campoNota3.value)
    let n4 = Number(campoNota4.value)

    if(n1 < 0 || n1 > 10 || n1 == "" ){
        campoNota1.style.border = "3px solid red"
        campoSpanNota1.innerText = "Campo invalido"
        campoNota1.focus()
    } else if((n2 < 0 || n2 > 10 || n2 == "" )){
        campoSpanNota2.innerText = "Campo invalido"
        campoNota2.style.border = "3px solid red"
        campoNota2.focus()
    }else if((n3 < 0 || n3 > 10 || n3 == "" )){
        campoSpanNota3.innerText = "Campo invalido"
        campoNota3.style.border = "3px solid red"
        campoNota3.focus()
    }else if((n4 < 0 || n4 > 10 || n4 == "" )){
        campoSpanNota4.innerText = "Campo invalido"
        campoNota4.style.border = "3px solid red"
        campoNota4.focus()
    } else{

        campoSpanNota1.innerText = ""
        campoSpanNota2.innerText = ""
        campoSpanNota3.innerText = ""
        campoSpanNota4.innerText = ""

        campoNota1.style.border = "none"
        campoNota2.style.border = "none"
        campoNota3.style.border = "none"
        campoNota4.style.border = "none"
        

        let notas = [n1, n2,n3,n4]

        let media = (n1 + n2 + n3 + n4) / notas.length

        campoMedia.value = media

        situacaoAluno(media)

        campoNota1.value = ""
        campoNota2.value = ""
        campoNota3.value = ""
        campoNota4.value = ""

        campoNota1.focus()
        }
    
    

}

 

// campoFormulario.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     let n1 = Number(campoNota1.value)
//     let n2 = Number(campoNota2.value)
//     let n3 = Number(campoNota3.value)
//     let n4 = Number(campoNota4.value)

//     let notas = [n1, n2,n3,n4]

//     let media = (n1 + n2 + n3 + n4) / notas.length

//     campoMedia.value = media

//     if(media >= 7){
//         campoSituacao.value = "Aprovado"
//         campoSituacao.style.backgroundColor = "green"
//         campoSituacao.style.color = "white"
//     } else if(media >= 4){
//         campoSituacao.value = "Recuperação"
//         campoSituacao.style.backgroundColor = "yellow"
//         // campoSituacao.style.color = "black"
//     } else{
//         campoSituacao.value = "Reprovado"
//         campoSituacao.style.backgroundColor = "red"
//         campoSituacao.style.color = "white"
        
//     }
// })




