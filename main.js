import Paciente from "./paciente.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Doctor from "./doctor.js";
import Nombre from "./nombre.js";
import Cita from ".//cita.js";
import Hospital from "./hospital.js";

class Main {
  constructor() {
    this.hospital = new Hospital("Hospital", "Puerta de Hierro");
  }

  agregarDoctor() {
    let doctor1 = new Doctor(
      new Nombre("J. Felix", "Rosales", "González"),
      "Cirujano",
      3121060505,
      12345678
    );
    let doctor2 = new Doctor(
      new Nombre("Everardo", "Torres", "Navarro"),
      "Oculista",
      3121262988,
      87654321
    );
    this.hospital.registrarDoctor(doctor1);
    this.hospital.registrarDoctor(doctor2);
    this.hospital.listarDoctores();
  }

  agregarCita() {
    let cita1 = new Cita(
      new Fecha(20, 3, 2020),
      new Tiempo(6, 0, "PM"),
      new Doctor(
        new Nombre("Everardo", "Torres", "Navarro"),
        "Oculista",
        3121262988,
      87654321
      ),
      new Paciente(
        new Nombre("Alberto", "Rosales", "González"),
        new Fecha(17, 2, 2001),
        3121324107
      )
    );
    this.hospital.registrarCita(cita1);
    this.hospital.listarCitas();
  }
}

let app = new Main();
app.agregarDoctor();
app.agregarCita();
