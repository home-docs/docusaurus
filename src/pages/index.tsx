import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Magnet from '../components/Magnet';

function FeatureCard({ title, description, linkTo, icon, linkText = 'Explore', className }) {
  return (
    <div className={clsx('col margin-bottom--lg', className)}>
      <Magnet padding={50} magnetStrength={8} disabled={false}>
        <div className='card' style={{ height: '100%' }}>
          <div className='card__header'>
            {icon && (
              <div className='card__icon' style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {icon}
              </div>
            )}
            <Heading as='h3'>{title}</Heading>
          </div>
          <div className='card__body'>
            <p>{description}</p>
          </div>
          {linkTo && (
            <div className='card__footer'>
              <Link className='button button--secondary button--block' to={linkTo}>
                {linkText}
              </Link>
            </div>
          )}
        </div>
      </Magnet>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title='Home'
      description='Showcasing my DevOps journey through home lab projects, technical documentation, and professional experience.'
    >
      <header className={clsx('hero hero--primary')}>
        <div className='container'>
          <Heading as='h1' className='hero__title'>
            {siteConfig.title}
          </Heading>
          <p className='hero__subtitle'>
            Exploring DevOps, Automation, and Cloud Infrastructure Through Hands-On Projects.
          </p>
        </div>
      </header>

      <main>
        <div className='container padding-vert--lg' style={{ maxWidth: '90%', width: '1200px' }}>
          <div className='row' style={{ justifyContent: 'center', gap: '2rem' }}>
            <FeatureCard
              className='col--5'
              title='Home Lab'
              description='Explore the hardware, software, and configurations of my personal home lab setup.'
              linkTo='/docs/home-lab'
              icon='🎛️'
            />
            <FeatureCard
              className='col--5'
              title='Tools & Tech'
              description='Discover guides on Docusaurus, GitHub, Ansible, and other tools.'
              linkTo='/docs/tools-technologies'
              icon='🛠️'
            />
          </div>
        </div>

        <div className='container text--center padding-vert--lg' style={{ maxWidth: '90%', width: '1200px' }}>
          <Heading as='h2'>My Favorite Tools</Heading>
          <div
            className='row'
            style={{
              justifyContent: 'center',
              gap: '1.5rem',
              marginTop: '2rem',
              alignItems: 'center',
            }}
          >
            <img
              src='/img/logos/azure.svg'
              alt='Azure'
              title='Azure'
              style={{ height: 40, width: 40 }}
            />
            <img
              src='/img/logos/docker.svg'
              alt='Docker'
              title='Docker'
              style={{ height: 40, width: 40 }}
            />
            <img
              src='/img/logos/terraform.svg'
              alt='Terraform'
              title='Terraform'
              style={{ height: 40, width: 40 }}
            />
            <img
              src='/img/logos/ansible.svg'
              alt='Ansible'
              title='Ansible'
              style={{ height: 40, width: 40 }}
            />
            <img
              src='/img/logos/powershell.svg'
              alt='PowerShell'
              title='PowerShell'
              style={{ height: 40, width: 40 }}
            />
            <img
              src='/img/logos/dotnet.svg'
              alt='.NET'
              title='.NET'
              style={{ height: 40, width: 40 }}
            />
            <img
              src='/img/logos/vscode.svg'
              alt='VS Code'
              title='VS Code'
              style={{ height: 40, width: 40 }}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
