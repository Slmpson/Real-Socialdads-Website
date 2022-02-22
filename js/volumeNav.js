const createVolumeNav = () => {
    let volumeNav = document.querySelector(".volumeNavScript");

    volumeNav.innerHTML = `
    <div class="volume-container">
        <ul class="volume-nav">
            <li><a href="chickenchat_vol1.html">Volume 1</a></li>
            <li><a href="chickenchat_vol2.html">Volume 2</a></li>
            <li><a href="chickenchat_vol3.html">Volume 3</a></li>
            <li><a href="chickenchat_vol4.html">Volume 4</a></li>
            <li class="unavailable"><a href="chickenchat_vol5.html" class="unavailable">Volume 5</a></li>
            <li class="unavailable"><a href="chickenchat_vol6.html" class="unavailable">Volume 6</a></li>
            <li class="unavailable"><a href="chickenchat_vol7.html" class="unavailable">Volume 7</a></li>
            <li class="unavailable"><a href="chickenchat_vol8.html" class="unavailable">Volume 8</a></li>
            <li class="unavailable"><a href="chickenchat_vol9.html" class="unavailable">Volume 9</a></li>
        </ul>
    </div>
    `
}

createVolumeNav();