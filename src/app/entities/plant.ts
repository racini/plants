export class Plant {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  altura_maxima: number;
  climas: string;
  sustrato_siembra: string;

  constructor(id: number, nombre_comun: string,
              nombre_cientifico: string, tipo: string,
              altura_maxima: number, climas: string,
              sustrato_siembra: string) {
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.altura_maxima = altura_maxima;
    this.climas = climas;
    this.sustrato_siembra = sustrato_siembra;
  }

}
