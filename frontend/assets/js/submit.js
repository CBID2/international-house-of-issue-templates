const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', () => {

    const language = document.getElementById('language-select').value;
    const type = document.getElementById('type-select').value;
    if (language === 'en' && type === 'md') {

    } else if (language === 'en' && type === 'yaml') {
    }
});