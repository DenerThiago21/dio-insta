let semaforo = [
    {
        id: 1,
        cor: 'verde',
        significado: 'siga'
    },
    {
        id: 2,
        cor: 'amarelo',
        significado: 'atencção'
    },
    {
        id: 3,
        cor: 'vermelho',
        significado: 'pare'
    }
]

function escolheCor (semaforo, cor) {
    for(let i = 0; i < semaforo.length; i++) {
        if(cor === semaforo[i].cor) {
            return semaforo[i].significado;
        }
    }
    return "cor não correspondente";
}

let significado = escolheCor(semaforo, "akjmarelo");
console.log(significado);
