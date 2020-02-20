import Doctor from "./doctor.js"
import Paciente from "./paciente.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Nombre from "./nombre.js"

class Cita {
    /**
     * 
     * @param {Fecha} fecha la fecha de la cita
     * @param {Tiempo} hora la hora de la cita
     * @param {Nombre} doctor el doctor de la cita
     * @param {Nombre} paciente el paciente de la cita
     */
    constructor(fecha, hora, doctor, paciente) {
        this.fecha = fecha;
        this.hora = hora;
        this.doctor = doctor;
        this.paciente = paciente;
    }

    getCita() {
        this.fecha = new Fecha(15, 3, 2020)
        this.hora = new Tiempo(5,30, "pm")
        this.doctor = new Nombre("Dr. Felix", "Rosales", "González")
        this.paciente = new Nombre("Alberto", "Rosales", "González")
        return `${this.fecha.getFecha()}, ${this.hora.getFormato24()}, ${this.doctor.getNombreCompleto()}, ${this.paciente.getNombreCompleto()}`
    }

}

let app = new Cita
console.log(app.getCita())