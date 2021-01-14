const argv = require('yargs')
            .command('crear', 'Crearemos un elemento por hacer',{
                descripcion:{
                    demand : true, // DEMAND es decir OBLIGATORIO
                    alias : 'd',
                    desc : "Creamos la tarea por hacer con su descripcion"
                   
                }
            })
            .command('actualizar', 'Actualizaremos el estado completado de una tarea',{
                descripcion: {
                    alias : 'd',
                    demand : true, // DEMAND es decir OBLIGATORIO
                    desc : "Actualizamos la tarea como completado o pendiente",
                    completado : {
                        alias : 'c',
                        default : true
                    }
                }
            })
            .command('eliminar', 'Borra una tarea con la misma descripcion',{
                descripcion: {
                    alias : 'd',
                    demand : true, // DEMAND es decir OBLIGATORIO
                    desc : "Actualizamos la tarea como completado o pendiente",
                  
                }
            })
            .command('listar', 'Lista todas las tareas',{
                
                
            })
            .help()
            .argv

module.exports= {
    argv
}