import type { ClientModule } from '@docusaurus/types';

const clientModule: ClientModule = {
  onRouteDidUpdate({ location }) {
    // Wait for the page to render
    setTimeout(() => {
      initializeMagnetCards();
    }, 100);
  },
};

function initializeMagnetCards() {
  // Find all cards that aren't already magnetized
  const cards = document.querySelectorAll('.card:not([data-magnetized])');
  
  cards.forEach(card => {
    // Mark as magnetized to avoid double-wrapping
    (card as HTMLElement).setAttribute('data-magnetized', 'true');
    
    // Create magnet wrapper
    const magnetWrapper = document.createElement('div');
    magnetWrapper.className = 'magnet-wrapper';
    magnetWrapper.style.cssText = 'position: relative; display: inline-block; width: 100%; height: 100%;';
    
    // Create inner wrapper for the transform
    const innerWrapper = document.createElement('div');
    innerWrapper.className = 'magnet-inner';
    innerWrapper.style.cssText = 'transition: transform 0.5s ease-in-out; will-change: transform;';
    
    // Wrap the card
    const parent = card.parentNode;
    if (parent) {
      parent.insertBefore(magnetWrapper, card);
      innerWrapper.appendChild(card);
      magnetWrapper.appendChild(innerWrapper);
      
      // Add magnet functionality
      addMagnetEffect(magnetWrapper as HTMLElement, innerWrapper as HTMLElement);
    }
  });
}

function addMagnetEffect(wrapper: HTMLElement, inner: HTMLElement) {
  const padding = 50;
  const magnetStrength = 8;
  let isActive = false;
  
  const handleMouseMove = (e: MouseEvent) => {
    const rect = wrapper.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distX = Math.abs(centerX - e.clientX);
    const distY = Math.abs(centerY - e.clientY);
    
    if (distX < rect.width / 2 + padding && distY < rect.height / 2 + padding) {
      if (!isActive) {
        isActive = true;
        inner.style.transition = 'transform 0.3s ease-out';
      }
      
      const offsetX = (e.clientX - centerX) / magnetStrength;
      const offsetY = (e.clientY - centerY) / magnetStrength;
      inner.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    } else {
      if (isActive) {
        isActive = false;
        inner.style.transition = 'transform 0.5s ease-in-out';
        inner.style.transform = 'translate3d(0px, 0px, 0)';
      }
    }
  };
  
  // Add event listener to window for global mouse tracking
  window.addEventListener('mousemove', handleMouseMove);
  
  // Store cleanup function on the element
  (wrapper as any)._magnetCleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}

export default clientModule;