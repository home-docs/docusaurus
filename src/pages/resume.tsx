import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './resume.module.css';

const professionalSummaryText = `A hands-on technical leader with 12+ years of experience specializing in legacy system optimization, infrastructure automation, and DevOps transformation. Proven ability to take undocumented, debt-laden systems and transform them into efficient, maintainable infrastructure. Delivered measurable impact across multiple engagements: optimized critical database queries to run 95% faster, reduced daily support tickets by over 75% through systematic root-cause analysis, and extended the operational life of a £800M revenue platform by 5+ years. Skilled at building automation that enables small teams to operate at scale, having created 40+ automations that allowed a team of 5 to manage workloads previously requiring 10+ engineers.`;

const skillsCategories = [
  {
    category: 'Cloud & Infrastructure',
    skills: ['Microsoft Azure', 'Terraform', 'OpenTofu', 'Ansible', 'Docker', 'Portainer', 'Proxmox'],
  },
  {
    category: 'CI/CD & Automation',
    skills: ['GitHub Actions', 'Azure DevOps Pipelines', 'PowerShell', 'Bash', 'n8n'],
  },
  {
    category: 'Development',
    skills: ['.NET', 'C#', 'Python', 'SQL Server', 'Oracle', 'REST APIs'],
  },
  {
    category: 'Networking & Security',
    skills: ['Tailscale', 'Caddy', 'Cloudflare', 'SSL/TLS Management', 'Bitwarden Secrets Manager'],
  },
  {
    category: 'Practices',
    skills: ['Infrastructure as Code', 'GitOps', 'Agile/Scrum', 'Technical Documentation'],
  },
];

const workHistory = [
  {
    company: 'RWS Group (Formerly SDL Technologies), Bengaluru - India',
    overallDates: 'October 2018 – April 2025',
    roles: [
      {
        title: 'DevOps Manager',
        dates: 'September 2023 – April 2025',
        responsibilities: [
          'Led a DevOps team of 6 engineers while providing cross-functional leadership to adjacent teams; participated in hiring decisions for 10+ engineers across the organization',
          'Transformed a reactive support model into a proactive DevOps practice by introducing Agile methodologies and automation-first culture',
          'Created 40+ automations spanning infrastructure provisioning (Terraform/Azure), CI/CD pipelines (GitHub Actions, Azure DevOps), and operational tasks (PowerShell modules), enabling a team of 5 to manage workloads previously requiring 10+ engineers',
          'Remained deeply hands-on: personally refactored critical components of a 20+ year old legacy system comprising 30+ modules and serving 10,000 users on a platform processing £800M in annual revenue',
          'Architected automation initiatives and developed PowerShell modules for system integration where native connectors were insufficient',
        ],
      },
      {
        title: 'Module Lead',
        dates: 'April 2021 – August 2023',
        responsibilities: [
          'Reduced daily incoming support tickets from 15+ to 2-3 by implementing systematic root-cause analysis and enforcing higher code quality standards',
          'Managed full development lifecycle using JIRA, coordinating UAT and production deployments while aligning development priorities with business objectives',
          'Established code review standards and optimized team workflows, improving delivery predictability and reducing production incidents',
        ],
      },
      {
        title: 'Senior Software Engineer',
        dates: 'October 2018 – March 2021',
        responsibilities: [
          'Stabilized core ERP system by refactoring legacy ASP.NET code, significantly reducing technical debt and improving application reliability',
          'Developed PowerShell automation that reduced a 2+ hour manual error-checking process to seconds, scheduled to run proactively and resolve issues before user impact',
          'Contributed to extending the operational life of a legacy platform by 5+ years through targeted performance optimizations and technical debt reduction',
        ],
      },
    ],
  },
  {
    company: 'Meredith Corporation (Formerly Time Analytic & Shared Services), Bengaluru - India',
    overallDates: 'March 2017 – October 2018',
    roles: [
      {
        title: 'Senior Analyst',
        dates: 'March 2017 – October 2018',
        responsibilities: [
          'Maintained and enhanced a core component of the Direct Commerce platform supporting global magazine distribution',
          'Built analytical reports from Oracle and application data to provide actionable insights for business decision-making',
          'Collaborated with development teams to implement features and resolve cross-functional technical issues',
        ],
      },
    ],
  },
  {
    company: 'Wipro Technologies, Pune, Kochi, Bengaluru - India',
    overallDates: 'August 2012 – March 2017',
    roles: [
      {
        title: 'Senior Project Engineer',
        dates: 'November 2016 – March 2017',
        responsibilities: [
          'Optimized SQL queries for critical financial reports, reducing execution time from over 4 minutes to under 10 seconds (95%+ improvement)',
          "Developed 'Easy Restore', a custom tool that streamlined database restoration from hours to under 15 minutes for 100GB+ databases",
          'Designed WPF applications using MVVM architecture, ensuring maintainable and testable codebases',
        ],
      },
      {
        title: 'Project Engineer',
        dates: 'August 2012 – November 2016',
        responsibilities: [
          'Supported a large-scale e-commerce platform, troubleshooting complex issues with cross-functional teams',
          'Provided 24/7 on-call support for critical incidents, maintaining system stability and availability',
        ],
      },
    ],
  },
];

