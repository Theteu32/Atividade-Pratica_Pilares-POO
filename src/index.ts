import { Camarote } from "./Cinema/Camarote";
import { Normal } from "./Cinema/Normal";
import { VIP } from "./Cinema/VIP";
import { Cachorro } from "./Fazenda/Cachorro";
import { Cavalo } from "./Fazenda/Cavalo";
import { Gato } from "./Fazenda/Gato";

const ingressoNormal = new Normal(10);

ingressoNormal.imprimeValor();

const ingressoVip = new VIP(10, 5);

ingressoVip.imprimeValor();

const ingressoCamarote = new Camarote(10, 10);

ingressoCamarote.imprimeValor();

// --------------------------------------------------------------------------------

import { Novo } from "./Imobiliaria/Novo";
import { Velho } from "./Imobiliaria/Velho";

const novoImovel = new Novo("Rua das Casinhas, 123", 150000, 10000);

novoImovel.acessarDados();

novoImovel.imprimirValor();

const velhoImovel = new Velho("Rua das Mansões, 321", 5000000, 100000);

velhoImovel.acessarDados();

velhoImovel.imprimirValor();

// ----------------------------------------------------------------------------------

const cachorro = new Cachorro("Rex", "guarda", "portão");

cachorro.verDadosDoAnimal();

cachorro.comer("ração");

cachorro.dormir();

cachorro.trabalhar();

const cavalo = new Cavalo("Thor", "carregador de carga", "campo");

cavalo.verDadosDoAnimal();

cavalo.comer("feno");

cavalo.dormir();

cavalo.trabalhar();

const gato = new Gato("Chico", "caçador", "celeiro");

gato.verDadosDoAnimal();

gato.comer("ração");

gato.dormir();

gato.trabalhar();
