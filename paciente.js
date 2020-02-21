import Fecha from "./fecha.js";
import Nombre from "./nombre.js";

export default class Paciente {
  /**
   *
   * @param {Nombre} nombre | Nombre del paciente
   * @param {Fecha} fechaNacimiento | Fecha en la que nació el paciente
   * @param {number} telefono | Número de teléfono del paciente
   */

  constructor(nombre, fechaNacimiento, telefono) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
    this.telefono = telefono;
  }

  getPerfil() {
    return `${this.nombre.getNombreCompleto()}, ${this.fechaNacimiento.getFecha()}, ${
      this.telefono
    }`;
  }
}