const projectsList = [
  {
    name: 'Anterra Infrastructure',
    link: 'https://github.com/N28M/anterra',
    description:
      'Personal Infrastructure as Code project managing homelab and cloud resources using OpenTofu, Ansible, and Docker.',
    highlights: [
      'Multi-provider IaC (Cloudflare, Portainer) with Bitwarden Secrets Manager integration for zero-hardcoded credentials',
      'Automated DNS management via Cloudflare with 20+ records and intelligent proxy rules',
      'Docker orchestration through Portainer with 10+ self-hosted services (Immich, Jellyfin, n8n, Home Assistant)',
      'Caddy reverse proxy with automatic HTTPS via Cloudflare DNS-01 challenge',
      'Systemd service dependencies ensuring container reliability with network storage mounts',
    ],
  },
  {
    name: 'Portfolio & Technical Blog',
    link: 'https://mnik28.dev',
    description:
      'Personal documentation site built with Docusaurus featuring homelab guides, technical references for Ansible, GitHub, and infrastructure tooling, demonstrating commitment to knowledge sharing and continuous learning.',
    highlights: [],
  },
];

const educationHistory = [
  {
    degree: 'Master of Technology (M.Tech), Software Engineering',
    institution: 'Birla Institute of Technology and Science, Pilani',
    location: 'Bengaluru, India',
    dates: 'August 2012 – August 2016',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Bangalore University, Seshadripuram College',
    location: 'Bengaluru, India',
    dates: 'June 2009 – April 2012',
  },
];

const certificationsList = [
  {
    name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
    issuer: 'Microsoft',
    thumbnailUrl:
      'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main',
    badgeUrl:
      'https://learn.microsoft.com/api/credentials/share/en-us/marathenikhil28/DD9AFC8B97C19188?sharingId=43ED59A1D003A46B',
    altText: 'Microsoft Certified Azure Administrator Badge',
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    thumbnailUrl:
      'https://learn.microsoft.com/ja-jp/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    badgeUrl:
      'https://learn.microsoft.com/api/credentials/share/en-in/marathenikhil28/65954A8186F59E98?sharingId=43ED59A1D003A46B',
    altText: 'Microsoft Certified Azure Fundamentals Badge',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    issuer: 'Oracle',
    thumbnailUrl: '/img/OCI25AICFAV1.png',
    badgeUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=FC19D34DBC171DB6542D87139AE5996621921A0D85B76048F42C4EB70969F115',
    altText: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate Badge',
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    thumbnailUrl:
      'https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2022-09/asset_44psmi_0.png',
    badgeUrl: 'https://www.credly.com/badges/3010c0bf-8ac9-4659-b798-497421f995ae/public_url',
    altText: 'Professional Scrum Master I Badge',
  },
];

