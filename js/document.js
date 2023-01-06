//ejemplo cafeteria de algortio utilizando ciclo
let inicio = parseInt(prompt (`bienvenido, desea realizar alguna accion antes de ingresar a la pagina presione :
1 para reservar work & coffe en el dia de HOY 
2 para ver las profesiones con descuento
3 - para calcular descuento de su cafe`))

switch (inicio){
   case "1":
      do{
         let cantidadInvitados= prompt("indique cuantos integrantes son para realizar la reserva porfavor ")
         while(isNaN(cantidadInvitados)){
            cantidadInvitados=parseInt(prompt("ingrese cantidad de invitados de manera NUMERICA"));
      
         }
         if( cantidadInvitados <= 5){
            let nombre=prompt("indique su  nombre y apellido")
           let  horario = prompt("indique horario")
        while(isNaN(horario)){
           horario=parseInt(prompt("ingrese horario en formato NUMERICO"));
  
        }

      for (let i= 1 ; i <= cantidadInvitados ; i ++){
               let  dato= prompt(`ingrese edad de cada integrante  ${i}`)
                 if (dato <= 18 ){
                  alert ( " le hacemos la aclaracion que menores de 18 no deberian consumir cafeina")
                }
               }
      alert(`${nombre} su reserva en el horario de ${horario} a sido realizada con exito`)
      
       } else if ( cantidadInvitados > 6 && cantidadInvitados <= 10){
         alert(` las mesas para ${cantidadInvitados} son muy solicitadas, porfavor  comuniquese al wp para saber disponibilidad con certeza`)

       }else if (cantidadInvitados >10){ alert("supera la cantidad de invitados autorizados")}
        else{
         alert("si tiene dificultades para realizar la reserva comuniquese al wp ")
         }
preguntaFinal= prompt("finalizo su reserva?presione ESC para saliar")
}while (preguntaFinal != "ESC")

break;
   
   case "2":
let salir
do{
   alert("los cupones con descuentos son para los siguientes profesionales: equipo de salud, policia,  maestro, estudiante y ejecutivo")
   let descuento=prompt("ingrese su profesion")
     if ((descuento === "equipo de salud") || (descuento=== "policia" )){
        let nombre = prompt("ingrese su nombre")
        alert (`${nombre} usted tiene un 60% de descuento en nuestros desayunos y meriendas`)
     } else if ( (descuento === "maestro") || (descuento === "estudiante")){
      let nombre = prompt("ingrese su nombre")
      alert (`${nombre} usted tiene un 40% de descuento en nuestros desayunos y meriendas`)
     } else if ( descuento === "ejecutivo"){
      let nombre = prompt("ingrese su nombre")
      alert (`${nombre} usted tiene un 20% de descuento en nuestros desayunos y meriendas`)
     }else{
      alert("disculpe su profesion no posee descuento")
     }

   salir = prompt("presione ESC para salir")

}while (salir.toUpperCase() !="ESC")
break;
case "3":
   alert(" el descuento del dia es de 10% en base al costo del cafe")
   let descuentoDia = 10
   let precioIngresado = prompt ("ingrese costo del cafe para calcular descuento del 10%")
   let total = precioIngresado / descuentoDia
   alert ( `su descuento es de $ ${total} pesos argentinos`)
break;
default:
   alert("debera elegir una opcion o presionar ESC")
}
