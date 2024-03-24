const generator = document.getElementById("generate");
const lang = document.getElementById("language-select");
const type = document.getElementById("file-type-select");


function getTemplate(file) {
    const template = document.getElementById("issueDescription");
    fetch(file)
        .then(response => {

            if (!response.ok) {
                throw new Error('Error : ' + response.status);
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            template.value = data;
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
        return "../frontend/assets/src/templates/markdown/template-fr.md";
    } else if (lang.value === "es" && type.value === "yaml") {
        return "../frontend/assets/src/templates/yaml/template-es.yaml";
    } else if (lang.value === "es" && type.value === "md") {
        return "../frontend/assets/src/templates/markdown/template-es.md";
    } else {
        return null
    }
}

generator.addEventListener("click", function (e) {
    e.preventDefault()

    const file = checkLangAnFile();
    if (file !== null) {

        getTemplate(file);
        lang.value = ""
        type.value = ""
        //window.location.href = "/frontend/pages/template.html";
    } else {
        alert("Please select a language and a file type")
    }


});


