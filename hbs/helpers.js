const fs = require('fs');
const hbs = require('hbs');
const { Client } = require('pg');
const connectionData = {user: 'postgres', host: 'localhost', database: 'ParaderoElViajero', password: 'aleks27lf', port: 5432}
const client = new Client(connectionData);

hbs.registerHelper('getProducts', function (){
    var pro = "";
    client.connect()
    client.query(`select * from producto where tipo_pro = 'Snacks';`).then(response => {
        //console.log(response.rows)
        for(var i = 0; i < response.rowCount; i++){
            pro += '<div class="menu-comidas-item">\n';
            pro += '<div class="img-plato">\n';
            pro += '<img src="'+response.rows[i].imagen_pro+'" alt="'+response.rows[i].nombre_pro+'" class="img-responsive">\n';
            pro += '</div>\n';
            pro += '<div class="desc-plato-menu">\n';
            pro += '<h4>'+response.rows[i].nombre_pro+'</h4>\n';
            pro += '<p class="precio-plato">$'+response.rows[i].precio_pro+'</p>\n';
            pro += '<p class="desc-plato">'+response.rows[i].descripcion_pro+'</p>\n';
            pro += '<br>\n';
            pro += '<button class="boton boton-color" ><img src="assets/imagenes/CartAdd.png" alt="" class="img-pequeño"> Ordenar </button>\n';
            pro += '</div>\n';
            pro += '<div class="limpiar"></div>\n';
            pro += '</div>\n'
        }  
        client.end();
        console.log(pro);
        return new hbs.SafeString(pro);
    })
});


/*
var rawdata = fs.readFileSync('public/assets/data/productos.json', 'utf8');
var productos = JSON.parse(rawdata);
//console.log(productos[0].nombre);

hbs.registerHelper("getProducts", function (){
    var pro = "";
    productos.forEach( objeto => {
        pro += '<div class="Products">';
        pro += '<img src="'+objeto.img+'">';
        pro += '<h2>'+objeto.nombre+'</h2>';
        pro += '<h2>'+objeto.color+'</h2>';
        pro += '<h3>'+objeto.precio+'</h3>';
        pro += '</div>'
    });    
    return new hbs.SafeString(pro);
});
*/