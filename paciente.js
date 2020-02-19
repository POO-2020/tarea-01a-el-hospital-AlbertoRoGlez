import Nombre from "./nombre.js";
import FechaNacimiento from "./fecha-nacimiento.js";

class Paciente {
/**
 * 
 * @param {Nombre} nombre El nombre del paciente
 * @param {FechaNacimiento} fechaNacimiento La fecha de nacimiento del paciente
 * @param {string} telefono El telefono del paciente
 */

    constructor(nombre, fechaNacimiento, telefono) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.telefono = telefono;
    }
}