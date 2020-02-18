class Nombre {
  /**
   *
   * @param {string} nombre Nombre de la persona
   * @param {string} apellidoPat Apellido paterno de la persona
   * @param {string} apellidoMat Apellido materno de la persona
   */

  constructor(nombre, apellidoPat, apellidoMat) {
    this.nombre = nombre;
    this.apellidoPaterno = apellidoPat;
    this.apellidoMaterno = apellidoMat;
  }

  getNombreCompleto() {
      return this.nombre
  }

  getApellidoNombre() {}

  getIniciales() {}
}

var nombre1 = new Nombre("Alberto", "Rosales", "González");
