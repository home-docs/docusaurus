import React, {type ReactNode, useState, useEffect} from 'react';
import NavbarContent from '@theme/Navbar/Content';
import BrowserOnly from '@docusaurus/BrowserOnly';
import GlassSurface from '../../components/GlassSurface';

export default function Navbar(): ReactNode {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 996);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return (
      <nav className="navbar navbar--fixed-top">
        <NavbarContent />
      </nav>
    );
  }

  return (
    <nav
      className="navbar navbar--fixed-top"
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0.5rem',
        justifyContent: 'center',
        display: 'flex',
        background: 'none',
        boxShadow: 'none',
        border: 'none',
        backdropFilter: 'none'
      }}
    >
      <BrowserOnly
        fallback={
          <div
            className="navbar-fallback"
            style={{
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(11px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              width: '90%',
              maxWidth: '1200px'
            }}
          >
            <NavbarContent />
          </div>
        }
      >
        {() => (
          <GlassSurface
            width="100%"
            height={60}
            borderRadius={12}
            backgroundOpacity={0.1}
            saturation={1}
            borderWidth={0.07}
            brightness={50}
            opacity={0.93}
            blur={11}
            displace={0.5}
            distortionScale={-180}
            redOffset={0}
            greenOffset={10}
            blueOffset={20}
            className="navbar-glass-surface"
          >
            <NavbarContent />
          </GlassSurface>
        )}
      </BrowserOnly>
    </nav>
  );
}