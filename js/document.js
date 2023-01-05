//funciones
function fechaHora(){
    let nombre=prompt("indique su  nombre y apellido")
    let  fecha = prompt("indique horario")
    while(isNaN(fecha)){
        fecha=parseInt(prompt("ingrese fecha en formato NUMERICO"));
  
     }
    let  cantidadInvitados= prompt(" cuantos invitados son ?")
    while(isNaN(cantidadInvitados)){
        cantidadInvitados=parseInt(prompt("ingrese cantidad de invitados de manera NUMERICA"));
  
     }
      if( cantidadInvitados <= 5){
            alert(` ${nombre} su reserva para ${fecha} fue realizada con exito ` )
   } else{ alert("supera la cantidad de invitados autorizados")}
 } 

 function preguntaReservaFinal(){
    preguntaFinal= prompt("busca otra reserva ?") 
    switch (preguntaFinal.toLowerCase()){
         case "no":
          preguntaFinal = prompt( "presione ESC para salir")
          break;
       case "si":
          alert ("recuerde que no puede tener dos reservas a su nombre, en ese caso,ambas seran dadas de baja")
          fechaHora()
          break;
       default :
       alert ("presione ESC para salir")
    }
 }

//bucle


let reserva = prompt ("desea reservar lugar para el dia de hoy para el salon de  work and coffe?")
if ( reserva.toLowerCase()== "si"){
        fechaHora()
   alert("gracias por reservar!") 
   preguntaFinal= prompt("finalizo su reserva?presione ESC para saliar")
while (preguntaFinal != "ESC"){
  preguntaReservaFinal()
}
} else{ alert("continue mirando")}