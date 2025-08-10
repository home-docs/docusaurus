import type { ReactNode } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';

import styles from './resume.module.css';

const professionalSummaryText = `A hands-on technology leader with over 12 years of experience specializing in DevOps, process automation, and infrastructure transformation. Proven track record of enhancing efficiency by re-architecting systems to run 95% faster and reducing daily support tickets by over 75%. Successfully led a DevOps and RPA transformation, creating over 40 automations and enabling a team of 5 to manage a workload previously requiring more than 10 engineers. Proficient in modern cloud and automation tools including Azure, Terraform, Ansible, .NET and PowerShell`;

const skillsList = [
  'Microsoft Azure', 'Terraform', 'Ansible', 'JIRA', '.NET', 'C#', 'WPF', 'MVVM', 'MS SQL Server', 'Oracle', 'PowerShell', 'BluePrism RPA', 'Docker'
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
          'Led the transformation of the DevOps and Robotic Process Automation (RPA) teams, introducing Agile methodologies to a reactive workflow.',
          'Spearheaded the creation of over 40 automations using Azure, Terraform, Ansible, and BluePrism RPA, enabling a team of 5 to manage the workload of 10+',
          'Remained deeply hands-on, actively coding, resolving complex technical issues, and overhauling significant undocumented infrastructure.',
        ],
      },
      {
        title: 'Module Lead',
        dates: 'April 2021 – August 2023',
        responsibilities: [
          'As a certified Scrum Master, led the team to reduce daily incoming tickets from 15+ down to 2-3 by implementing root-cause analysis and higher code quality standards.',
          'Managed the full development lifecycle using JIRA, ensuring timely UAT and production deployments while aligning development objectives with business goals.',
          'Oversaw all code reviews and managed development/service request queues to optimize team efficiency.',
        ],
      },
      {
        title: 'Senior Software Engineer',
        dates: 'October 2018 – March 2021',
        responsibilities: [
          'Enhanced and stabilized the core ERP system by refactoring legacy ASP.NET code, significantly reducing technical debt and improving application stability.',
          'Developed a PowerShell script to automate a 2+hour manual error-checking process, reducing its runtime to seconds and scheduling it to proactively resolve issues.',
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
          'Played a hybrid role developing and maintaining a core component of the \'Direct Commerce\' platform for global magazine distribution.',
          'Generated actionable reports for business units using data from Oracle and other applications to guide decision-making.',
          'Collaborated with development teams to implement new features and resolve technical issues.',
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
          'Optimized SQL queries for key financial reports, reducing run-time from over 4 minutes to under 10 seconds.',
          'Developed \'Easy Restore\', a custom tool that streamlined the database restore process from several hours to under 15 minutes for large 50GB+ databases.',
          'Designed and deployed a WPF application using the MVVM architectural pattern, ensuring a clean and maintainable codebase.',
        ],
      },
      {
        title: 'Project Engineer',
        dates: 'August 2012 – March 2014',
        responsibilities: [
          'Maintained the health and performance of a large-scale e-commerce platform by troubleshooting complex issues with cross-functional teams.',
          'Provided 24/7 on-call support for critical incidents to ensure system stability.',
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
    name: 'Microsoft Certified: Azure Administrator (AZ-104)',
    issuer: 'Microsoft',
    thumbnailUrl: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main',
    badgeUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/marathenikhil28/DD9AFC8B97C19188?sharingId=43ED59A1D003A46B',
    altText: 'Microsoft Certified Azure Administrator Badge'
  },
  {
    name: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    thumbnailUrl: 'https://learn.microsoft.com/ja-jp/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg',
    badgeUrl: 'https://learn.microsoft.com/api/credentials/share/en-in/marathenikhil28/65954A8186F59E98?sharingId=43ED59A1D003A46B',
    altText: 'Microsoft Certified Azure Fundamentals Badge'
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    thumbnailUrl: 'https://scrumorg-website-prod.s3.amazonaws.com/drupal/inline-images/2022-09/asset_44psmi_0.png',
    badgeUrl: 'https://www.credly.com/badges/3010c0bf-8ac9-4659-b798-497421f995ae/public_url',
    altText: 'Professional Scrum Master I Badge'
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
              Tech Leader | Microsoft Certified: Azure Administrator | Professional Scrum Master {/* Or your preferred title */}
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