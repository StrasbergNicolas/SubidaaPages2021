
function mostrar_inputs() {
   let categoriaporcen=0;
   let alerta = document.getElementById("id-categoria").value;


   if (alerta=="Estudiante"){
    categoriaporcen=80;
}
else if (alerta=="Trainee") {
    categoriaporcen=50;
}
else {
    categoriaporcen=15;
}

    console.log(categoriaporcen);
    let sacardescuento=0;
    let descuentotal=0;
    let cantidadtotal=0;
    let cantidad = document.getElementById("id-cantidad").value;
    cantidadtotal=cantidad*200;
    console.log(cantidadtotal);
    sacardescuento = (cantidadtotal*categoriaporcen/100);
    descuentotal = (cantidadtotal-sacardescuento);
    console.log(descuentotal);
    let final = document.getElementById("valordecantidad").innerHTML = descuentotal;
    
}





