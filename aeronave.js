/* Agentes de Média Complexidade
 Abordagem: Este agente monitoriza múltiplos 
 sensores em simultâneo (altitude, vento e clima) e 
 utiliza operadores lógicos para tomar decisões 
 encadeadas de segurança.
*/

// Percepções (Dados de múltiplos sensores)
const altitudeAtual = 9500;
const velocidadeVento = 85;
const tempestadeAFrente = true;

let acaoAutodrive;

// Regra Racional Complexa
if (velocidadeVento > 100 || altitudeAtual < 3000) {
    acaoAutodrive = "ALERTA CRÍTICO: Desativando Piloto Automático. Humano, assuma o controle!";
} else if (tempestadeAFrente) {
    acaoAutodrive = "Rota alterada em 15 graus para desviar da tempestade detectada.";
} else {
    acaoAutodrive = `Voo estável. Mantendo altitude de ${altitudeAtual} metros.`;
}

console.log(`[Piloto Automático]: ${acaoAutodrive}`);
