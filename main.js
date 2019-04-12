//Get the color on startup

var retColor = JSON.parse(localStorage.getItem("color"));
var els = document.getElementsByName("colored");
console.log(els);
setTimeout(function() {
 els.forEach(function(e) {
    e.setAttribute("style", "background-color: "+ retColor + ";");
    document.getElementById("color-picker").setAttribute("value", retColor);
})   
}, 1)



function debuggingTool() {
    this.write = function(txt) {
        var parent = document.getElementById("log");
        
        var el = document.createElement("div");
        el.setAttribute("id", "log-element");
        el.setAttribute("class", "log-element");
         var p = document.createElement("p");
         p.innerHTML = txt;

         var items = document.getElementsByClassName("log-element");

         if(items) {
            var l = items.length;
            if(l % 2 == 0) {
              //  p.setAttribute("style", "background-color: rgb(230,230,230);");
            } else {
                var col = document.getElementById("color-picker").value;

                p.setAttribute("style", "background-color:" + col + ";");
                p.setAttribute("name", "colored");




                  }
                }



         el.appendChild(p);

         parent.appendChild(el);

    }
}


const teller = new debuggingTool();



document.getElementById("color-picker").addEventListener("input", function() {
    var cols = document.getElementsByName("colored");
    var col = document.getElementById("color-picker").value;
    cols.forEach(function(e) {
        e.setAttribute("style", "background-color: " + col + ";");
    })



    //Write to memory

    localStorage.setItem("color", JSON.stringify(col));

})

