/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

};

    


/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
});



ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



// JavaScript
// Add this to your existing JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    let skillsItems = document.querySelectorAll('ul li');

    skillsItems.forEach(item => {
        let progressBarContainer = item.querySelector('.progress-bar-container');
        let progressBar = progressBarContainer.querySelector('.progress-bar');
        let percentText = progressBarContainer.querySelector('.percent-text'); 
        let percentValue = item.getAttribute('data-percent');

        item.addEventListener('mouseenter', () => {
            progressBar.style.width = `${percentValue}%`;
            percentText.textContent = `${percentValue}%`; 
        });

        item.addEventListener('mouseleave', () => {
            progressBar.style.width = '0';
            percentText.textContent = ''; 
        });
    });
});

  




/*==================== typed js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Developpeur Web/Mobile','Data Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// custom js

// ...


function toggleVisibility() {
    var hiddenContent = document.getElementById("hiddenContent");
  
    
    if (hiddenContent.style.display === "none") {
    
      hiddenContent.style.display = "block";
    } else {
      
      hiddenContent.style.display = "none";
    }
}



let currentDashboardImageIndex = 0;
const dashboardImages = ["images/cp1.png", "images/cp2.png", "images/cp3.png", "images/cp4.png", "images/cp5.png", "images/cp6.png", "images/cp7.png", "images/cp9.png", "images/cp10.png", "images/cp11.png", "images/cp12.png", "images/cp13.png", "images/cp14.png"];


function openDashboardModal() {
    var dashboardModal = document.getElementById("dashboardModal");
    var dashboardModalImage = document.getElementById("dashboardModalImage");
    var prevDashboardButton = document.getElementById("prevDashboardButton");
    var nextDashboardButton = document.getElementById("nextDashboardButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDashboardImageIndex = 0;

    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];
    dashboardModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";

    prevDashboardButton.onclick = function() {
        showPreviousDashboardImage();
    };

    nextDashboardButton.onclick = function() {
        showNextDashboardImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";
    };

   
    dashboardModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === dashboardModal) {
            closeDashboardModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Dashboards
function showNextDashboardImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentDashboardImageIndex = (currentDashboardImageIndex + 1) % dashboardImages.length;

    var dashboardModalImage = document.getElementById("dashboardModalImage");
    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];

 
    var prevDashboardButton = document.getElementById("prevDashboardButton");
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Dashboards
function showPreviousDashboardImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentDashboardImageIndex = (currentDashboardImageIndex - 1 + dashboardImages.length) % dashboardImages.length;

    var dashboardModalImage = document.getElementById("dashboardModalImage");
    dashboardModalImage.src = dashboardImages[currentDashboardImageIndex];

    var prevDashboardButton = document.getElementById("prevDashboardButton");
    prevDashboardButton.style.display = currentDashboardImageIndex === 0 ? "none" : "block";

    var nextDashboardButton = document.getElementById("nextDashboardButton");
    nextDashboardButton.style.display = currentDashboardImageIndex === dashboardImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Dashboards
function closeDashboardModal() {
    var dashboardModal = document.getElementById("dashboardModal");
    dashboardModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}






let currentImageIndex = 0;
const images = ["images/rp1.png", "images/rp2.png", "images/rp3.png", "images/rp4.png", "images/rp5.png", "images/rp6.png", "images/rp7.png", "images/rp8.png", "images/rp9.png", "images/rp10.png", "images/rp11.png", "images/rp12.png", "images/rp13.png", "images/rp14.png"];

function openModal() {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var prevButton = document.getElementById("prevButton");
    var nextButton = document.getElementById("nextButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');


    currentImageIndex = 0;

    modalImage.src = images[currentImageIndex];
    modal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
    
    prevButton.onclick = function() {
        showPreviousImage();
    };
    
    nextButton.onclick = function() {
        showNextImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
    };

   
    modal.onclick = function(event) {
       
        if (event.target === modal) {
            closeModal();
        }
    };
}



// Fonction pour afficher la prochaine image
function showNextImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentImageIndex = (currentImageIndex + 1) % images.length;
  
    var modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";
}


// Fonction pour afficher l'image précédente
function showPreviousImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  
    var modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];

    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = currentImageIndex === 0 ? "none" : "block";

    var nextButton = document.getElementById("nextButton");
    nextButton.style.display = currentImageIndex === images.length - 1 ? "none" : "block";
}




function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');

}


let currentFunctionImageIndex = 0;
const functionImages = ["images/fp1.png", "images/fp2.png", "images/fp3.png", "images/fp4.png", "images/fp5.png", "images/fp6.png", "images/fp7.png", "images/fp8.png", "images/fp9.png", "images/fp10.png", "images/fp11.png", "images/fp12.png", "images/fp13.png", "images/fp14.png", "images/fp15.png", "images/fp16.png", "images/fp17.png", "images/fp18.png"];

// Github

// ...

// Fonction pour ouvrir la deuxième fenêtre modale
function openFunctionModal() {
    var functionModal = document.getElementById("functionImageModal");
    var functionModalImage = document.getElementById("functionModalImage");
    var prevFunctionButton = document.getElementById("prevFunctionButton");
    var nextFunctionButton = document.getElementById("nextFunctionButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentFunctionImageIndex = 0;

    functionModalImage.src = functionImages[currentFunctionImageIndex];
    functionModal.style.display = "block";

    // Vérifiez la taille de l'image avant d'appliquer les styles
    var img = new Image();
    img.src = functionImages[currentFunctionImageIndex];
    img.onload = function () {
        if (img.width > window.innerWidth * 0.5) {
            functionModalImage.style.maxWidth = "65%";
        } else {
            functionModalImage.style.maxWidth = "none";
        }
    };



    // Gérer l'affichage du bouton "Show Previous Image"
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";

    prevFunctionButton.onclick = function() {
        showPreviousFunctionImage();
    };

    nextFunctionButton.onclick = function() {
        showNextFunctionImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";
    };

};


// Fonction pour afficher la prochaine image de la deuxième fenêtre modale
function showNextFunctionImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentFunctionImageIndex = (currentFunctionImageIndex + 1) % functionImages.length;

    var functionModalImage = document.getElementById("functionModalImage");
    functionModalImage.src = functionImages[currentFunctionImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevFunctionButton = document.getElementById("prevFunctionButton");
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la deuxième fenêtre modale
function showPreviousFunctionImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentFunctionImageIndex = (currentFunctionImageIndex - 1 + functionImages.length) % functionImages.length;

    var functionModalImage = document.getElementById("functionModalImage");
    functionModalImage.src = functionImages[currentFunctionImageIndex];

    var prevFunctionButton = document.getElementById("prevFunctionButton");
    prevFunctionButton.style.display = currentFunctionImageIndex === 0 ? "none" : "block";

    var nextFunctionButton = document.getElementById("nextFunctionButton");
    nextFunctionButton.style.display = currentFunctionImageIndex === functionImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la deuxième fenêtre modale
function closeFunctionModal() {
    var functionModal = document.getElementById("functionImageModal");
    functionModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}

let currentPortfolioImageIndex = 0;
const portfolioImages = ["images/cp1.png", "images/cp2.png", "images/cp3.png", "images/cp4.png", "images/cp5.png", "images/cp6.png", "images/cp7.png", "images/cp9.png", "images/cp10.png", "images/cp11.png", "images/cp12.png", "images/cp13.png", "images/cp14.png"];

// ...

// Fonction pour ouvrir la fenêtre modale Portfolio
function openPortfolioModal() {
    var portfolioModal = document.getElementById("portfolioModal");
    var portfolioModalImage = document.getElementById("portfolioModalImage");
    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    var nextPortfolioButton = document.getElementById("nextPortfolioButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentPortfolioImageIndex = 0;

    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];
    portfolioModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";

    prevPortfolioButton.onclick = function() {
        showPreviousPortfolioImage();
    };

    nextPortfolioButton.onclick = function() {
        showNextPortfolioImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    portfolioModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === portfolioModal) {
            closePortfolioModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Portfolio
function showNextPortfolioImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentPortfolioImageIndex = (currentPortfolioImageIndex + 1) % portfolioImages.length;

    var portfolioModalImage = document.getElementById("portfolioModalImage");
    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Portfolio
function showPreviousPortfolioImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentPortfolioImageIndex = (currentPortfolioImageIndex - 1 + portfolioImages.length) % portfolioImages.length;

    var portfolioModalImage = document.getElementById("portfolioModalImage");
    portfolioModalImage.src = portfolioImages[currentPortfolioImageIndex];

    var prevPortfolioButton = document.getElementById("prevPortfolioButton");
    prevPortfolioButton.style.display = currentPortfolioImageIndex === 0 ? "none" : "block";

    var nextPortfolioButton = document.getElementById("nextPortfolioButton");
    nextPortfolioButton.style.display = currentPortfolioImageIndex === portfolioImages.length - 1 ? "none" : "block";
}

// Fonction pour fermer la fenêtre modale Portfolio
function closePortfolioModal() {
    var portfolioModal = document.getElementById("portfolioModal");
    portfolioModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}

let currentDashImageIndex = 0;
const DashImages = ["images/sp1.png", "images/sp2.png", "images/sp3.png", "images/sp4.png", "images/sp5.png" /* Ajoutez d'autres images ici */];

