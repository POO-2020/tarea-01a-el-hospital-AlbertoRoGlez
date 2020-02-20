export default class Fecha {
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
    let month = this.diaMes[this.fecha.getMonth()];
    let month1 = this.fecha.getMonth() + 1;
    let year = this.fecha.getFullYear();
    return `${year}-${month1}-${date}`;
  }

  getFormatoExtendido() {
    let dia = this.diaSemana[this.fecha.getDay()];
    let numero = this.fecha.getDate();
    let mes = this.diaMes[this.fecha.getMonth()];
    let año = this.fecha.getFullYear();
    return dia, numero, "de", mes, "de", año;
  }

  getAños() {
    let año = this.fecha.getFullYear() - this.fecha2.getUTCFullYear();
    return año;
  }

  getMeses() {
    let año = this.fecha.getFullYear() - this.fecha2.getUTCFullYear();
    if (año > 0) {
      var mes = año * 12 + this.fecha.getMonth() - this.fecha2.getUTCMonth();
    } else {
      var mes = this.fecha.getMonth() - this.fecha2.getUTCMonth();
    }
    return mes;
  }

  getSemanas() {
    let año = this.fecha.getFullYear() - this.fecha2.getUTCFullYear();
    if (año > 0) {
      var mes = año * 12 + this.fecha.getMonth() - this.fecha2.getUTCMonth();
      var semanas = mes * 4
    } else if (año < 1) {
      var mes = this.fecha.getMonth() - this.fecha2.getUTCMonth();
      var semanas = mes * 4
      
    }if (semanas <= 0) {
        var semanas = (this.fecha.getDate() - this.fecha2.getUTCDate()) / 7
      }
    return Math.trunc(semanas);
  }

  getDias() {
    let año = this.fecha.getFullYear() - this.fecha2.getUTCFullYear();
    if (año > 0) {
      var mes = año * 12 + this.fecha.getMonth() - this.fecha2.getUTCMonth();
      var semanas = mes * 4
    } else if (año < 1) {
      var mes = this.fecha.getMonth() - this.fecha2.getUTCMonth();
      var semanas = mes * 4
      
    }if (semanas <= 0) {
        var semanas = (this.fecha.getDate() - this.fecha2.getUTCDate()) / 7
      }

    if (mes > 0) {
      let x = this.fecha - Date.now(); 
      let z = 1000 * 60 * 60 * 24;
      var dias = Math.trunc(x / z);

    } else {
      var dias = (this.fecha.getDate() - this.fecha2.getUTCDate())
    }
    return dias;
  }

  getFecha() {
    let date = this.fecha.getDate();
    let month = this.diaMes[this.fecha.getMonth()];
    let year = this.fecha.getFullYear();
    return `${date}/${month}/${year}`;
  }

  getDiaFecha() {
    let dia = this.diaSemana[this.fecha.getDay()];
    return dia;
  }
}
/*
let fecha1 = new Fecha(29, 2, 2030);
console.log(fecha1.getAños());
console.log(fecha1.getMeses());
console.log(fecha1.getSemanas());
console.log(fecha1.getDias());
console.log(fecha1.getFecha());
console.log(fecha1.getDiaFecha());
*/