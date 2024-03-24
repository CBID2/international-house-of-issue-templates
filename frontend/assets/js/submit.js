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
            //template.value = data;
        })
        .catch(error => {
            console.error('error :', error);
        });
}

function checkLangAndFile() {
    if (lang.value && type.value) {
        return `../frontend/assets/src/templates/${type.value}/template-${lang.value}.${type.value}`;
    } else {
        return null
    }
}

generator.addEventListener("click", function (e) {
    e.preventDefault()

    const file = checkLangAndFile();
    if (file !== null) {

        getTemplate(file);
        lang.value = ""
        type.value = ""
        //window.location.href = "/frontend/pages/template.html";
    } else {
        alert("Please select a language and a file type")
    }


});


