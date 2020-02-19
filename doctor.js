class Doctor {
    /**
     * 
     * @param {string} nombre El nombre del doctor
     * @param {string} especialidad Especialidad del doctor
     * @param {string} telefono Telefono del doctor
     * @param {string} cedula Cedula profesional del doctor
     */

    constructor (nombre, especialidad, telefono, cedula) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }

    getPerfil() {

        return `${this.cedula} ${this.especialidad} ${this.nombre} ${this.telefono}`
    }
}
/*
let doctor1 = new Doctor("J. Felix Rosales González", "Médico cirugano del aparato digestivo", "312-106-0505", "12345678");
console.log(doctor1.getPerfil());
*/