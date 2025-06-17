import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// An enhanced FeatureCard component that accepts an icon
function FeatureCard({title, description, linkTo, icon, linkText = "Explore"}) {
  return (
    // col--4 makes each card take up 1/3 of the row width
    <div className="col col--4 margin-bottom--lg">
      <div className="card">
        <div className="card__header">
          {/* Render the icon if provided */}
          {icon && <div className="card__icon" style={{fontSize: '2rem', marginBottom: '0.5rem'}}>{icon}</div>}
          <Heading as="h3">{title}</Heading>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        {linkTo && (
          <div className="card__footer">
            <Link
              className="button button--secondary button--block"
              to={linkTo}>
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Showcasing my DevOps journey through home lab projects, technical documentation, and professional experience."
    >
      {/* New Hero Section */}
      <header className={clsx('hero hero--primary')}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            Exploring DevOps, Automation, and Cloud Infrastructure Through Hands-On Projects.
          </p>
        </div>
      </header>

      <main>
        {/* Main Feature Cards Section */}
        <div className="container padding-vert--lg">
          <div className="row">
            <FeatureCard
              title="Home Lab"
              description="Explore the hardware, software, and configurations of my personal home lab setup."
              linkTo="/docs/home-lab"
              icon="⚙️"
            />
            <FeatureCard
              title="Tools & Tech"
              description="Discover guides and notes on Docusaurus, GitHub, Ansible, and other tools."
              linkTo="/docs/tools-technologies"
              icon="🛠️"
            />
            <FeatureCard
              title="Professional Resume"
              description="View my skills, professional experience, and certifications."
              linkTo="/resume"
              icon="📄"
            />
          </div>
        </div>

        {/* New "Featured Skills" Section */}
        <div className="container text--center padding-vert--lg">
          <Heading as="h2">My Favorite Tools</Heading>
          <div className="row" style={{justifyContent: 'center', gap: '1.5rem', marginTop: '2rem', alignItems: 'center'}}>
            {/* You'll need to add these images to your `static/img/logos` directory */}
            <img src="/img/logos/azure.svg" alt="Azure" title="Azure" style={{height: 40, width: 40}} />
            <img src="/img/logos/docker.svg" alt="Docker" title="Docker" style={{height: 40, width: 40}} />
            <img src="/img/logos/terraform.svg" alt="Terraform" title="Terraform" style={{height: 40, width: 40}} />
            <img src="/img/logos/ansible.svg" alt="Ansible" title="Ansible" style={{height: 40, width: 40}} />
            <img src="/img/logos/powershell.svg" alt="PowerShell" title="PowerShell" style={{height: 40, width: 40}} />
            <img src="/img/logos/dotnet.svg" alt=".NET" title=".NET" style={{height: 40, width: 40}} />
            <img src="/img/logos/vscode.svg" alt="VS Code" title="VS Code" style={{height: 40, width: 40}} />
          </div>
        </div>

        {/* New "Latest Documentation" Section */}
        <div className="container padding-vert--lg">
          <Heading as="h2" style={{textAlign: 'center', marginBottom: '2rem'}}>
            Latest Documentation
          </Heading>
          <div className="row">
            <FeatureCard
              title="Primary Proxmox Server"
              description="A deep dive into the core of my home lab, the Dell OptiPlex running media and networking services."
              linkTo="/docs/home-lab/hardware/pve01-dell-optiplex-3060"
              linkText="View Details"
              icon="🎛️"
            />
            <FeatureCard
              title="External Access with Caddy & Tailscale"
              description="How I securely expose internal services to the internet without a static home IP."
              linkTo="/docs/home-lab/hardware/ovh-vps"
              linkText="View Details"
              icon="🌐"
            />
             <FeatureCard
              title="Getting Started with GitHub"
              description="A guide to setting up organizations, repositories, and cloning with VS Code."
              linkTo="/docs/tools-technologies/github/github-setup"
              linkText="Read Guide"
              icon="⭐"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}