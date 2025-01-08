document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    let fileInput = form.querySelector('input[type="file"]');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const file = fileInput.files[0];
        if (file) {
            const fileReader = new FileReader();
            fileReader.onload = () => {
                const link = document.createElement('a');
                link.href = fileReader.result;
                link.download = file.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            fileReader.readAsDataURL(file);
        } else {
            alert('Aucun fichier choisi!');
        }
    });
});
