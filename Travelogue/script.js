const cards = document.querySelectorAll(".card");
// all the cards are put into this const

const observer = new IntersectionObserver(
  // assign IntersectionObserver to observer
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      // if the entry goes in view, it toggles "show" for the entry
      if (entry.isIntersecting) observer.unobserve(entry.target);
      // it turns off the observe making the toggle only toggle once to make it visible and wont toggle again to make it invisible
    });
  },
  {
    threshold: 0.2,
    // the percentage of the item that needs to be observed before activating the callback (in this case 20% because of .2)
  }
);

cards.forEach((card) => {
  observer.observe(card);
});
