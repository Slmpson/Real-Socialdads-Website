const createHeader = () => {
    let header = document.querySelector('.headerScript');
    let nav = document.querySelector('.navScript')

    header.innerHTML = `
    <div class="clubLogo">
            <img src="./Resources/clublogo.png" alt="Club Logo">
        </div>
        <div class="heading">
            <h1>Real Socialdads FC</h1>
            <h3>South Woodham Ferrers 5-a-side team</h3>
        </div>
        <div class="sponsorLogo">
            <a href="https://www.greeneking.co.uk/">
               <img src="./Resources/greenekinglogo.png" alt="Sponsor Logo"> 
            </a>
        </div>
    </header>
    `;

    nav.innerHTML = `
    <nav>
        <div class="nav-container">
            <ul class="navbar">
                <li><a href="index.html">Home</a></li>
                <li><a href="matches.html">Fixtures & Results</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="stats.html">Statistics</a></li>
                <li><a href="chickenchat.html">Chicken Chat</a></li>
                <li><a href="quiz.html">Quiz</a></li>
                <li><a href="tactics.html">Rob's Tactics</a></li>
                <li><a href="signup.html">Sign up</a></li>
            </ul>
        </div>
    </nav>
    `;
    
    
}

createHeader();