function generatePassword() {
    const length = document.getElementById('length').value;
    const characterTypes = [];

    if (document.getElementById('digits').checked) {
        characterTypes.push(...'0123456789');
    }

    if (document.getElementById('letters').checked) {
        characterTypes.push(...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (document.getElementById('special').checked) {
        characterTypes.push(...'!@#$%^&*()_-+=<>?');
    }

    if (characterTypes.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterTypes.length);
        password += characterTypes[randomIndex];
    }

    document.getElementById('password').textContent = password;
    document.getElementById('passwordResult').style.display = 'block';
}
