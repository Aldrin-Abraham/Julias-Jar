// List of wisdom quotes
const wisdoms = [
    "Sometimes, the only way to heal is to embrace the pain, let it teach you, and move forward.",
    "The hardest part is always the first step, but once you take it, the rest follows.",
    "Love isn’t about finding someone to live with, it’s about finding someone you can’t imagine living without.",
    "When you can’t find the light, be the light for someone else.",
    "No one can heal you, except yourself. Take the time you need to rebuild.",
    "Every ending is simply the beginning of something new.",
    "You are never too broken to start over again.",
    "In the end, the people who love you will always be there, no matter what.",
    "Sometimes the most painful moments in life give birth to the strongest versions of ourselves.",
    "Don’t look for happiness outside of yourself. It’s within you all along.",
    "The things that hurt the most can also teach you the most.",
    "Forgiveness doesn’t mean forgetting. It means letting go of the hurt.",
    "Sometimes, the hardest person to forgive is yourself.",
    "The love you give is the love you will receive, multiplied.",
    "Let the past be your teacher, not your prison.",
    "The world will always try to change you, but never lose sight of who you are.",
    "Don’t be afraid to be a little bit broken. It’s where the light comes in.",
    "Don’t rush the healing process. You’ll get there when it’s time.",
    "Every star you see in the sky is a piece of your soul reminding you to keep going.",
    "You don’t have to have all the answers. Just take one step forward, and you’ll find your way.",
    "When life knocks you down, take a moment to breathe, then rise stronger than before.",
    "Sometimes the greatest act of love is simply letting someone go.",
    "Every journey begins with one small step, but it’s the courage that makes it worthwhile.",
    "What you’re feeling right now won’t last forever, but the lessons will.",
    "You are worthy of love, even when you don’t feel it.",
    "There’s always room for a new beginning, no matter how dark the past may seem.",
    "Don’t just exist; live, love, and experience all that life has to offer.",
    "When you can’t change what’s happened, change how you react to it.",
    "You are stronger than you think. Keep moving forward.",
    "The beauty of life is in the moments you pause to appreciate.",
    "Cherish the people who make you laugh, especially when life feels too heavy.",
    "True strength comes not from what you can bear, but from what you choose to let go of.",
    "Sometimes, the most powerful thing you can do is simply to be still.",
    "Love doesn’t always make sense. But it always feels right.",
    "There’s no need to rush through life. The best moments often happen when you least expect them.",
    "Embrace the storms in life. They help you grow into who you’re meant to be.",
    "The sun always sets, but it will rise again. Just like you.",
    "You are not defined by your mistakes. You’re defined by how you rise after them.",
    "What you’ve lost isn’t gone forever. It lives on in the lessons you’ve learned.",
    "Life isn’t about waiting for the storm to pass; it’s about learning to dance in the rain.",
    "Healing doesn’t happen overnight. But it’s happening, even when you don’t see it.",
    "Sometimes, the best advice is the simplest: Be kind to yourself.",
    "The right people will find their way into your life, even if it doesn’t seem like it now.",
    "Take time to rest your heart and mind. You deserve it.",
    "It’s okay to not have everything figured out. Trust the journey.",
    "The most beautiful souls are often the ones who have been broken the most.",
    "Love is not a destination, it’s a journey that we take together.",
    "Don’t fear change. Fear staying stuck in a life that doesn’t make you happy.",
    "It’s the quiet moments that teach you the most about yourself.",
    "The pain you’re feeling now will one day be the strength you rely on.",
    "The right person will love you in ways you didn’t know were possible.",
    "Sometimes, you just need to trust that things will work out, even if you don’t know how.",
    "You are never too old to start over, to try something new, or to chase your dreams.",
    "The love you feel for others is a reflection of the love you have for yourself.",
    "The past may have shaped you, but it doesn’t define who you are now.",
    "Every moment of your life has a purpose, even the painful ones.",
    "When one chapter ends, another begins. Don’t be afraid to turn the page.",
    "You are allowed to change your mind. You are allowed to rewrite your story.",
    "Sometimes, it’s the quietest moments that hold the greatest power.",
    "The most important relationship you’ll ever have is the one with yourself.",
    "There’s beauty in imperfection. Embrace it.",
    "Don’t hold onto things or people that are no longer meant for you.",
    "You can’t change what’s already happened, but you can shape your future with the choices you make.",
    "Healing doesn’t mean forgetting. It means learning to live with the scars.",
    "What feels like an ending may actually be the beginning of something greater.",
    "It’s never too late to pursue your dreams, no matter how big or small.",
    "The only way out is through. Keep pushing forward.",
    "Sometimes, the right thing to do is the hardest thing to do.",
    "The heart knows things the mind can’t understand.",
    "In the end, love is the only thing that truly matters.",
    "You’re not alone in this world, even when it feels like it.",
    "When you feel lost, trust that you’re exactly where you need to be.",
    "You are more resilient than you realize. Keep fighting for your happiness.",
    "Not everything that’s broken needs fixing. Some things are better left as they are.",
    "The people who truly matter will never make you feel like you’re too much.",
    "Sometimes, the best way to heal is to give others the love and kindness you wish for yourself.",
    "Your past doesn’t have to haunt you. Let it go, and make room for the future.",
    "Never underestimate your worth. You are more than enough.",
    "True love isn’t perfect. It’s real, and that’s what makes it beautiful.",
    "Sometimes, you need to be lost in order to find yourself again.",
    "The best way to heal is to surround yourself with love and understanding.",
    "Time doesn’t heal all wounds, but it teaches you how to live with them.",
    "You don’t have to have it all figured out. Just take the next step.",
    "Courage is not the absence of fear. It’s the strength to keep going despite it.",
    "If you don’t take care of yourself, no one else will. Prioritize your well-being.",
    "You are allowed to be a work in progress. It doesn’t make you any less valuable.",
    "Some chapters are meant to be short, but they still shape the story.",
    "True healing happens when you stop looking for the answers and start embracing the journey.",
    "The greatest gift you can give yourself is to forgive, even when it’s hard.",
    "You are a masterpiece, even with your flaws and imperfections.",
    "Life will test you, but it will also teach you how to overcome the hardest moments.",
    "Don’t let anyone dim your light. You were born to shine.",
    "Sometimes, the greatest lessons come from the hardest experiences.",
    "Your story is still being written. Don’t rush the process.",
    "You’re allowed to feel sad, angry, or lost. But remember, it won’t last forever.",
    "In the end, we only regret the chances we didn’t take.",
    "Love doesn’t fix everything, but it makes everything easier to bear.",
    "Never forget how far you’ve come, even when you feel like you’ve lost your way.",
    "Your journey is yours alone. Don’t compare it to others.",
    "Don’t wait for the perfect moment. Take the moment and make it perfect.",
    "Life is a series of moments. Choose to make the ones that matter count.",
    "The people you meet in life can change you, but only if you allow them to.",
    "Love is the bridge between two hearts, no matter the distance.",
    "Even when it’s dark, remember that the stars are always shining above you.",
    "Let the pain teach you. Let it guide you to something better.",
    "The most important thing you can do is to be kind to yourself.",
    "Don’t rush healing. Let it come in its own time.",
    "The moments that take your breath away are the ones that will last forever.",
    "You have the strength to move mountains. Believe in yourself."
];

