// Species data
const species = [
  { name: 'Dogs', icon: createDogIcon() },
  { name: 'Cats', icon: createCatIcon() },
  { name: 'Horses', icon: createHorseIcon() },
  { name: 'Birds', icon: createBirdIcon() },
  { name: 'Rabbits', icon: createRabbitIcon() },
  { name: 'Hamsters', icon: createHamsterIcon() }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  createDNAAnimation();
  populateSpeciesGrid();
  initializeAnimations();
});

// Create DNA helix animation
function createDNAAnimation() {
  const dnaContainer = document.getElementById('dna-animation');
  const helix = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  helix.setAttribute('width', '100%');
  helix.setAttribute('height', '100%');
  helix.style.position = 'absolute';
  
  for (let i = 0; i < 20; i++) {
    const strand = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    strand.setAttribute('stroke', '#2196f3');
    strand.setAttribute('fill', 'none');
    strand.setAttribute('d', `M ${i * 50},0 Q ${i * 50 + 25},250 ${i * 50},500`);
    helix.appendChild(strand);
  }
  
  dnaContainer.appendChild(helix);
}

// Populate species grid
function populateSpeciesGrid() {
  const grid = document.getElementById('speciesGrid');
  species.forEach(species => {
    const card = document.createElement('div');
    card.className = 'species-card';
    card.innerHTML = `
      ${species.icon}
      <h3>${species.name}</h3>
    `;
    grid.appendChild(card);
  });
}

// Initialize GSAP animations
function initializeAnimations() {
  gsap.from('.process-card', {
    duration: 1,
    y: 100,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.process-cards',
      start: 'top center'
    }
  });
  
  gsap.from('.species-card', {
    duration: 0.8,
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.species-grid',
      start: 'top center'
    }
  });
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    petType: document.getElementById('petType').value,
    message: document.getElementById('message').value
  };
  
  // Here you would typically send this data to a server
  console.log('Form submitted:', formData);
  alert('Thank you for your inquiry. We will contact you soon!');
  event.target.reset();
}

// Scroll to contact section
function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Species icons as SVG
function createDogIcon() {
  return `<svg class="species-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#2196f3"/>
    <circle cx="35" cy="45" r="5" fill="white"/>
    <circle cx="65" cy="45" r="5" fill="white"/>
    <path d="M40,60 Q50,70 60,60" stroke="white" fill="none" stroke-width="3"/>
  </svg>`;
}

function createCatIcon() {
  return `<svg class="species-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#2196f3"/>
    <path d="M25,40 L40,30 L55,40" stroke="white" fill="none" stroke-width="3"/>
    <path d="M45,60 L50,55 L55,60" stroke="white" fill="none" stroke-width="3"/>
  </svg>`;
}

function createHorseIcon() {
  return `<svg class="species-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#2196f3"/>
    <path d="M30,50 Q50,30 70,50" stroke="white" fill="none" stroke-width="3"/>
  </svg>`;
}

function createBirdIcon() {
  return `<svg class="species-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#2196f3"/>
    <path d="M30,50 Q50,20 70,50" stroke="white" fill="none" stroke-width="3"/>
  </svg>`;
}

function createRabbitIcon() {
  return `<svg class="species-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#2196f3"/>
    <path d="M35,30 L45,10 L55,30" stroke="white" fill="none" stroke-width="3"/>
  </svg>`;
}

function createHamsterIcon() {
  return `<svg class="species-icon" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40" fill="#2196f3"/>
    <circle cx="50" cy="50" r="20" stroke="white" fill="none" stroke-width="3"/>
  </svg>`;
}