let aulas = [];

function adicionaAula(diaSemana, dia, horario) {
    aulas.push({
        diaSemana: diaSemana,
        dia: dia,
        horario: horario
    })
}

adicionaAula('Segunda', '05-07-2021', '19:30');
adicionaAula('Terça', '06-07-2021', '19:30');
adicionaAula('Quarta', '07-07-2021', '19:30');
adicionaAula('Quinta', '08-07-2021', '19:30');
adicionaAula('Sexta', '09-07-2021', '19:30');

console.log(aulas);