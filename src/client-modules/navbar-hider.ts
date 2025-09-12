import type { ClientModule } from '@docusaurus/types';

const clientModule: ClientModule = {
  onRouteDidUpdate({ location }) {
    // On the homepage, do nothing.
    // The baseUrl is '/' according to your config.
    if (location.pathname === '/') {
      return null;
    }

    let lastScrollY = window.scrollY;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const delta = 5; // Min pixels to scroll before navbar reacts

    const handleScroll = () => {
      if (!navbar) return;
      const currentScrollY = window.scrollY;

      // Ignore small scroll changes
      if (Math.abs(lastScrollY - currentScrollY) <= delta) {
        return;
      }

      if (currentScrollY > lastScrollY && currentScrollY > navbar.clientHeight) {
        navbar.classList.add('navbar--hidden');
      } else {
        navbar.classList.remove('navbar--hidden');
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Return a cleanup function that Docusaurus will call before the next route changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Ensure the navbar is visible when navigating to a new page
      navbar?.classList.remove('navbar--hidden');
    };
  },
};

export default clientModule;
