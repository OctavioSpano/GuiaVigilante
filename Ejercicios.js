let Alumnos = [
    {
        nombre: "octavio",
        apellido: "spano",
        dni: 47128101,
        anio: 4,
        curso: "A",
        nota: 10,
    },

    {
        nombre: "nicolas",
        apellido: "umansky",
        dni: 46123456,
        anio: 4,
        curso: "A",
        nota: 7,
    },

    {
        nombre: "lucas",
        apellido: "levy",
        dni: 45332223,
        anio: 5,
        curso: "A",
        nota: 8,
    },

    {
        nombre: "lucas",
        apellido: "nepomnsechi",
        dni: 47014216,
        anio: 5,
        curso: "A",
        nota: 3,
    },

    {
        nombre: "ignacio",
        apellido: "vigilante",
        dni: 45337632,
        anio: 4,
        curso: "B",
        nota: 9,
    },

    {
        nombre: "manuel",
        apellido: "hernandez",
        dni: 45979100,
        anio: 4,
        curso: "B",
        nota: 4,
    },

    {
        nombre: "sofia",
        apellido: "carlo",
        dni: 47189089,
        anio: 3,
        curso: "B",
        nota: 1,
    },

    {
        nombre: "francesca",
        apellido: "rosa",
        dni: 46743256,
        anio: 3,
        curso: "B",
        nota: 10,
    },

];

//Ejercicio 2
const capitalizar = (str) => {
    MayuscWord = str[0].toUpperCase(); 
    RestoWord = str.slice(1);
    Word = MayuscWord + RestoWord;
    return Word;
}
console.log("Ejercicio 2");
console.log(capitalizar("ayer"));

//Ejercicio 3
const MostrarAlumno = (AlumnoIngresado) => {
    console.log(" DNI: " + AlumnoIngresado.dni.toString().slice(0, 2) + "." + AlumnoIngresado.dni.toString().slice(2, 5) + "." + AlumnoIngresado.dni.toString().slice(5) +"\n Nombre y apellido: " + AlumnoIngresado.nombre + " " + AlumnoIngresado.apellido +  "\n Curso: " + AlumnoIngresado.anio + "°" + AlumnoIngresado.curso + "\n Nota: " + AlumnoIngresado.nota);
};
console.log("Ejercicio 3");
MostrarAlumno(Alumnos[6]);

//Ejercicio 4
 Alumnos.map((e) =>{

    e.nombre= capitalizar(e.nombre); 
    e.apellido= capitalizar(e.apellido);
});     


//Ejercicio 5
console.log("Ejercicio 5");
let ShowAlumnos = Alumnos.map((e) => MostrarAlumno(e));


//Ejercicio 6
console.log("Ejercicio 6");
let alumnosAprobados = Alumnos.filter((e) => e.nota >= 6);
alumnosAprobados.map((y) => MostrarAlumno(y));

//Ejercicio 7
console.log("Ejercicio 7");
let alumnosCuarto = Alumnos.filter((e) => e.anio === 4);
alumnosCuarto.map((y) => MostrarAlumno(y));

//Ejercicio 8
console.log("Ejercicio 8");
let alumnosCursoB = Alumnos.filter((e) => e.curso === "B");
alumnosCursoB.map((y) => MostrarAlumno(y));