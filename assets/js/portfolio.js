// // Full Portfolio Data (same as your React version)
// const portfolioItems = [
//   // Advertising (placeholder for future expansion)
//   { id: 1, category: 'Advertising', title: 'Ad Campaign 1', img: 'assets/images/portfolio/ad_campaign_placeholder.jpg' },

//   // Digital
//   { id: 51, category: 'Digital', title: 'Website Redesign', img: 'assets/images/portfolio/website_redesign.png' },

//   // Logos & Visual ID 

//   { id: 101, category: 'Logos & Visual ID', title: 'Dealna.de Brand Identity', img: 'assets/images/portfolio/dealna.jpg' },
//   { id: 102, category: 'Logos & Visual ID', title: 'Un2050.de Co. Identity', img: 'assets/images/portfolio/un2050_logo_v1.4.png' },
//   { id: 103, category: 'Logos & Visual ID', title: 'Dealnah.de Logo', img: 'assets/images/portfolio/Dealnah.jpg' },
//   { id: 104, category: 'Logos & Visual ID', title: 'Voson Bilash Logo', img: 'assets/images/portfolio/vosonbilsh.png' },
//   { id: 105, category: 'Logos & Visual ID', title: 'Engineers Union (Idlib Branch, 2008)', img: 'assets/images/portfolio/eng_edlib_logo.png' },
//   { id: 106, category: 'Logos & Visual ID', title: 'LQ2050 Brand Identity', img: 'assets/images/portfolio/LQ2050_logo6.png' },
//   // Packaging
//   { id: 151, category: 'Packaging', title: 'Embroidered Tissue Box with Satin Ribbons', img: 'assets/images/portfolio/Embroidered_tissue_box_with_satin_ribbons.jpg' },
//   { id: 152, category: 'Packaging', title: 'Wooden Keychain 1', img: 'assets/images/portfolio/Wooden_keychain1.png' },
//   { id: 153, category: 'Packaging', title: 'Wooden Keychain 2', img: 'assets/images/portfolio/Wooden_keychain2.png' },

//   // Photography
//   { id: 201, category: 'Photography', title: 'Event Photography', img: 'assets/images/portfolio/event_photography_placeholder.jpg' },

//   // Printing
//   { id: 251, category: 'Printing', title: 'Engineers Union Brochure (2008)', img: 'assets/images/portfolio/bruschure_eng.png' },
//   { id: 252, category: 'Printing', title: 'Education Faculty Brochure (Aleppo University - 2009)', img: 'assets/images/portfolio/bruschure_educationcollage.png' }
// ];

// // DOM Elements
// const portfolioContainer = document.getElementById('portfolioItems');
// const categoryButtons = document.querySelectorAll('.category-button');
// const modal = document.getElementById('portfolioModal');
// const modalImg = document.getElementById('modalImage');
// const closeBtn = document.querySelector('.close');

// // Display Function
// function displayItems(category = 'All') {
//   portfolioContainer.innerHTML = '';
//   const filtered = category === 'All'
//     ? portfolioItems
//     : portfolioItems.filter(item => item.category === category);

//   filtered.forEach(item => {
//     const div = document.createElement('div');
//     div.className = 'portfolio-item col-md-4';
//     div.innerHTML = `
//       <img src="${item.img}" alt="${item.title}">
//       <h3>${item.title}</h3>
//     `;
//     div.addEventListener('click', () => openModal(item.img));
//     portfolioContainer.appendChild(div);
//   });
// }

// // Modal Control
// function openModal(imgSrc) {
//   modal.style.display = 'block';
//   modalImg.src = imgSrc;
// }

// closeBtn.onclick = () => modal.style.display = 'none';
// modal.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// // Category Filter
// categoryButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.querySelector('.category-button.active').classList.remove('active');
//     btn.classList.add('active');
//     displayItems(btn.dataset.category);
//   });
// });

