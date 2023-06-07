/*/
EXPRESSOES DE HORAS

EXPRESSAO PARA COMPUTAR NA UFCG (tripulantes)  - MAXIMO: 40h
HG=(TP*40)/6

onde:
HG= horas ganhas
TP = tempo passado na empresa (em meses)

e pra saber TP:
TP=M-(F/6)

onde:
M= meses que cumpriu
F= faltas (tanto de RG quanto de modulo)

EXPRESSAO PARA COLOCAR NO CERTIFICADO (tripulantes) - MAXIMO: 80h
HG=(TP*80)/6

onde:
HG= horas ganhas
TP = tempo passado na empresa (em meses)

e pra saber TP:
TP=M-(F/6)

onde:
M= meses que cumpriu
F= faltas (tanto de RG quanto de modulo)

EXPRESSAO PARA LIDERES (tanto UFCG quanto certificado) - MAXIMO: 80h
HG=TP*10

onde:
HG= horas ganhas
TP = tempo passado na empresa (em meses)

e pra saber TP:
TP=M-(F/8)

onde:
M= meses que cumpriu
F= faltas (tanto de RG/de ponte quanto de modulo)

nota: arredondar é opcional pra quem ta calculando
/*/

let faltas = document.querySelector('[name="faltas"]')
let mesesTotais = document.querySelector('[name="mesesTotais"]')
let botaoCalcular = document.querySelector('button')
let areaResultado = document.querySelector('.resultado')
let modo = document.querySelector('#modo')

function calculoCargaHoraria(modo, mesesTotais, faltas){
    let horasMax = modo == "COMPUTAR NA UFCG (tripulantes)" ? 40:80
    let mesesMinimo = (modo == "COMPUTAR NA UFCG (tripulantes)" || modo == "COLOCAR NO CERTIFICADO (tripulantes)") ? 6:8 // VERIFICA O MODO SELECIONADO, DECIDINDO O VALOR DE MESESMINIMO
    let TP = mesesTotais - (faltas/mesesMinimo)
    let HG = modo == "LIDERES (tanto UFCG quanto certificado)" ? TP*10 : (modo == "COMPUTAR NA UFCG (tripulantes)" ? TP*40/6 : TP*80/6) // VERIFICA O MODO ESCOLHIDO E, DE ACORDO COM O ESCOLHIDO, DETERMINA A FORMA DE CALCULAR HG
    HG = HG > horasMax ? horasMax : HG
    return Math.round(HG * 10) / 10
}

botaoCalcular.addEventListener('click', ()=> {
    let HG = calculoCargaHoraria(modo.value, mesesTotais.value, faltas.value)
    areaResultado.innerHTML = HG + ' horas' // mostra o resultado
    
})