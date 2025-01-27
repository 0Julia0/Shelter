const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.jpg",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.jpg",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.jpg",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.jpg",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.jpg",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

const iconBurger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');
const blackout = document.querySelector('.blackout');
const cards = document.querySelectorAll('.our-friends__cards');
const card = document.querySelectorAll('.our-friends__item');
const helpLink = document.getElementById('help-link');
const footerLink = document.getElementById('footer-link');


function openMenu() {
    document.body.classList.toggle('body_menu');
    iconBurger.classList.toggle('header__burger_active');
    menuBurger.classList.toggle('header__menu_active');
    blackout.classList.toggle('blackout_active')
};

function closeMenu() {
  document.body.classList.remove('body_menu');
  iconBurger.classList.remove('header__burger_active');
  menuBurger.classList.remove('header__menu_active');
  blackout.classList.remove('blackout_active')
}

iconBurger.addEventListener("click", openMenu);
blackout.addEventListener("click", openMenu);
helpLink.addEventListener("click", closeMenu);
footerLink.addEventListener("click", closeMenu);

card.forEach(card => card.addEventListener("click", openPopup));

function openPopup(event) {
  const petName = event.target.closest(".our-friends__item").dataset.name;
  const pet = pets.find(pet => pet.name === petName);

  const popup = document.createElement('div');
  popup.className = "popup";
  popup.innerHTML = `
    <div class="popup__window">
      <img class="popup__image" src="${pet.img}" alt="${petName}">
      <div class="popup__container">
        <h2 class="popup__title">${petName}</h2>
        <h3 class="popup__subtitle">${pet.type} - ${pet.breed}</h3>
        <p class="popup__paragraph">${pet.description}</p>
        <ul class="popup__list">
          <li class="popup__element"><b>Age:</b> ${pet.age}</li>
          <li class="popup__element"><b>Inoculations:</b> ${pet.inoculations.join(", ")}</li>
          <li class="popup__element"><b>Diseases:</b> ${pet.inoculations.join(", ")}</li>
          <li class="popup__element"><b>Parasites:</b> ${pet.inoculations.join(", ")}</li>
        </ul>
      </div>
      <button class="popup__button"><img class="popup__icon" src="../../assets/icons/close.svg" alt="close"></button>
    </div>
  `;
  document.body.appendChild(popup);
  popup.addEventListener("click", closePopup);
}; 

function closePopup(event) {
  if (event.target.classList.contains('popup') || event.target.classList.contains('popup__button')) {
      document.body.removeChild(document.querySelector('.popup'));
  }
};