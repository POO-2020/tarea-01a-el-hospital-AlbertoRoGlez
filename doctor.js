import Nombre from "./nombre.js";

export default class Doctor {
  /**
   *
   * @param {Nombre} doctor
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */

  constructor(doctor, especialidad, telefono, cedula) {
    this.doctor = doctor;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.cedula = cedula;
  }

  getPerfil() {
    return `${this.cedula}, ${
      this.especialidad
    }, ${this.doctor.getNombreCompleto()}, ${this.telefono}`;
  }
}
