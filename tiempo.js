export default class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo am o pm
     */
    constructor (hora, minutos, periodo) {
        this.hora = hora;
        this.minutos = minutos;
        this.periodo = periodo;
    }

    getFormato12() {
        return `${this.hora}:${this.minutos} ${this.periodo}`;
      }
      getFormato24() {
        if (this.periodo == "pm") {
          return `${this.hora + 12}:${this.minutos}`;
        } else if (this.periodo == "am") {
          return `${this.hora}:${this.minutos}`;
        }
      }
}   /*
    let tiempo1 = new Tiempo (12, 30, "a.m")
    console.log(tiempo1.getFormato12());
    console.log(tiempo1.getFormato24());
    */