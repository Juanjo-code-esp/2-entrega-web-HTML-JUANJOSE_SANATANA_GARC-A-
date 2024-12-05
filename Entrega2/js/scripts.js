function updateDateTime() {
    const date = new Date();
    const formattedDate = date.toLocaleString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });
    document.getElementById('datetime').innerText = `Fecha y hora actual: ${formattedDate}`;
}

updateDateTime();
setInterval(updateDateTime, 1000);
