import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './resume.module.css';

const professionalSummaryText = `Tech Leader with 12+ years’ experience driving software solutions and technical operations. Expert in implementation, DevOps management, and automation. Strong advocate for DevOps strategies, leading automation initiatives, and ensuring robust testing practices. Holds Microsoft Azure Fundamentals and Professional Scrum Master certifications, backed by a comprehensive skill set in Azure DevOps, SQL, and Microsoft technologies. Known for exceptional problem-solving skills and effective communication, fostering collaboration among stakeholders, team members, and clients.`;

const skillsList = [
  'Azure DevOps', 'Terraform', 'Ansible', 'PowerShell', 'Bash', 'Docker', '.NET', 'ASP.NET MVC', 'C#', 'SQL Server', 'SSRS', 'SSIS', 'TSQL', 'JIRA', 'Confluence'
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
          'Lead the implementation, deployment, and integration of solutions to ensure successful delivery, high quality, and sustainability.',
          'Oversee all aspects of solution deployment and technical operations.',
          'Manage the DevOps team, including workflow assignment, monitoring, and maintaining quality and efficiency.',
          'Manage the Robotic Process Automation team to help other teams automate their processes.',
          'Strategize, build, configure, test, and deploy technology solutions.',
          'Advocate for DevOps strategies and implementation goals.',
          'Automate, test, and ensure the maintenance of systems.',
          'Participate actively in automation testing and its implementation.',
          'Analyze and approve new code contributions.',
        ],
      },
      {
        title: 'Module Lead',
        dates: 'April 2021 – August 2023',
        responsibilities: [
          'Strategize and prioritize development objectives by collaborating with diverse stakeholders, including Business Analysts, Product Owners, and cross-functional teams.',
          'Manage the team\'s JIRA board and present tasks to the Change Approval Board for efficient execution.',
          'Ensure the smooth progression of changes into UAT and Production environments.',
          'Review and approve new code to enforce established standards for quality control.',
          'Update and create documentation to ensure complete understanding of application functionalities.',
          'Supervise the development and service request queues for optimal team efficiency.',
          'Drive automation, testing, and continuous system maintenance to streamline processes.',
          'Proactively participate in the automation testing process and its implementation for robust solutions.',
          'Lead the migration of the legacy ERP platform to a modern .NET Core web application, enhancing technological capabilities.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        dates: 'October 2018 – March 2021',
        responsibilities: [
          'Developed and maintained an ERP system for organization-wide HR and Budgeting.',
          'Contributed to development and review tasks as an active member of the team.',
          'Collaborated with Users and Support Teams to diagnose technical issues and provided solutions.',
          'Conducted root cause analysis for long-standing technical problems.',
          'Maintained and modernized legacy code to ensure functionality and relevance.',
          'Identified opportunities for automation and scripted automation tasks using PowerShell.',
        ],
      },
    ],
  },
  {
    company: 'Meredith Corporation (Formerly Time Analytic & Shared Services), Bengaluru - India',
    overallDates: 'March 2017 – October 2018',
    roles: [
      {
        title: 'Senior Analyst (SDE II)',
        dates: 'March 2017 – October 2018',
        responsibilities: [
          'Developed and maintained "Direct Commerce" an in-house supply chain management and billing platform, which was instrumental in distributing globally recognized magazines such as National Geographic, People, and Sports Illustrated to hundreds of thousands of individuals worldwide.',
          'Extracted data from diverse sources, including Oracle, Direct Commerce, and other applications, to generate insightful reports for stakeholders in the business, sales, and finance sectors.',
          'Collaborated as a dedicated member of the development team and contributed to both ongoing development and enhancement tasks.',
          'Conducted peer code testing for fellow developers to ensure code quality and consistency.',
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
        dates: 'April 2014 – March 2017',
        responsibilities: [
          'Collaborated with cross-functional Agile teams to design and deploy components for a financial solutions product using .NET technologies.',
          'Ensured coding standards, best practices, and architectural guidelines were adhered to throughout the development lifecycle.',
          'Managed SQL Server databases, emphasizing data integrity, performance, and security.',
          'Played a pivotal role in QA collaboration, defined test cases, ensured test coverage, and addressed reported issues.',
          'Mentored junior developers, offering code reviews and guidance, and bolstered the team\'s overall skill set.',
        ],
      },
      {
        title: 'Project Engineer',
        dates: 'August 2012 – March 2014',
        responsibilities: [
          'Oversaw a large-scale web farm with 300+ servers, ensuring optimal performance for a major Canadian e-commerce platform.',
          'Conducted proactive monitoring and maintenance, identifying potential issues, applying security patches, and executing configuration updates.',
          'Engaged with diverse teams, including developers and network engineers, for issue resolution and system improvements.',
          'Analysed server performance data to provide actionable insights for system enhancements.',
          'Managed on-call duties, offering prompt solutions for urgent issues outside regular hours.',
        ],
      },
    ],
  },
];

