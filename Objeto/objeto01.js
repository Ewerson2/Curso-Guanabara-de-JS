let amigo = {nome: 'Ewerson',
sexo: 'M',
peso: 90.0,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(0)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