export default function ResumePage(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const profileImageUrl = useBaseUrl('/img/nikhil_resume_photo.jpeg');

  return (
    <Layout
      title={`Resume`}
      description={`Professional resume for ${siteConfig.title}. ${professionalSummaryText.substring(0, 160)}...`}
    >
      <main className={styles.resumeMainContent}>
        <section className={clsx(styles.resumeSection, styles.profileHeader)}>
          <div className={styles.profileText}>
            <Heading as='h1' className={styles.profileName}>
              {siteConfig.title} {/* This will be "Nikhil Upendra Marathe" */}
            </Heading>
            <p className={styles.profileTitle}>
              Azure Administrator (AZ-104) | DevOps & Infrastructure Automation
            </p>
          </div>
          <div className={styles.profileImageContainer}>
            <img
              src={profileImageUrl}
              alt={`Profile picture of ${siteConfig.title}`}
              className={styles.profileImage}
            />
          </div>
        </section>

        <section className={styles.resumeSection}>
          <Heading as='h2' className={styles.sectionHeading}>
            Professional Summary
          </Heading>
          <p className={styles.summaryText}>{professionalSummaryText}</p>
        </section>

        <section className={styles.resumeSection}>
          <Heading as='h2' className={styles.sectionHeading}>
            Skills
          </Heading>
          <div className={styles.skillsContainer}>
            {skillsCategories.map((category, catIndex) => (
              <div key={catIndex} className={styles.skillCategory}>
                <Heading as='h3' className={styles.skillCategoryName}>
                  {category.category}
                </Heading>
                <ul className={styles.skillsList}>
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className={styles.skillItem}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.resumeSection} id='work-history'>
          <Heading as='h2' className={styles.sectionHeading}>
            Work History
          </Heading>
          {workHistory.map((job, jobIndex) => (
            <div key={jobIndex} className={styles.jobEntry}>
              <Heading as='h3' className={styles.companyName} title={`Dates: ${job.overallDates}`}>
                {job.company}
              </Heading>
              {job.roles.map((role, roleIndex) => (
                <div key={roleIndex} className={styles.jobRole}>
                  <Heading as='h4' className={styles.roleTitle} title={`Dates: ${role.dates}`}>
                    {role.title}
                  </Heading>
                  <p className={styles.responsibilitiesLabel}>
                    <strong>Responsibilities:</strong>
                  </p>
                  <ul className={styles.responsibilitiesList}>
                    {role.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className={styles.responsibilityItem}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className={styles.resumeSection} id='projects'>
          <Heading as='h2' className={styles.sectionHeading}>
            Projects
          </Heading>
          {projectsList.map((project, index) => (
            <div key={index} className={styles.projectEntry}>
              <Heading as='h3' className={styles.projectName}>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {project.name}
                </a>
              </Heading>
              <p className={styles.projectDescription}>{project.description}</p>
              {project.highlights.length > 0 && (
                <ul className={styles.projectHighlightsList}>
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className={styles.projectHighlight}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className={styles.resumeSection} id='education'>
          <Heading as='h2' className={styles.sectionHeading}>
            Education
          </Heading>
          {educationHistory.map((edu, index) => (
            <div key={index} className={styles.educationEntry}>
              <Heading as='h3' className={styles.degreeName} title={`Dates: ${edu.dates}`}>
                {edu.degree}
              </Heading>
              <div className={styles.educationDetails}>
                <p className={styles.institutionName}>
                  {edu.institution}
                  {edu.location && ` — ${edu.location}`}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.resumeSection} id='certifications'>
          <Heading as='h2' className={styles.sectionHeading}>
            Certifications
          </Heading>
          <div className={styles.certificationsContainer}>
            {certificationsList.map((cert, index) =>
              cert.badgeUrl ? (
                <a
                  key={index}
                  href={cert.badgeUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={styles.certificationEntry}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {cert.thumbnailUrl && (
                    <img
                      src={cert.thumbnailUrl}
                      alt={cert.altText || `${cert.name} badge`}
                      className={styles.certificationThumbnail}
                    />
                  )}
                  <div className={styles.certificationInfo}>
                    <Heading as='h3' className={styles.certificationName}>
                      {cert.name}
                    </Heading>
                    <p className={styles.certificationIssuer}>Issued by: {cert.issuer}</p>
                  </div>
                </a>
              ) : null
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
