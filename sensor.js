/* Lógica: O Sensor de Luz Noturna
A variável simula a percepção obtida pelo
sensor óptico e a estrutura condicional dita
a ação do atuador físico.*/

//Percepção (Ambiente: "escuro" ou "claro")
const ambiente = "escuro";

//Regra Racional (Tomada de decisão)
if (ambiente === "escuro"){
    console.log("[Atuador] : Lâmpada ACESA");
} else {
    console.log("[Atuador] : Lâmpada APAGADA");
}