/*Lógica: O agente monitoriza o valor
contínuo do sensor de temperatura e decide
se ativa os motores de refrigeração. */

const temperaturaAlvo = 22;
const temperaturaAtual = 25; // Percepção do sensor

//Regra Racional
if(temperaturaAtual > temperaturaAlvo){
    console.log("[Atuador]: Ligar motor para RESFRIAR");
} else {
    console.log("[Atuador]: DESLIGAR motor, temperatura ideal atingida");
}