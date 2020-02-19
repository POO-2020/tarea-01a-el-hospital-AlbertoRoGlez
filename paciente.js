import Fecha from "./fecha.js/index.js"
import Nombre from "./nombre.js"

class Paciente {
  /**
   *
   * @param {Nombre} nombre El nombre del paciente
   * @param {Fecha} fechaNacimiento La fecha de nacimiento del paciente
   * @param {string} telefono El telefono del paciente
   */

  constructor(nombre, fechaNacimiento, telefono) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
  }

  getPerfil() {
    return `${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFormatoCorto()}, ${this.telefono}`;
  }
}

let paciente1 = new Paciente(
  new Nombre("Alberto", "Rosales", "González"),
  new Fecha(17, 2, 2001),
  "312-126-2988"
);
/*
console.log(paciente1.getPerfil());
*/