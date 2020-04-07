function buscarTitulo(){
    var titulo = document.getElementById("titulo").value;
    var detalles = "";
    if(titulo == ""){
        detalles = "<tr>" + "<td colspan='5'> No hay datos </td> " + "</tr>";
        document.getElementById("informacion").innerHTML = detalles;

    }else{
        if(window.XMLHttpRequest){
            xmlhttp = new XMLHttpRequest();
        }else{
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                var data = JSON.parse(this.responseText)
                console.log(data);
                data.Search.forEach(movie => {
                    detalles += "<tr>" +
                                "<td><img src=" + movie.Poster + "></td>" +
                                "<td>" + movie.Title + "</td>" +
                                "<td>" + movie.Year + "</td>" +
                                "<td>" + movie.Type + "</td>" +
                                 "<td><a href='#' onclick=\"buscarTitulo('" + movie.imdbID + "')\">Mas detalles" +
                                "</tr>";
                
                });
                document.getElementById("informacion").innerHTML = detalles;
            }
        };
        xmlhttp.open("GET","http://www.omdbapi.com/?apikey=3b38b5cc&s=" + titulo + "&plot=full", true);
        xmlhttp.send();
    }
    return false;

}