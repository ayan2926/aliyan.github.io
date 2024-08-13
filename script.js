document.getElementById('photo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const photoUrl = document.getElementById('photo-url').value;
    const photoDescription = document.getElementById('photo-description').value;

    const photoGrid = document.querySelector('.photo-grid');
    const newPhoto = document.createElement('div');
    newPhoto.classList.add('photo-item');

    newPhoto.innerHTML = `
        <img src="${photoUrl}" alt="${photoDescription}">
        <p>${photoDescription}</p>
    `;

    photoGrid.appendChild(newPhoto);

    document.getElementById('photo-url').value = '';
    document.getElementById('photo-description').value = '';
});
