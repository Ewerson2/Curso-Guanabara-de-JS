function Tabuada(){
    var numero = window.document.getElementById('numero')
    var sel = window.document.getElementById('seltab')
  if(numero.value.length == 0){
  window.alert('Por favor digite um número!')
    }else {
        var numero = Number(numero.value)
        let c = 1
        sel.innerHTML = ''
        while (c <= 10){
        let item = document.createElement('option')
        item.text = `${numero} x ${c} = ${numero*c}`
        item.value = `sel ${c}`
        sel.appendChild(item)
        c++
    }
    }
   

}
