

let para = document.getElementsByClassName("paragraphe");
console.log(para);

for (i = 0; i < para.length; i++) {
    if (i === para.length - 1) {
        break;
    }
    if ((i % 2) === 0) {
        continue;
    }
    para[i].innerHTML = "paragraphe " + i;
}
