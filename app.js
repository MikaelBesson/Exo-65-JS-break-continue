

let elements = document.getElementsByClassName("paragraphe");

let i = 0;

    while (i<elements.length){
        let element =elements[i];
       element.innerHTML = "la variable i vaut " + i;
       console.log(element);
       i++;

    }


