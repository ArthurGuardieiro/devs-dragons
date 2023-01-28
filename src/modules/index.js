import { PersonagemView } from "../components/personagem-view.js";
import { Mago } from "./mago.js";
import { Arqueiro } from "./arqueiro.js";
import { ArqueiroMago } from "./arqueiro-mago.js";
import { Guerreiro } from "./guerreiro.js";


const magoArthur = new Mago('Arthur', 5, 'Fogo', 5, 5);
const magaJulia = new Mago('Julia', 3, 'Raio', 3, 3);
const arqueiroDudu = new Arqueiro('Dudu', 3, 4);
const arqueiroMagoChico = new ArqueiroMago('Chico', 8, 7, 'ar', 6, 6);
const guerreiroGuardieiro = new Guerreiro('Guardieiro', 10);

const personagens = [magoArthur, magaJulia, arqueiroDudu, arqueiroMagoChico, guerreiroGuardieiro];

new PersonagemView(personagens).render();

