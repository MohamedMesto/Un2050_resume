
// Portfolio Items
const portfolioItems = [
    // Advertising
    { id: 1, category: 'Advertising', title: 'Dealna.de Brand Identity', img: 'assets/images/portfolio/dealna.jpg' },
    { id: 2, category: 'Advertising', title: 'ADNOC Advertising', img: 'assets/images/portfolio/ADNOC-768x552.png' },
    { id: 3, category: 'Advertising', title: 'Brother ATL Adverts.', img: 'assets/images/portfolio/brother-768x552.png' },
    { id: 4, category: 'Advertising', title: 'Posterfolio Advertising - Printing', img: 'assets/images/portfolio/poster-768x874.png' },
    { id: 5, category: 'Advertising', title: 'CleverShuttle Visual & Corporate Identity', img: 'assets/images/portfolio/CS_port_big-700x1024.png' },



    // Digital
    

    { id: 63, category: 'Digital', title: 'Digital Marketing Campaign', img: 'assets/images/portfolio/Dealnah.jpg' },
    { id: 53, category: 'Digital', title: 'Social Media Online Adverts', img: 'assets/images/portfolio/digital-Mobile-1-768x874.png' },
    { id: 55, category: 'Digital', title: 'User Interface - WebDigital', img: 'assets/images/portfolio/web_digital_02-768x581.png' },
    { id: 56, category: 'Digital', title: 'Brother ATL Adverts.', img: 'assets/images/portfolio/brother-768x552.png' },
    { id: 57, category: 'Digital', title: 'Stop Smoking Awareness Campaign', img: 'assets/images/portfolio/Stop_smoking-768x552.png' },

    // Continuing from ID: 58 using existing project image names
    { id: 62, category: 'Digital', title: 'Restaurant Web Application', img: 'assets/images/portfolio/project10.jpg' },
    { id: 61, category: 'Digital', title: 'E-Commerce Website - Fullstack Development', img: 'assets/images/portfolio/project1.jpg' },
    { id: 58, category: 'Digital', title: 'Word Adventure Online Game', img: 'assets/images/portfolio/project4.jpg' },
    { id: 59, category: 'Digital', title: 'Corporate Dashboard Analytics', img: 'assets/images/portfolio/project12.jpg' },
    { id: 60, category: 'Digital', title: 'Modern Blog website', img: 'assets/images/portfolio/project7.jpg' },
    { id: 65, category: 'Digital', title: 'Interactive Crossword Website', img: 'assets/images/portfolio/project9.jpg' },
    { id: 67, category: 'Digital', title: 'UI/UX Design for Healthcare', img: 'assets/images/portfolio/project8.jpg' },
    { id: 52, category: 'Digital', title: '  Videos Adverts & Animation', img: 'assets/images/portfolio/Video_grid_V.jpg' },

  // Logos & Visual ID
 

    { id: 109, category: 'Logos & Visual ID', title: ' MBT Logo & Visual ID', img: 'assets/images/portfolio/test-dimen-768x576.jpg' },
    { id: 101, category: 'Logos & Visual ID', title: 'Engineers Union (Idlib Branch, 2008)', img: 'assets/images/portfolio/eng_edlib_logo.png' },
    { id: 102, category: 'Logos & Visual ID', title: 'Un2050.de Co. Identity', img: 'assets/images/portfolio/un2050_logo_v1.4.png' },
    { id: 111, category: 'Logos & Visual ID', title: 'Peaks Cube Visual ID', img: 'assets/images/portfolio/0321.jpg' },

    
    { id: 103, category: 'Logos & Visual ID', title: 'Dealnah.de Logo', img: 'assets/images/portfolio/Dealnah.jpg' },
    { id: 104, category: 'Logos & Visual ID', title: 'Ghazwan Al- Harash', img: 'assets/images/portfolio/logos.png' },
    { id: 105, category: 'Logos & Visual ID', title: 'LQ2050 Brand Identity', img: 'assets/images/portfolio/LQ2050_logo6.png' },
    { id: 106, category: 'Logos & Visual ID', title: 'CleverShuttle Visual & Corporate Identity', img: 'assets/images/portfolio/CS_port_big-700x1024.png' },
    { id: 107, category: 'Logos & Visual ID', title: 'Al Hamidieh Visual ID', img: 'assets/images/portfolio/Hmidiye_Food.jpg' },


    { id: 108, category: 'Logos & Visual ID', title: 'CleverShuttle Brand Guidelines', img: 'assets/images/portfolio/Guidelines-768x576.png' },
    { id: 110, category: 'Logos & Visual ID', title: 'Balabaki Visual ID & Printing', img: 'assets/images/portfolio/TB-768x576.jpg' },
 



    //   { id: 104, category: 'Logos & Visual ID', title: 'Voson Bilash Logo', img: 'assets/images/portfolio/vosonbilsh.png' },

    // Packaging
    { id: 151, category: 'Packaging', title: 'Embroidered Tissue Box with Satin Ribbons', img: 'assets/images/portfolio/Embroidered_tissue_box_with_satin_ribbons.jpg' },
    { id: 152, category: 'Packaging', title: 'Wooden Keychain 1', img: 'assets/images/portfolio/Wooden_keychain1.png' },
    { id: 154, category: 'Packaging', title: 'Al Malaky Packaging', img: 'assets/images/portfolio/Almalaky_Grid_02-768x430.jpg' },
    { id: 153, category: 'Packaging', title: 'Tulip Packaging Keychain 2', img: 'assets/images/portfolio/tulip-768x552.png' },


    // Photography
    { id: 201, category: 'Photography', title: 'portrait Photography', img: 'assets/images/portfolio/portrait.jpg' },

    // Printing



    { id: 251, category: 'Printing', title: 'CleverShuttle Corporate Brochure Printing', img: 'assets/images/portfolio/CS_Corp_BRSCH_small-768x552.png' },
    { id: 252, category: 'Printing', title: 'Education Faculty Brochure (Aleppo University - 2009)', img: 'assets/images/portfolio/bruschure_educationcollage.png' },
    { id: 253, category: 'Printing', title: 'Balabaki Visual ID & Printing', img: 'assets/images/portfolio/TB-768x576.jpg' },
    { id: 254, category: 'Printing', title: 'Engineers Union Brochure (2008)', img: 'assets/images/portfolio/bruschure_eng.png' },
    { id: 255, category: 'Printing', title: 'Printing Books', img: 'assets/images/portfolio/Offset_02-1-768x581.jpg' },
    { id: 256, category: 'Printing', title: 'Posterfolio Advertising - Printing', img: 'assets/images/portfolio/poster-768x874.png' },
    { id: 257, category: 'Printing', title: 'CleverShuttle Visual & Corporate Identity', img: 'assets/images/portfolio/CS_port_big-700x1024.png' },

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

// // Modal Functions
// function openModal(imgSrc) {
//   modal.style.display = 'flex';
//   modalImg.src = imgSrc;
// }

// closeBtn.onclick = () => (modal.style.display = 'none');
// modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

// // Category Filter
// categoryButtons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     document.querySelector('.category-button.active').classList.remove('active');
//     btn.classList.add('active');
//     displayItems(btn.dataset.category);
//   });
// }); 

// Initial Load
// displayItems();



 // Category Filter
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const currentActive = document.querySelector('.category-button.active');
    if (currentActive) currentActive.classList.remove('active');
    btn.classList.add('active');
    displayItems(btn.dataset.category);
  });
});

// Initial Load (show only Digital projects by default)
displayItems('Digital');

// Remove active from "All" if present, and set "Digital" as active
const allActive = document.querySelector('[data-category="All"].active');
if (allActive) allActive.classList.remove('active');

const digitalBtn = document.querySelector('[data-category="Digital"]');
if (digitalBtn) digitalBtn.classList.add('active');
