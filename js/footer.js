const createFooter = () => {
    let footer = document.querySelector('.footerScript');

    footer.innerHTML = `
    <h5>&copy Copyright Real Socialdads Football Club</h5>
        <a href="mailto:chickenchat@btinternet.com" class="footer__link">chickenchat@btinternet.com</a>
        <ul class="social-list">
            <li class="social-list__item"><a href="#" class="social-list__link"><i class="fab fa-facebook"></i></i></a></li>
            <li class="social-list__item"><a href="#" class="social-list__link"><i class="fab fa-instagram"></i></a></li>
            <li class="social-list__item"><a href="#" class="social-list__link"><i class="fab fa-twitter"></i></a></li>
        </ul>
        <h6>Last Modified: 28/01/2022</h6>
    `;
}

createFooter();