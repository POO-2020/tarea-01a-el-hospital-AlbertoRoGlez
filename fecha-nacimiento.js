export default class FechaNacimiento {
  /**
   *
   * @param {number} dia valor 1...31
   * @param {number} mes valor 1...12
   * @param {number} año año de la fecha de nacimiento
   */
  constructor(dia, mes, año) {
    this.fecha = new Date(año, mes - 1, dia);
    this.diaSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado"
    ];
    this.diaMes = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    this.fecha2 = new Date();
  }

  getEdad() {
    let edad = this.fecha2.getUTCFullYear() - this.fecha.getFullYear();
    return `Edad de ${edad} años`;
  }
  getFormatoCorto() {
    let date = this.fecha.getDate();
    let month = this.fecha.getMonth() + 1;
    let year = this.fecha.getFullYear();
    return `${date}/${month}/${year}`;
  }

  getFormatoExtendido() {
    let dia = this.diaSemana[this.fecha.getDay()];
    let numero = this.fecha.getDate();
    let mes = this.diaMes[this.fecha.getMonth()];
    let año = this.fecha.getFullYear();
    return dia, numero, "de", mes, "de", año;
  }
}


var fecha1 = new FechaNacimiento(7,2,2000);

/*
console.log(fecha1.getFormatoCorto());
console.log(fecha1.getFormatoExtendido());
console.log(fecha1.getEdad());
*/
