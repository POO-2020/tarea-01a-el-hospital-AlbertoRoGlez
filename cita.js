import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"

export default class Cita {
    /**
     * 
     * @param {Fecha} fecha la fecha de la cita
     * @param {Tiempo} hora la hora de la cita
     * @param {Doctor} doctor el doctor de la cita
     * @param {Paciente} paciente el paciente de la cita
     */
    constructor(fecha, hora, doctor, paciente) {
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }

    getCita() {
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${"Dr. " +
          this.doctor.doctor
            .apellidoPaterno}, ${this.paciente.nombre.getNombreCompleto()}`;
      }

}
