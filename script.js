const noBtn = document.getElementById('no-btn');

function revealMagic() {
    document.getElementById('headline').innerText = "Mischief Managed...";
    document.getElementById('activate-btn').classList.add('hidden');
    document.getElementById('secret-message').classList.remove('hidden');
}

function moveButton() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    const noBtn = document.getElementById('no-btn');
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function accepted() {
    const container = document.getElementById('map-container');
    // Clear the parchment
    container.innerHTML = `
        <h1 style="color: #740001;">Mischief Managed!</h1>
        <p>Ten points to Gryffindor!</p>
        <div id="bouquet" style="font-size: 3rem; margin-top: 20px;"></div>
    `;

    // Generate the numerical bouquet (12 roses for a dozen)
    const bouquetDiv = document.getElementById('bouquet');
    let roses = "";
    for (let i = 1; i <= 12; i++) {
        setTimeout(() => {
            roses += "🌹";
            bouquetDiv.innerHTML = roses;
            // Add a little spark effect
            if(i === 12) bouquetDiv.innerHTML += " ✨";
        }, i * 200); // Roses "bloom" one by one
    }
}