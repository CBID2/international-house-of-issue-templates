
const reader = new FileReader();

const generateBtn = document.getElementById('generate');
const fileArYal = "../src/templates/yaml/template-ar.yaml"
const fileArMd = "../src/templates/markdown/template-ar.md"
const fileEnYal = "../src/templates/yaml/template-en.yaml"
const fileEnMd = "../src/templates/markdown/template-en.md"
const fileFrYal = "../src/templates/yaml/template-fr.yaml"
const fileFrMd = "../src/templates/markdown/template-fr.md"
const fileEsYal = "../src/templates/yaml/template-es.yaml"
const fileEsMd = "../src/templates/markdown/template-es.md"

// fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });

reader.readAsText(fileArYal);

console.log(generateBtn)
generateBtn.addEventListener('click', () => {
    console.log('Button clicked');
})

