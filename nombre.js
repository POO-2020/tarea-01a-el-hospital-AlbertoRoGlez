export default class Nombre {
  /**
   *
   * @param {string} nombre | Nombre del paciente
   * @param {string} apellidoPaterno | Apellido paterno del paciente
   * @param {string} apellidoMaterno | Apellido materno del paciente
   */

  constructor(nombre, apellidoPaterno, apellidoMaterno) {
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPaterno;
    this.apellidoMaterno = apellidoMaterno;
  }

  getNombreCompleto() {
    return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
  }

  getApellidoNombre() {
    return `${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`;
  }

  getIniciales() {
    return `${this.nombre.charAt(0)}${this.apellidoPaterno.charAt(
      0
    )}${this.apellidoMaterno.charAt(0)}`;
  }
}
