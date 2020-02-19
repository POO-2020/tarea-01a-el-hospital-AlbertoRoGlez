import Nombre from "./nombre.js";

class Doctor {
  /**
   *
   * @param {Nombre} nombre El nombre del doctor
   * @param {string} especialidad Especialidad del doctor
   * @param {string} telefono Telefono del doctor
   * @param {string} cedula Cedula profesional del doctor
   */

  constructor(nombre, especialidad, telefono, cedula) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this.telefono = telefono;
    this.cedula = cedula;
  }

  getPerfil() {
    return `${this.cedula} ${this.especialidad} ${this.nombre.getNombreCompleto()} ${this.telefono}`;
  }
}
/*
let doctor1 = new Doctor(
  new Nombre("Felix", "Rosales", "González"),
  "Médico Cirugano",
  "312-106-0505",
  "12345678"
);

console.log(doctor1.getPerfil());
*/