// ...

// Fonction pour ouvrir la fenêtre modale Portfolio
function openDashModal() {
    var DashModal = document.getElementById("DashModal");
    var DashModalImage = document.getElementById("DashModalImage");
    var prevDashButton = document.getElementById("prevDashButton");
    var nextDashButton = document.getElementById("nextDashButton");

    document.documentElement.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
    navbar.classList.add('modal-open');

    currentDashImageIndex = 0;

    DashModalImage.src = DashImages[currentDashImageIndex];
    DashModal.style.display = "block";

    // Gérer l'affichage du bouton "Show Previous Image"
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";

    // Gérer l'affichage du bouton "Show Next Image"
    nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";

    prevDashButton.onclick = function() {
        showPreviousDashImage();
    };

    nextDashButton.onclick = function() {
        showNextDashImage();

        // Mettre à jour la visibilité du bouton "Show Next Image" après le changement d'image
        nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";
    };

    // Ajoutez un événement de clic à la fenêtre modale
    DashModal.onclick = function(event) {
        // Si le clic est en dehors de l'image, fermez la modale
        if (event.target === DashModal) {
            closeDashModal();
        }
    };
}

// Fonction pour afficher la prochaine image de la fenêtre modale Portfolio
function showNextDashImage() {
    // Incrémente l'index pour afficher la prochaine image
    currentDashImageIndex = (currentDashImageIndex + 1) % DashImages.length;

    var DashModalImage = document.getElementById("DashModalImage");
    DashModalImage.src = DashImages[currentDashImageIndex];

    // Mettez à jour l'affichage du bouton précédent en fonction de l'index
    var prevDashButton = document.getElementById("prevDashButton");
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";
}

