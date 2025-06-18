/**
 * Swizzled NavbarLogo component from Docusaurus classic theme.
 *
 * Purpose of Swizzling:
 * This component was swizzled to implement custom behavior for the navbar logo and title display,
 * primarily to change the displayed title based on whether the user is on the homepage or another page.
 *
 * Key Customizations:
 * 1. Dynamic Title Display:
 *    - On the homepage (`/`), the full site title (from `siteConfig.navbar.title`) is displayed.
 *    - On all other pages, the title displays as "Home" to provide a clear link back to the main page.
 * 2. Accessibility Enhancement:
 *    - An `aria-label="Home page"` has been added to the main `Link` component that wraps the logo and title,
 *      improving navigation for users relying on screen readers.
 * 3. Local Type Definition:
 *    - The `Props` type for this component is defined directly within this file.
 * 4. CSS Class Handling:
 *    - Uses `clsx` to merge Docusaurus's default `navbar__brand` class with any `className` prop passed to the component.
 */
import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';

type Props = {
  className?: string;
};

export default function NavbarLogo({ className }: Props): JSX.Element {
  const {
    navbar: { title, logo },
  } = useThemeConfig();
  const { pathname } = useLocation();
  const baseUrl = useBaseUrl('/');

  // Check if the current path is the homepage
  const isHomePage = pathname === baseUrl;
  const displayTitle = isHomePage ? title : 'Home';

  if (!logo) {
    return (
      <Link to="/" className={clsx('navbar__brand', className)}>
        {displayTitle}
      </Link>
    );
  }

  const { src, srcDark, width, height, alt, target, style } = logo;
  const sources = {
    light: useBaseUrl(src),
    dark: useBaseUrl(srcDark ?? src),
  };

  return (
    <Link
      to="/"
      target={target}
      aria-label="Home page"
      className={clsx('navbar__brand', className)}>
      {src && (
        <ThemedImage
          sources={sources}
          width={width}
          height={height}
          alt={alt ?? title ?? ''}
          className="navbar__logo"
          style={style}
        />
      )}
      {displayTitle != null && (
        <b className="navbar__title text--truncate">{displayTitle}</b>
      )}
    </Link>
  );
}