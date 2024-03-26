const generator = document.getElementById("generate");
const lang = document.getElementById("language-select");
const type = document.getElementById("file-type-select");
const template = document.getElementById("issueDescription");
const copyBtn = document.getElementById("copy-btn")
template.value = ""
const issueTemplate = document.querySelector(".issue-template")
const download = document.getElementById("download")
const downloadBtn = document.getElementById("download-btn")

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
            template.value = data;
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
function copyTemplate(){
    if (template.value) {
        template.select()
        template.setSelectionRange(0, 99999)

        navigator.clipboard.writeText(template.value)
        alert("Copied")
    }
}

generator.addEventListener("click",  (e) => {
    e.preventDefault()

    const file = checkLangAndFile();
    if (file !== null) {

        getTemplate(file);
        lang.value = ""
        type.value = ""
        download.href = file
        issueTemplate.style.display = "block"
        //window.location.href = "/frontend/pages/template.html";
    } else {
        alert("Please select a language and a file type")
    }


});

copyBtn.addEventListener("click", copyTemplate)

downloadBtn.addEventListener("click", () => {
    alert("Click \"Ok\" to download")
})