// DOM elements
const jar = document.getElementById('jar');
const lid = document.getElementById('lid');
const wisdomButton = document.getElementById('wisdom-button');
const wisdomText = document.getElementById('wisdom-text');
const starsContainer = document.getElementById('stars-container');

let isOpen = false;

// Function to reveal wisdom
function revealWisdom() {
  if (!isOpen) {
    // Open the jar
    isOpen = true;
    jar.classList.add('open');
    
    // Select and display a random wisdom
    const randomWisdom = wisdoms[Math.floor(Math.random() * wisdoms.length)];
    wisdomText.textContent = randomWisdom;
    
    // Show the wisdom text
    setTimeout(() => {
      wisdomText.classList.add('show');
    }, 500);
    
    // Make a star pop out
    popStar();
    
    // Auto-close after 8 seconds
    setTimeout(() => {
      resetJar();
    }, 8000);
  }
}

// Function to reset the jar
function resetJar() {
  isOpen = false;
  jar.classList.remove('open');
  wisdomText.classList.remove('show');
}

// Function to create paper stars inside the jar
function createStars() {
  const starCount = 75; // More stars to fill 75% of the jar
  
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random sizes between 8-20px
    const size = Math.floor(Math.random() * 12) + 8;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random positions within the jar (filling bottom 75%)
    const left = Math.floor(Math.random() * 220) + 30;
    const top = Math.floor(Math.random() * 285) + 95; // 380 * 0.75 = 285
    
    star.style.left = `${left}px`;
    star.style.top = `${top}px`;
    
    // Random rotation
    const rotation = Math.floor(Math.random() * 360);
    star.style.transform = `rotate(${rotation}deg)`;
    
    starsContainer.appendChild(star);
  }
}

// Function to make a star pop out
function popStar() {
  const stars = document.querySelectorAll('.star:not(.popped)');
  if (stars.length > 0) {
    const randomStar = stars[Math.floor(Math.random() * stars.length)];
    randomStar.classList.add('popped');
    
    // Remove the star after animation completes
    setTimeout(() => {
      if (randomStar.parentNode) {
        randomStar.parentNode.removeChild(randomStar);
      }
    }, 2000);
  }
}

// Event listeners
wisdomButton.addEventListener('click', revealWisdom);
lid.addEventListener('keydown', e => { 
  if (e.key === 'Enter' || e.key === ' ') { 
    e.preventDefault(); 
    revealWisdom(); 
  }
});

// Create initial stars when page loads
setTimeout(createStars, 500);