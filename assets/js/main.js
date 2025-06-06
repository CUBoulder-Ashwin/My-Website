/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
   e.preventDefault()

   /*   
      The code for sending emails is just an example.

      Create your account at https://www.emailjs.com/ and 
      follow the instructions in the images for sending emails 
      that are in the project folder.
   */

   // serviceID - templateID - #form - publicKey
   emailjs.sendForm('service_6hb0i5l','template_j4jka9n','#contact-form','C03XCtnZleLz6laWz')

   .then(() =>{
      // Show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      // Remove message after five seconds
      setTimeout(() =>{
         contactMessage.textContent = ''
      }, 5000)

      // Clear input fields
      contactForm.reset()
   }, () =>{
      // Show error message
      contactMessage.textContent = 'Message not sent (service error) ❌'
   })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
   // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true, // Animations repeat
})

sr.reveal(`.perfil, .contact__form`)
sr.reveal(`.info`, {origin: 'left', delay: 800})
sr.reveal(`.skills`, {origin: 'left', delay: 1000})
sr.reveal(`.about`, {origin: 'right', delay: 1200})
sr.reveal(`.projects__card, .services__card, .experience__card`, {interval: 100})

document.addEventListener("DOMContentLoaded", () => {
   const perfil = document.querySelector(".perfil");
   const aboutButton = document.querySelector("#about-btn"); // Ensure this ID is used in your HTML
   const aboutOverlay = perfil.querySelector(".about-overlay");

   if (aboutButton) { 
       aboutButton.addEventListener("click", (event) => {
           event.preventDefault();
           perfil.classList.toggle("active");

           // Scroll to perfil smoothly
           perfil.scrollIntoView({ behavior: "smooth", block: "center" });
       });
   }

   // Hide overlay when clicking outside
   document.addEventListener("click", (event) => {
       if (!perfil.contains(event.target) && event.target !== aboutButton) {
           perfil.classList.remove("active");
       }
   });

   // Responsive Fix: Adjust Image Size Dynamically
   function updateLayout() {
       const perfilImg = document.querySelector(".perfil__img");
       if (window.innerWidth <= 768) {
           perfilImg.style.width = "60%";  // Adjust image size dynamically
       } else {
           perfilImg.style.width = "100%"; // Restore full size on larger screens
       }
   }

   // Run on page load and window resize
   window.addEventListener("resize", updateLayout);
   updateLayout(); // Initial run
});




 
 
