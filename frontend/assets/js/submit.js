const fileArYal = "../frontend/assets/src/templates/yaml/template-ar.yaml"
const fileArMd = "../frontend/assets/src/templates/markdown/template-ar.md"
const fileEnYal = "../frontend/assets/src/templates/yaml/template-eng.yaml"
const fileEnMd = "../frontend/assets/src/templates/markdown/template-eng.md"
const fileFrYal = "../frontend/assets/src/templates/yaml/template-fr.yaml"
const fileFrMd = "../frontend/assets/src/templates/markdown/template-fr.md"
const fileEsYal = "../frontend/assets/src/templates/yaml/template-es.yaml"
const fileEsMd = "../frontend/assets/src/templates/markdown/template-es.md"
const generator = document.getElementById("generate");
const lang = document.getElementById("language-select");
const type = document.getElementById("file-type-select");


function getTemplate(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error : ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('error :', error);
        });
}

function checkLangAnFile() {
     if (lang.value === "ar" && type.value === "yaml") {
         return "../frontend/assets/src/templates/yaml/template-ar.yaml";
     } else if (lang.value === "ar" && type.value === "md") {
         return "../frontend/assets/src/templates/markdown/template-ar.md";
     } else if (lang.value === "en" && type.value === "yaml") {
         return "../frontend/assets/src/templates/yaml/template-eng.yaml";
     } else if (lang.value === "en" && type.value === "md") {
         return "../frontend/assets/src/templates/markdown/template-eng.md";
     } else if (lang.value === "fr" && type.value === "yaml") {
         return "../frontend/assets/src/templates/yaml/template-fr.yaml";
     } else if (lang.value === "fr" && type.value === "md") {
         return "../frontend/assets/src/templates/markdown/template-fr.yaml";
     } else if (lang.value === "sp" && type.value === "yaml") {
         return "../frontend/assets/src/templates/yaml/template-es.yaml";
     } else if (lang.value === "sp" && type.value === "md") {
         return "../frontend/assets/src/templates/markdown/template-es.md";
     }else{
        return null
     }
}

generator.addEventListener("click", function (e) {
    e.preventDefault()
    const file = checkLangAnFile();
    if(file !== null){
        console.log(lang.value);
        console.log(type.value);
        console.log(file);
        getTemplate(file);
    }
   

});

function submitForm() {
    const form = document.getElementById("form");
    form.submit();
}

