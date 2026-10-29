console.log("Portfolio Alpha Diallo chargé");

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.opacity = "0.8";
    });

    link.addEventListener('mouseout', () => {
        link.style.opacity = "1";
    });
});