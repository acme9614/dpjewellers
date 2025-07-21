      const toggleBtn = document.getElementById("menu-toggle");
      const drawer = document.getElementById("drawer");
      const closeBtn = document.getElementById("close-drawer");
      const overlay = document.getElementById("overlay");

      toggleBtn.addEventListener("click", () => {
        drawer.classList.remove("-translate-x-full");
        overlay.classList.remove("hidden");
      });

      closeBtn.addEventListener("click", () => {
        drawer.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
      });

      overlay.addEventListener("click", () => {
        drawer.classList.add("-translate-x-full");
        overlay.classList.add("hidden");
      });



      
// drawers menu
function navigateToScheme() {
    Toaster.postMessage('navigateScheme');
  }


  
  
  function navigateToBankDetails() {
    Toaster.postMessage('navigateBankDetails');
  }
  
  function navigateToKyc() {
    Toaster.postMessage('navigateKyc');
  }
  
  function navigateToRate() {
    Toaster.postMessage('navigateRate');
  }
  
  function navigateSchemeRecords() {
    Toaster.postMessage('navigateSchemeRecords');
  }
  
  function navigateToCustomerCard() {
    Toaster.postMessage('navigateCustomerCard');
  }

  function navigateTransactionHistory() {
    Toaster.postMessage('navigateTransactionHistory');
  }

  function navigateToMyOrder() {
    Toaster.postMessage('navigateToMyOrder');
  }

  function navigateToUserProfile() {
    Toaster.postMessage('navigateToUserProfile');
  }

  function navigateToDigitalGold() {
    Toaster.postMessage('navigateToDigitalGold');
  }

  function navigateToPanchang() {
    Toaster.postMessage('navigateToPanchang');
  }

  function navigateToFeedback() {
    Toaster.postMessage('navigateToFeedback');
  }

  function navigateToSetting() {
    Toaster.postMessage('navigateToSetting');
  }

  function setUserName(username) {
    // Find the element by ID and set the text content
    document.getElementById("user-name-display").innerText = "Welcome, " + username;
}
function navigateToHomePage() {
    Toaster.postMessage('navigateToHomePage');
}


       
// brandSwiper
const brandSwiper = new Swiper(".brandSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// desktopTabs javscript start

// Initialize AOS
AOS.init({
  duration: 800,
  once: false,
});

// Initialize Swiper
const tabsSwiper = new Swiper(".tabSwiper", {
    
  slidesPerView: 3,
  spaceBetween: 4,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
  breakpoints: {
    425: {
      slidesPerView: 3,
    },
    375: {
      slidesPerView: 3,
    },
  },
});