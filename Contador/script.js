function contar() {
    let ini = document.getElementById('texti')
    let fim = document.getElementById('textf')
    let passo = document.getElementById('textp')
    let res = document.getElementById('res')

    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados')
        res.innerHTML = 'inpossivel contar' 
    }else{
        res.innerHTML = 'contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('passo invalido! considerando Passo igual a 1')
             p=1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
               res.innerHTML += ` ${c} \u{1F449}` 
            }//contagem crescente     
        }else{
            for( let c = i; c >= f; c-=p){
                res.innerHTML += ` ${c}\u{1f449}` 
            }//contagem regressiva
        }

        res.innerHTML += `\u{1f3c1}`
    }
    
}
