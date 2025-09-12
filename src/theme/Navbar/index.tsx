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

  return (
    <nav
      className="navbar navbar--fixed-top"
      style={{
        position: 'fixed',
        top: isMobile ? 0 : '1rem',
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isMobile ? '0.25rem' : '0.5rem',
        justifyContent: 'center',
        display: 'flex'
      }}
    >
      <BrowserOnly
        fallback={
          <div
            className="navbar-fallback"
            style={{
              borderRadius: isMobile ? '0' : '12px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(11px)',
              border: isMobile ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
              width: isMobile ? '100%' : '90%',
              maxWidth: isMobile ? 'none' : '1200px'
            }}
          >
            <NavbarContent />
          </div>
        }
      >
        {() =>
          isMobile ? (
            <div
              className="navbar-mobile-wrapper"
              style={{
                width: '100%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(11px)',
                padding: '0.5rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <NavbarContent />
            </div>
          ) : (
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
          )
        }
      </BrowserOnly>
    </nav>
  );
}