import React, { JSX } from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx'; // Import the clsx utility

// Define the Props type directly to solve the import issue.
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
      // This line is the critical fix
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