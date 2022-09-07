const tema = document.getElementById('tema')
tema.addEventListener('change', () => {
    document.body.classList.toggle('light')
})

const mapaTeclado = {
    0: 'tecla0',
    1: 'tecla1',
    2: 'tecla2',
    3: 'tecla3',
    4: 'tecla4',
    5: 'tecla5',
    6: 'tecla6',
    7: 'tecla7',
    8: 'tecla8',
    9: 'tecla9',
    '/': 'operadorDiv',
    'x': 'operadorMult',
    '-': 'operadorSubt',
    '+': 'operadorSoma',
    Enter: 'igual',
    Backspace: 'backspace',
    Escape: 'apagarTudo',
    ',': 'decimal',
};

const numeros = document.querySelectorAll('[id*=tecla]');
const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1; 
    if (teclaPermitida()) document.getElementById(mapaTeclado[tecla]).click(); 
};
document.addEventListener('keydown', mapearTeclado);

function inserir(num){
    var numero = document.getElementById('numero-display').innerHTML;
    document.getElementById('numero-display').innerHTML = numero + num;
}

function limparTudo(){
    document.getElementById('numero-display').innerHTML = "";
}

function apagarNumero(){
    var resultado = document.getElementById('numero-display').innerHTML;
    document.getElementById('numero-display').innerHTML = resultado.substring(0, resultado.length - 1);  
}

function calcular(){
    var resultado = document.getElementById('numero-display').innerHTML;
    if(resultado){
        document.getElementById('numero-display').innerHTML = eval(resultado)
    }else{
        window.alert('Erro! Digite um número')
    }
}


