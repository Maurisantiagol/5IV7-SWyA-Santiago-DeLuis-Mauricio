

var cesar = cesar || (function(){
  

    var doStaff = function(txt, desp, action){
        var replace = (function(){
            var abc = ['a','b','c','d','e','f','g','h','i','j','k',
                    'l','m','n','ñ','o','p','q','r','s','t','u',
                    'v','w','x','y','z'];
            var l = abc.length;

            return function(c){
                var i = abc.indexOf(c.toLowerCase());
                if (i != -1) {
                    var pos = i;
                    if (action) {
                        pos += desp;
                        pos = (pos >= l) ? pos-l : pos;                                
                    }else{
                        pos -= desp;
                        pos = (pos < 0) ? l+pos : pos;
                    }
                    return abc[pos];
                }
                return c;
            };
        })();

        var re = (/([a-z-ñÑ])/ig);
        return String(txt).replace(re, function(match){
            return replace(match);
        });
    };
    return{
        encode : function(txt, desp){
            return doStaff(txt, desp, true);
        },

        decode : function(txt, desp){
            return doStaff(txt, desp, false);
        }
    };
})();


function codificar(){
    camposVacios();
    var posi = Math.abs(parseInt(document.getElementById("posicionamiento").value));
    var res = cesar.encode(document.getElementById("cadena").value, (posi >= 27) ? posi%27 : posi );
    document.getElementById("res").innerText = res;
}

function decodificar(){
    var posi = Math.abs(parseInt(document.getElementById("posicionamiento").value));
    var res = cesar.decode(document.getElementById("cadena").value, (posi >= 27) ? posi%27 : posi );
    document.getElementById("res").innerText = res;
}

function camposVacios(){
    var cadena = document.getElementById("cadena").value;
    var posicionamiento = parseInt(document.getElementById("posicionamiento").value);
    if (cadena == "") {
        alert("Ingrese texto a codificar");
    }if (posicionamiento < 0) {
        alert("El numero negativo se tomara como positivo")
    }
}



function reiniciar(){
    document.getElementById("cadena").value = "";
    document.getElementById("posicionamiento").value = 0;
    document.getElementById("res").innerText = "";
}