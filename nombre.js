class Nombre {
  /**
   *
   * @param {string} nombre Nombre de la persona
   * @param {string} apellidoPat Apellido paterno de la persona
   * @param {string} apellidoMat Apellido materno de la persona
   */

  constructor(nombre, apellidoPat, apellidoMat) {
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPat
    this.apellidoMaterno = apellidoMat;
  }

  getNombreCompleto() {
    return `Nombre Completo: ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`
  }

  getApellidoNombre() {}

  getIniciales() {}
}

var nombre1 = new Nombre("Alberto", "Rosales", "González");

console.log(nombre1.getNombreCompleto());