const educationHistory = [
  {
    degree: 'MTech, Software Engineering',
    institution: 'BITS Pilani (Wipro WASE Program)',
    dates: 'August 2012 – August 2016',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Bangalore University (Seshadripuram College, Bengaluru)',
    dates: 'June 2009 – April 2012',
  },
];

const certificationsList = [
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    thumbnailUrl: 'https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2022-09/asset_44psmi_0.png',
    badgeUrl: 'https://www.credly.com/badges/3010c0bf-8ac9-4659-b798-497421f995ae/public_url',
    altText: 'Professional Scrum Master I Badge'
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    thumbnailUrl: 'https://learn.microsoft.com/ja-jp/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    badgeUrl: 'https://learn.microsoft.com/api/credentials/share/en-in/marathenikhil28/65954A8186F59E98?sharingId=43ED59A1D003A46B',
    altText: 'Microsoft Certified Azure Fundamentals Badge'
  },
];

export default function ResumePage(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const profileImageUrl = useBaseUrl('/img/nikhil_resume_photo.jpeg');

  return (
    <Layout
      title={`Resume`}
      description={`Professional resume for ${siteConfig.title}. ${professionalSummaryText.substring(0, 160)}...`}
    >
      <main className={styles.resumeMainContent}>

        <section className={clsx(styles.resumeSection, styles.profileHeader)}>
          <div className={styles.profileText}>
            <Heading as="h1" className={styles.profileName}>
              {siteConfig.title} {/* This will be "Nikhil Upendra Marathe" */}
            </Heading>
            <p className={styles.profileTitle}>
              Tech Leader | DevOps | Professional Scrum Master {/* Or your preferred title */}
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
          <Heading as="h2" className={styles.sectionHeading}>
            Professional Summary
          </Heading>
          <p className={styles.summaryText}>{professionalSummaryText}</p>
        </section>

        <section className={styles.resumeSection}>
          <Heading as="h2" className={styles.sectionHeading}>
            Skills
          </Heading>
          <ul className={styles.skillsList}>
            {skillsList.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.resumeSection} id="work-history">
          <Heading as="h2" className={styles.sectionHeading}>
            Work History
          </Heading>
          {workHistory.map((job, jobIndex) => (
            <div key={jobIndex} className={styles.jobEntry}>
              <Heading
                as="h3"
                className={styles.companyName}
                title={`Dates: ${job.overallDates}`}
              >
                {job.company}
              </Heading>
              {job.roles.map((role, roleIndex) => (
                <div key={roleIndex} className={styles.jobRole}>
                  <Heading
                    as="h4"
                    className={styles.roleTitle}
                    title={`Dates: ${role.dates}`}
                  >
                    {role.title}
                  </Heading>
                  <p className={styles.responsibilitiesLabel}><strong>Responsibilities:</strong></p>
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

        <section className={styles.resumeSection} id="education">
          <Heading as="h2" className={styles.sectionHeading}>
            Education
          </Heading>
          {educationHistory.map((edu, index) => (
            <div key={index} className={styles.educationEntry}>
              <Heading
                as="h3"
                className={styles.degreeName}
                title={`Dates: ${edu.dates}`}
              >
                {edu.degree}
              </Heading>
              <div className={styles.educationDetails}>
                <p className={styles.institutionName}>{edu.institution}</p>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.resumeSection} id="certifications">
          <Heading as="h2" className={styles.sectionHeading}>
            Certifications
          </Heading>
          <div className={styles.certificationsContainer}>
            {certificationsList.map((cert, index) => (
              <div key={index} className={styles.certificationEntry}>
                {cert.thumbnailUrl && cert.badgeUrl && (
                  <a
                    href={cert.badgeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificationLink}
                  >
                    <img
                      src={cert.thumbnailUrl}
                      alt={cert.altText || `${cert.name} badge`}
                      className={styles.certificationThumbnail}
                    />
                  </a>
                )}
                <div className={styles.certificationInfo}>
                  <Heading as="h3" className={styles.certificationName}>
                    {cert.name}
                  </Heading>
                  <p className={styles.certificationIssuer}>Issued by: {cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}