// // Initial Load
// displayItems();
// Portfolio Items
const portfolioItems = [
  // Advertising
  { id: 1, category: 'Advertising', title: 'Dealna.de Brand Identity', img: 'assets/images/portfolio/dealna.jpg' },

  // Digital
    { id: 51, category: 'Digital', title: 'Website Redesign', img: 'assets/images/portfolio/website_redesign.png' },
    { id: 52, category: 'Digital', title: '  Videos Adverts & Animation', img: 'assets/images/portfolio/Video_grid_V.jpg' },
    { id: 53, category: 'Digital', title: 'Website Redesign', img: 'assets/images/portfolio/project9.jpg' },
    { id: 54, category: 'Digital', title: 'Website Redesign', img: 'assets/images/portfolio/project12.jpg' },

//        project4.jpg  project7.jpg  
// project1.jpg   project6.jpg  project8.jpg



  // Logos & Visual ID
   { id: 101, category: 'Logos & Visual ID', title: 'Engineers Union (Idlib Branch, 2008)', img: 'assets/images/portfolio/eng_edlib_logo.png' },
  { id: 102, category: 'Logos & Visual ID', title: 'Un2050.de Co. Identity', img: 'assets/images/portfolio/un2050_logo_v1.4.png' },
  { id: 103, category: 'Logos & Visual ID', title: 'Dealnah.de Logo', img: 'assets/images/portfolio/Dealnah.jpg' },
  { id: 104, category: 'Logos & Visual ID', title: 'Ghazwan Al- Harash', img: 'assets/images/portfolio/logos.png' },
  { id: 105, category: 'Logos & Visual ID', title: 'LQ2050 Brand Identity', img: 'assets/images/portfolio/LQ2050_logo6.png' },
  { id: 106, category: 'Logos & Visual ID', title: '  CleverShuttle Visual & Corporate Identity', img: 'assets/images/portfolio/CS_port_big-700x1024.png' },
  { id: 107, category: 'Logos & Visual ID', title: ' Al Hamidieh Visual ID', img: 'assets/images/portfolio/Hmidiye_Food.jpg' },

  
//   { id: 104, category: 'Logos & Visual ID', title: 'Voson Bilash Logo', img: 'assets/images/portfolio/vosonbilsh.png' },

  // Packaging
  { id: 151, category: 'Packaging', title: 'Embroidered Tissue Box with Satin Ribbons', img: 'assets/images/portfolio/Embroidered_tissue_box_with_satin_ribbons.jpg' },
  { id: 152, category: 'Packaging', title: 'Wooden Keychain 1', img: 'assets/images/portfolio/Wooden_keychain1.png' },
  { id: 153, category: 'Packaging', title: 'Wooden Keychain 2', img: 'assets/images/portfolio/Wooden_keychain2.png' },

  // Photography
  { id: 201, category: 'Photography', title: 'portrait Photography', img: 'assets/images/portfolio/portrait.jpg' },

  // Printing
  { id: 251, category: 'Printing', title: 'Engineers Union Brochure (2008)', img: 'assets/images/portfolio/bruschure_eng.png' },
  { id: 252, category: 'Printing', title: 'Education Faculty Brochure (Aleppo University - 2009)', img: 'assets/images/portfolio/bruschure_educationcollage.png' }
];

// DOM references
const portfolioContainer = document.getElementById('portfolioItems');
const categoryButtons = document.querySelectorAll('.category-button');
const modal = document.getElementById('portfolioModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close');

// Display Function
function displayItems(category = 'All') {
  portfolioContainer.innerHTML = '';
  const filtered = category === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === category);

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;
    div.addEventListener('click', () => openModal(item.img));
    portfolioContainer.appendChild(div);
  });
}

// Modal Functions
function openModal(imgSrc) {
  modal.style.display = 'flex';
  modalImg.src = imgSrc;
}

closeBtn.onclick = () => (modal.style.display = 'none');
modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

// Category Filter
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.category-button.active').classList.remove('active');
    btn.classList.add('active');
    displayItems(btn.dataset.category);
  });
});

// Initial Load
displayItems();
