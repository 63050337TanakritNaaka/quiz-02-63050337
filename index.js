// ข้อมูลบุคลากร
const teamMembers = [
    { name: "บาทหลวงสเปน อม-ตะ", position: "CEO" },
    { name: "Jane Smith", position: "Designer" },
    { name: "The Snowden", position: "Developer" },
    { name: "Emily Brown", position: "Marketing" },
    { name: "Jordan Belfort", position: "Sales" },
    { name: "Jeff - 21 Jump Street", position: "Support" }
  ];
  
  // โหลดข้อมูลบุคลากรในหน้าเว็บ
  const displayTeamMembers = (teamMembers) => {
    const teamContainer = document.querySelector(".team-container");
    teamContainer.innerHTML = "";
  
    teamMembers.forEach((person) => {
      const personCard = document.createElement("div");
      personCard.classList.add("person-card");
      personCard.innerHTML = `
        <div class="person-name">${person.name}</div>
        <div class="person-position">${person.position}</div>
      `;
      teamContainer.appendChild(personCard);
    });
  };
  
  // โหลดข้อมูลสินค้าจาก API และแสดงผลในหน้าเว็บ
  const loadProducts = async () => { 
    const response = await fetch("https://dummyjson.com/products?limit=12");
    const productsData = await response.json();
  
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML = "";
  
    productsData.products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="product-content">
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <div class="product-price">$ ${product.price}</div>
        </div>
      `;
      productsContainer.appendChild(productCard);
    });
  };
  
  // ค้นหาและกรองข้อมูลสินค้า
  const searchAndFilterProducts = () => {
    const searchInput = document.getElementById("product-search");
    const products = document.querySelectorAll(".product-card");
  
    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.toLowerCase();
  
      products.forEach((product) => {
        const productTitle = product.querySelector("h3").textContent.toLowerCase();
        const productDescription = product.querySelector("p").textContent.toLowerCase();
  
        if (productTitle.includes(searchTerm) || productDescription.includes(searchTerm)) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  };
  
  // โหลดข้อมูลและแสดงผลในหน้าเว็บ
  window.onload = () => {
    displayTeamMembers(teamMembers);
    loadProducts();
    searchAndFilterProducts();
  };
  