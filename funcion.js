var titulo = '';
var totalDatos = 0;
function buscarTitulo(url) {
    var detalles = "";
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)

            data.Search.forEach(movie => {
                detalles += "<tr>" +
                    "<td><img width='150' height='200' src=" + movie.Poster + "></td>" +
                    "<td>" + movie.Title + "</td>" +
                    "<td>" + movie.Year + "</td>" +
                    "<td>" + movie.Type + "</td>" +
                    "<td><a href='#datos' onclick=\"buscarPorId('" + movie.imdbID + "')\">Mas detalles" +
                    "</tr>";

            });
            totalDatos=Math.round(data.totalResults/10);
            
            document.getElementById("informacion").innerHTML = detalles;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

}



function llamarFuncion() {
    index = 1;
    titulo = document.getElementById("titulo").value;
    let url = "http://www.omdbapi.com/?apikey=3b38b5cc&s=" + titulo + "&plot=full";
    buscarTitulo(url);
  
     
}

    function buscarPorId(id) {
        var contenido = "";

        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microssoft.XMLHTTP")
        }
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText)

                contenido += `<table>
                    <thead>
                        <tr>
                          
                            <th width="10%" style="background-color: rgb(144, 188, 255);">POSTER</th>
                            <th width="10%" style="background-color: rgb(144, 188, 255);"> TITULO</th>
                            <th width="80%" style="background-color: rgb(144, 188, 255);">INFORMACION</th>
                
     
        
                        </tr>
                    </thead>
                    <tbody id="info">
                    <tr> 
                    <td> <img width='100' height='150' src=  ${data.Poster != 'N/A' ? data.Poster : "imagenes/foto.png"} ></td>
                    <td> ${data.Title != 'N/A' ? data.Title : "No hay informacion"} </td>
                    <td><dl class='dl-horizontal'>
                    <dt>Genero: ${data.Genre != 'N/A' ? data.Genre : "No hay informacion"}</dt>
                    <dt>Año: ${data.Year != 'N/A' ? data.Year : "No hay informacion"}</dt>
                    <dt>Duracion: ${data.Runtime != 'N/A' ? data.Runtime : "No hay informacion"} </dt>
                    <dt>Idioma: ${data.Language != 'N/A' ? data.Language : "No hay informacion"}</dt>
                    <dt>Actores: ${data.Actors != 'N/A' ? data.Actors : "No hay informacion"}</dt>
                    <dt>Premios: ${data.Awards != 'N/A' ? data.Awards : "No hay informacion"}</dt>
                    <dt>Resumen: ${data.Plot != 'N/A' ? data.Plot : "No hay informacion"}</dt>
                    <dt>Produccion: ${data.Production != 'N/A' ? data.Production : "No hay informacion"}</dt>
                   
                    </dl></td>
                    </tr>
                   
                                    
                    
                    </tbody>
    
                </table>
                <div style="width: 100%; padding: 10px 20px 20px 10px;"><a style="font-size: 20px; background-color: rgb(95, 158, 252); padding: 10px;"  href='#'   onclick=\"llamarFuncion()\">Inicio</a></div>`


                document.getElementById("datos").innerHTML = contenido;
                //  document.getElementById("paginacion").style.display="none";
            }
        }
        xmlhttp.open("GET", "http://www.omdbapi.com/?apikey=3b38b5cc&i=" + id + "&plot=full", true);
        xmlhttp.send();
    }
    var index = 1;


    function cambiar(valor) {
        index = valor + index;
        console.log(index)
        if (index === 0) {
            index = 1;
        }else if(index === totalDatos ){
            index =1;
        }
        let url = "http://www.omdbapi.com/?apikey=3b38b5cc&s=" + titulo + "&page=" + index;
        buscarTitulo(url);

    }



