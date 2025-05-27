import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// FeatureCard component (from previous successful state)
function FeatureCard({title, description, linkTo, children, linkText = "Explore"}) {
  return (
    <div className="col col--6 margin-bottom--lg"> {/* Using col--6 for two cards to take up half width each */}
      <div className="card">
        <div className="card__header">
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        {children ? (
          <div className="card__footer">{children}</div>
        ) : linkTo ? (
          <div className="card__footer">
            <Link
              className="button button--secondary button--block"
              to={linkTo}>
              {linkText}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home - ${siteConfig.title}`}
      description="Welcome to Nikhil's personal Docusaurus site. Explore documentation and my professional resume." // Updated description slightly
    >
      <main>
        <div className="container padding-vert--lg">
          <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
            Welcome!
          </Heading>
          <p style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '3rem'}}>
            This site serves as a central hub for my home lab documentation and my professional resume.
          </p>
          <div className="row">
            {/* Card 1: Documentation */}
            <FeatureCard
              title="Documentation"
              description="Explore projects, configurations, and experiments from my home lab, and notes on this Docusaurus site setup."
              linkTo="/docs/documentation" // Links to your existing docs intro
              linkText="View Documentation" children={undefined}            />

            {/* Card 2: Resume */}
            <FeatureCard
              title="Professional Resume"
              description="View my skills, experience, and certifications."
              linkTo="/resume" // Path to your resume page
              linkText="View Resume" children={undefined}            />

            {/* Removed "My Docusaurus Journey" and "Connect with Me" cards */}
          </div>
        </div>
      </main>
    </Layout>
  );
}