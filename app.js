const argv = require('./config/yargs').argv
const toDo = require('./to-do/to-do')


 switch( argv._[0] ){
     case 'crear':
         console.log(toDo.crear(argv.d));
         break;
 
     case 'actualizar':
            console.log('Estamos actualizando una tarea...');
            toDo.actualizar(argv.d, argv.c );
          
            break;

     case 'listar':
         toDo.listar()
         break;

    case 'eliminar':
            toDo.eliminar(argv.d);
            break;

     default:
         console.log('Lo sentimos, ese comando no es reconocido');
 }

