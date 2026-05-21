/* Agentes de Média Complexidade
Abordagem: Diferente dos agentes simples, 
este modelo utiliza uma flag booleana que atua 
como estado ou memória do sistema, permitindo 
reações baseadas no histórico do ciclo.
*/

const porcentagemBateria = 85;
const temperaturaCelsius = 38;

// Estado interno (Memória do agente)
const modoProtecaoTermicaAtivo = temperaturaCelsius > 45;
let statusCarregador;

if (modoProtecaoTermicaAtivo) {
    statusCarregador = "DESLIGADO (Prevenção de danos por superaquecimento)";
} else if (porcentagemBateria < 20) {
    statusCarregador = "Modo CARGA RÁPIDA (Corrente máxima de 5A)";
} else if (porcentagemBateria >= 20 && porcentagemBateria <= 80) {
    statusCarregador = "Modo CARGA NORMAL (Corrente estável de 2A)";
} else {
    statusCarregador = "Modo FLUTUAÇÃO / CARGA LENTA (0.5A para preservação)";
}

console.log(`[Gerenciador de Energia]: ${statusCarregador}`);
