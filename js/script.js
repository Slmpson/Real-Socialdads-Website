const lastModified = () => {
    const modified = document.lastModified;
    document.getElementById('lastModified').innerHTML = `Last updated ${modified}`;
}

lastModified();