// Fonction pour afficher l'image précédente de la fenêtre modale Portfolio
function showPreviousDashImage() {
    // Décrémente l'index pour afficher l'image précédente
    currentDashImageIndex = (currentDashImageIndex - 1 + DashImages.length) % DashImages.length;

    var DashModalImage = document.getElementById("DashModalImage");
    DashModalImage.src = DashImages[currentDashImageIndex];

    var prevDashButton = document.getElementById("prevDashButton");
    prevDashButton.style.display = currentDashImageIndex === 0 ? "none" : "block";

    var nextDashButton = document.getElementById("nextDashButton");
    nextDashButton.style.display = currentDashImageIndex === DashImages.length - 1 ? "none" : "block";
}



// Fonction pour fermer la fenêtre modale Portfolio
function closeDashModal() {
    var DashModal = document.getElementById("DashModal");
    DashModal.style.display = "none";
    document.body.style.overflow = 'auto';
    navbar.classList.remove('modal-open');
}




document.onkeydown = function(event) {
    event = event || window.event;
    if (event.key === "Escape") {
      closeModal();
      closeFunctionModal();
      closeDashboardModal();
      closePortfolioModal();
      closeDashModal();
    }
};

function toggleLanguage() {
    
    var elements = document.querySelectorAll('[data-lang][data-en], [data-lang][data-fr]');
    var languageIndicator = document.getElementById('languageIndicator');

    elements.forEach(function(element) {
       
        var currentLanguage = element.getAttribute('data-lang');
       
        var newLanguage = currentLanguage === 'en' ? 'fr' : 'en';

        
        var translation = element.getAttribute('data-' + newLanguage);
        if (translation) {
          
            element.innerText = translation;
            
            element.setAttribute('data-lang', newLanguage);
        }
    });

    
    languageIndicator.innerText = newLanguage.toUpperCase(EN); 
}

