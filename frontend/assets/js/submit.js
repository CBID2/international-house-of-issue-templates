const fileArYal = "../frontend/assets/src/templates/yaml/template-ar.yaml"
const fileArMd = "../frontend/assets/src/templates/markdown/template-ar.md"
const fileEnYal = "../frontend/assets/src/templates/yaml/template-en.yaml"
const fileEnMd = "../frontend/assets/src/templates/markdown/template-en.md"
const fileFrYal = "../frontend/assets/src/templates/yaml/template-fr.yaml"
const fileFrMd = "../frontend/assets/src/templates/markdown/template-fr.md"
const fileEsYal = "../frontend/assets/src/templates/yaml/template-es.yaml"
const fileEsMd = "../frontend/assets/src/templates/markdown/template-es.md"
const generator = document.getElementById("generator");
function getTemplate(file) {
    fetch()
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