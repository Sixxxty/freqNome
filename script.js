const form = document.querySelector(".formulario")
const nome = document.getElementById('nome')
const anos = document.getElementById('lista-anos')


form.addEventListener('submit', e => {
    let objSelected = {}
    const anoSelecionado = anos.options[anos.selectedIndex].value
    fetch(`https://servicodados.ibge.gov.br/api/v2/censos/nomes/${nome.value}`, {
        method: 'GET',
        headers: {'Content-Type': "application/json" }
    }).then(data => data.json()).then(data => {
        data[0].res.forEach((v, i) => {
            if(v.periodo.replace(',', '-') == anoSelecionado) objSelected = data[0].res[i]
        })
        alert(`Olá ${nome.value} no periodo ${objSelected.periodo} a frequencia de seu nome foi ${objSelected.frequencia}`)

        }
         
    )

        e.preventDefault()
})