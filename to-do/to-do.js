const fs = require('fs')
let colors = require('colors');


let listaToDo;

// FUNCION PARA OBTENER LA LISTA, ES COMO UN LLAMADO A LA BASE DE DATOS
const getLista = ()=>{
    
    try {

        listaToDo = require('../db/data.json')
        
    } catch (error) {
        listaToDo = []
    }

}

let guardarDB = () =>{
    fs.writeFile('./db/data.json', JSON.stringify(listaToDo),(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      })
}

// FUNCION PARA CREAR UNA TAREA POR HACER O TO DO
const crear = (descripcion) => {

    getLista();

    let toDo = {
        descripcion,
        completado : false
    }

    
    listaToDo.push(toDo);

    guardarDB();
   

    return toDo;
}



// FUNCION PARA LISTAR TODAS LAS TAREAS
const listar = ()=>{
    getLista();
    let isComplet= (args)=>{
        if(!args || args ==='false')
            return colors.red(args);
        return colors.green(args)
    }
    console.log('\n \n \n========= Este es el listado de las tareas =========\n'.green );
    listaToDo.map( i => {
        console.log(`La tarea es: ${colors.brightMagenta(i.descripcion)} y El estado de la tarea es: ${isComplet(i.completado)}`)
        console.log(``)
    })
}

// FUNCION DE ACTUALIZAR TAREA
const actualizar = (cadena, estado) => {
    getLista()
    let indice = listaToDo.findIndex((tarea)=> tarea.descripcion === cadena)
    if(indice>=0){
        listaToDo[indice].completado = estado
        guardarDB();
        console.log('ACTUALIZADO CON EXITO');
    }else{
        console.log('Error hubo uno');
    }
}

const eliminar = (cadena) =>{
    getLista();
    let indice = listaToDo.findIndex((tarea)=> tarea.descripcion === cadena)
    if(indice>=0){
        listaToDo.splice(indice,1);
        guardarDB();
        console.log('TAREA ELIMINADA CON EXITO');
    }else{
        console.log('Error hubo uno');
    }
}



module.exports={
    crear,
    listar,
    actualizar,
    eliminar
}