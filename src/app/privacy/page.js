"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// VECTOR ICONS FOR SECTIONS
const IconData = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
);
const IconShield = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const IconSettings = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1-2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
);
const IconCookie = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
);
const IconLink = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
);
const IconEdit = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
);
const IconEmail = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);
const IconBuilding = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>
);
const IconUser = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);
const IconPill = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>
);
const IconUsers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconDevice = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
);
const IconCamera = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
);
const IconLayers = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const IconServer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);
const IconLock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
);
const IconShare = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
);
const IconBell = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
);
const IconClock = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);
const IconTrash = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
);
const IconAdmin = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const IconChild = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
);
const IconCheckList = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
);
const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);

export default function PrivacyPage() {
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'medx', or 'dignep'
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tabParam = params.get('tab');
      if (tabParam === 'dignep') {
        setActiveTab('dignep');
      } else if (tabParam === 'medx') {
        setActiveTab('medx');
      } else if (tabParam === 'all') {
        setActiveTab('all');
      }
    }

    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      });
    }, { threshold: 0.05 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  // PREVIOUS / GENERAL DIGNEP PRIVACY SECTIONS
  const dignepSections = [
    {
      id: "general-1",
      icon: <IconData />,
      title: "1. Information Collection",
      content: "We collect information that you provide directly to us, such as when you fill out a contact form or subscribe to our newsletter. This may include your name, email address, and phone number."
    },
    {
      id: "general-2",
      icon: <IconSettings />,
      title: "2. Use of Information",
      content: "We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects and inquiries, and to send you updates."
    },
    {
      id: "general-3",
      icon: <IconCookie />,
      title: "3. Cookies and Tracking",
      content: "Our website uses cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings if preferred."
    },
    {
      id: "general-4",
      icon: <IconShield />,
      title: "4. Data Security",
      content: "We take reasonable measures to protect your personal information from unauthorized access. However, no internet transmission is ever fully secure."
    },
    {
      id: "general-5",
      icon: <IconLink />,
      title: "5. Third-Party Links",
      content: "Our site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites and recommend reading their policies."
    },
    {
      id: "general-6",
      icon: <IconEdit />,
      title: "6. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated 'Last updated' date for transparency."
    },
    {
      id: "general-7",
      icon: <IconEmail />,
      title: "7. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact our data team at dignepaltechnologies@gmail.com."
    }
  ];

  // NEW MEDX PRODUCT PRIVACY SECTIONS
  const medxSections = [
    {
      id: "medx-1",
      icon: <IconData />,
      title: "1. Introduction",
      content: "Welcome to MedX by Dignep. MedX is an Enterprise Resource Planning (ERP) and pharmacy management application developed and operated by Dig Nepal Technologies Pvt. Ltd. (Dignep). MedX is designed to help pharmacies, medical stores, healthcare businesses, and distributors manage sales, purchases, inventory, customers, suppliers, financial records, and other business operations. This Privacy Policy explains how we collect, use, store, protect, and manage information when you use the MedX mobile application, web application, and related services. By creating an account or using MedX, you acknowledge that you have read and understood this Privacy Policy."
    },
    {
      id: "medx-2",
      icon: <IconBuilding />,
      title: "2. Who We Are",
      details: [
        { label: "Developer / Service Provider", val: "Dig Nepal Technologies Pvt. Ltd. (Dignep)" },
        { label: "Product", val: "MedX by Dignep" },
        { label: "Privacy & Support Email", val: "dignepaltechnologies@gmail.com", isEmail: true },
        { label: "Address", val: "Dhangadhi-04, Kailali, Nepal" },
        { label: "Website", val: "https://dignep.com", isLink: true }
      ],
      content: "MedX provides business-management and pharmacy-management services to registered firms and their authorized users. For questions regarding this Privacy Policy or your information, please contact us at dignepaltechnologies@gmail.com."
    },
    {
      id: "medx-3",
      icon: <IconUser />,
      title: "3. Information We Collect",
      subsections: [
        {
          subtitle: "3.1 Account and User Information",
          items: [
            "Name, Email address, and Phone/mobile number",
            "Username, Password or authentication credentials",
            "User role, permissions, login, and account activity",
            "Firm Code associated with the user account",
            "Note: Passwords are protected using appropriate security mechanisms and are not stored as readable plain-text passwords."
          ]
        },
        {
          subtitle: "3.2 Firm and Business Information",
          items: [
            "Firm Code: Unique business environment identifier",
            "Firm/business name, business address, and contact details",
            "PAN/VAT or other business registration information",
            "Business logo, business type, and branch/location info",
            "Subscription and account status"
          ]
        }
      ],
      content: "Depending on how you use MedX, we collect account credentials, authorized user role details, and unique Firm Code parameters to manage your business environment securely."
    },
    {
      id: "medx-4",
      icon: <IconPill />,
      title: "4. Pharmacy and Business Data",
      subsections: [
        {
          subtitle: "Products and Inventory",
          items: [
            "Product names, SKU, Barcodes, Categories, Brands, and Units",
            "Batch numbers, Manufacturing dates, Expiry dates",
            "Purchase prices, Selling prices, Stock quantities, Min stock levels, Adjustments"
          ]
        },
        {
          subtitle: "Purchase & Sales Information",
          items: [
            "Supplier info, Purchase invoices, Batch data, Taxes, Discounts, Payment status",
            "Customer info, Sales invoices, Selling rates, Transaction dates, Sales totals"
          ]
        },
        {
          subtitle: "Financial and Reporting Information",
          items: [
            "Sales reports, Purchase reports, Stock & Financial reports",
            "Daybook records, Receivable/Payable info, Cash-flow data, Performance analytics"
          ]
        }
      ],
      content: "MedX allows authorized users to store, manage, and process comprehensive business records required for pharmacy ERP and health enterprise operations."
    },
    {
      id: "medx-5",
      icon: <IconUsers />,
      title: "5. Customer and Supplier Information",
      items: [
        "Customer & Supplier Name, Phone number, Address, and Email address",
        "Account balance, Transaction history, Purchase/Sales records",
        "Invoice history and payment logs"
      ],
      content: "Businesses using MedX may enter information about their customers and suppliers. The business using MedX is responsible for ensuring it has an appropriate legal basis to process such information. MedX processes this data strictly to provide business-management services."
    },
    {
      id: "medx-6",
      icon: <IconDevice />,
      title: "6. Device and Technical Information",
      items: [
        "Device type, Operating system, and Application version",
        "Device configuration, IP address, Network information",
        "Login timestamps, Error & diagnostic logs, Authentication sessions"
      ],
      content: "We automatically receive limited technical telemetry to operate, secure, troubleshoot, and optimize service performance."
    },
    {
      id: "medx-7",
      icon: <IconCamera />,
      title: "7. Camera and Barcode Scanning",
      items: [
        "Camera is accessed temporarily ONLY when the user explicitly activates barcode scanning.",
        "Camera is used to identify products and streamline stock entry.",
        "MedX DOES NOT continuously access or monitor your device camera.",
        "Camera permissions are requested transparently via your operating system."
      ],
      content: "MedX provides integrated barcode scanning features to streamline stock management and point-of-sale checkout."
    },
    {
      id: "medx-8",
      icon: <IconSettings />,
      title: "8. How We Use Information",
      items: [
        "Create, authenticate, and manage user accounts and verify Firm Codes",
        "Provide pharmacy ERP functionality, sales, purchase, and stock management",
        "Generate invoices, financial reports, and maintain transaction logs",
        "Maintain system security, detect unauthorized access, and troubleshoot bugs",
        "Provide customer support and comply with applicable legal requirements"
      ],
      content: "We strictly use collected information to deliver and maintain application functionality. We do not use business transaction data for unrelated purposes."
    },
    {
      id: "medx-9",
      icon: <IconLayers />,
      title: "9. Firm-Based Data Separation",
      content: "MedX uses a multi-tenant firm-based architecture to isolate business data between registered organizations. Each business is assigned a unique Firm Code. Upon login, user credentials and Firm Code are validated to route requests strictly against that business's environment. Users cannot access data outside their authorized firm."
    },
    {
      id: "medx-10",
      icon: <IconServer />,
      title: "10. Data Storage",
      content: "Business and account records (including inventory, invoices, accounts, customer lists, and system logs) are stored on secure server infrastructure. We implement reasonable technical and organizational measures to safeguard stored data against unauthorized access, loss, or alteration."
    },
    {
      id: "medx-11",
      icon: <IconLock />,
      title: "11. Data Security",
      items: [
        "Secure authentication and salted password hashing",
        "Role-Based Access Controls (RBAC) and permission scoping",
        "HTTPS / TLS encrypted transit for all client-server communications",
        "Database access control, automated backups, and security monitoring"
      ],
      content: "We employ industry-standard security protocols. Users remain responsible for keeping login credentials confidential and notifying us immediately of suspected unauthorized account access."
    },
    {
      id: "medx-12",
      icon: <IconShare />,
      title: "12. Data Sharing and Disclosure",
      content: "We DO NOT sell personal or business data to third parties. Information may only be disclosed when reasonably necessary to: provide MedX services via authorized infrastructure providers, protect system security/prevent fraud, comply with applicable laws or court orders, or facilitate corporate restructurings/mergers."
    },
    {
      id: "medx-13",
      icon: <IconLink />,
      title: "13. Third-Party Services",
      content: "MedX may utilize trusted third-party infrastructure (e.g. cloud hosting, analytics, push notifications, authentication) necessary for service delivery. Such providers process data under binding privacy obligations and are prohibited from using MedX business data for independent purposes."
    },
    {
      id: "medx-14",
      icon: <IconBell />,
      title: "14. Notifications and Communications",
      content: "We may contact you with service-critical communications, including account verification, security alerts, password recovery, billing updates, and technical maintenance announcements."
    },
    {
      id: "medx-15",
      icon: <IconClock />,
      title: "15. Data Retention",
      content: "We retain account and transaction records for as long as necessary to provide MedX services, maintain business transaction records, fulfill legal/statutory accounting requirements, and resolve disputes. Inactive or deleted accounts are disposed of securely according to data retention schedules."
    },
    {
      id: "medx-16",
      icon: <IconTrash />,
      title: "16. Account and Data Deletion",
      content: "Users may request deletion of their MedX account or personal data by emailing dignepaltechnologies@gmail.com with their Name, Registered Email/Phone, Firm Code, and deletion details. After identity verification, eligible accounts will be deleted, subject to legal or tax record retention requirements."
    },
    {
      id: "medx-17",
      icon: <IconAdmin />,
      title: "17. Business Data and Firm Administrator",
      content: "For business subscriptions, the Firm Administrator or business owner manages user access, role assignments, and permission controls. Requests from individual employee accounts may require authorization or routing through your firm's administrator."
    },
    {
      id: "medx-18",
      icon: <IconChild />,
      title: "18. Children's Privacy",
      content: "MedX is an enterprise business and pharmacy management tool not intended for children. We do not knowingly collect personal data from minors. If you believe a child has submitted personal details, please contact us for prompt removal."
    },
    {
      id: "medx-19",
      icon: <IconCheckList />,
      title: "19. Your Responsibilities",
      items: [
        "Providing accurate business and user credentials",
        "Maintaining confidentiality of passwords and authentication tokens",
        "Ensuring customer and supplier data entered into MedX is collected lawfully",
        "Restricting unauthorized employee access within your firm environment"
      ],
      content: "Businesses are responsible for ensuring their usage of MedX complies with local statutory healthcare, pharmacy, and data regulations."
    },
    {
      id: "medx-20",
      icon: <IconEdit />,
      title: "20. Changes to This Privacy Policy",
      content: "We may periodically update this Privacy Policy to reflect app enhancements, regulatory updates, or technological changes. Material updates will be indicated by the 'Last Updated' date at the top of the policy."
    },
    {
      id: "medx-21",
      icon: <IconEmail />,
      title: "21. Contact Us",
      details: [
        { label: "Entity", val: "Dig Nepal Technologies Pvt. Ltd. (Dignep)" },
        { label: "Product", val: "MedX by Dignep" },
        { label: "Privacy & Support Email", val: "dignepaltechnologies@gmail.com", isEmail: true },
        { label: "Office Address", val: "Dhangadhi-04, Kailali, Nepal" },
        { label: "Official Website", val: "https://dignep.com", isLink: true }
      ],
      content: "For privacy questions, access, correction, or data deletion requests, reach out directly to our dedicated privacy support team."
    },
    {
      id: "medx-22",
      icon: <IconShield />,
      title: "22. Consent",
      content: "By creating an account or using the MedX mobile or web application, you acknowledge that you have read, understood, and agreed to the data practices described in this Privacy Policy."
    }
  ];

  const filterList = (list) => {
    if (!searchQuery.trim()) return list;
    const q = searchQuery.toLowerCase();
    return list.filter(s => {
      const titleMatch = s.title.toLowerCase().includes(q);
      const contentMatch = s.content.toLowerCase().includes(q);
      const itemsMatch = s.items ? s.items.some(i => i.toLowerCase().includes(q)) : false;
      const subMatch = s.subsections ? s.subsections.some(sub => sub.subtitle.toLowerCase().includes(q) || sub.items.some(i => i.toLowerCase().includes(q))) : false;
      return titleMatch || contentMatch || itemsMatch || subMatch;
    });
  };

  const filteredMedx = filterList(medxSections);
  const filteredDignep = filterList(dignepSections);

  const showMedx = activeTab === 'all' || activeTab === 'medx';
  const showDignep = activeTab === 'all' || activeTab === 'dignep';

  return (
    <main style={{backgroundColor: "var(--bg-navy)", minHeight: "100vh"}}>
      {/* HERO BANNER */}
      <div className="hero" style={{
        minHeight: "auto",
        padding: "160px 0 70px", 
        background: "var(--bg-deep)", 
        position: "relative", 
        overflow: "hidden",
        textAlign: "center",
        display: "block"
      }}>
        <div className="hero-bg-grid"></div>
        <div className="hero-orb-1" style={{opacity: 0.5}}></div>
        <div className="hero-orb-2" style={{opacity: 0.4}}></div>
        
        <div className="container" style={{position: "relative", zIndex: 3}}>
          {/* BREADCRUMB */}
          <div className="fade-up" style={{
            display: "inline-flex", 
            alignItems: "center", 
            gap: "10px", 
            fontSize: "13px", 
            fontWeight: "700", 
            color: "var(--navy)", 
            marginBottom: "24px",
            background: "rgba(3, 78, 162, 0.05)",
            padding: "8px 20px",
            borderRadius: "100px",
            border: "1px solid rgba(3, 78, 162, 0.1)"
          }}>
            <Link href="/" style={{color: "inherit", textDecoration: "none"}}>Home</Link>
            <span style={{opacity: 0.4}}>/</span>
            <span style={{color: "var(--green-dark)"}}>Privacy Policy</span>
          </div>
          
          <h1 className="fade-up" style={{
            fontSize: "clamp(2.5rem, 6vw, 4.2rem)", 
            fontWeight: "800",
            marginBottom: "20px",
            letterSpacing: "-1.5px",
            color: "var(--navy-dark)",
            lineHeight: "1.15"
          }}>
            DigNep & MedX <span style={{color: "var(--green)"}}>Privacy Policy</span>
          </h1>
          
          <p className="fade-up" style={{
            margin: "0 auto 32px",
            maxWidth: "760px",
            fontSize: "18px",
            lineHeight: "1.7",
            color: "var(--text-body)",
            fontWeight: "500"
          }}>
            Transparent and professional privacy guidelines governing both DigNep enterprise operations and the MedX Pharmacy ERP application.
          </p>

          {/* VIEW FILTER SWITCHER */}
          <div className="fade-up" style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            background: "rgba(15, 23, 42, 0.06)",
            padding: "6px",
            borderRadius: "100px",
            gap: "6px",
            boxShadow: "inset 0 2px 4px rgba(0,0,0,0.04)"
          }}>
            <button
              onClick={() => setActiveTab('all')}
              style={{
                border: "none",
                padding: "11px 24px",
                borderRadius: "100px",
                fontSize: "14.5px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: activeTab === 'all' ? "var(--navy-dark)" : "transparent",
                color: activeTab === 'all' ? "var(--white)" : "var(--text-muted)",
                boxShadow: activeTab === 'all' ? "0 4px 14px rgba(0,0,0,0.12)" : "none"
              }}
            >
              📄 View All Policies
            </button>
            <button
              onClick={() => setActiveTab('medx')}
              style={{
                border: "none",
                padding: "11px 24px",
                borderRadius: "100px",
                fontSize: "14.5px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: activeTab === 'medx' ? "var(--white)" : "transparent",
                color: activeTab === 'medx' ? "var(--navy-dark)" : "var(--text-muted)",
                boxShadow: activeTab === 'medx' ? "0 4px 14px rgba(0,0,0,0.08)" : "none"
              }}
            >
              💊 MedX Product Policy
            </button>
            <button
              onClick={() => setActiveTab('dignep')}
              style={{
                border: "none",
                padding: "11px 24px",
                borderRadius: "100px",
                fontSize: "14.5px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: activeTab === 'dignep' ? "var(--white)" : "transparent",
                color: activeTab === 'dignep' ? "var(--navy-dark)" : "var(--text-muted)",
                boxShadow: activeTab === 'dignep' ? "0 4px 14px rgba(0,0,0,0.08)" : "none"
              }}
            >
              🏢 DigNep Platform Policy
            </button>
          </div>
        </div>
      </div>

      {/* QUICK HIGHLIGHT CARDS FOR MEDX & GENERAL */}
      <section style={{padding: "36px 0 0", backgroundColor: "var(--bg-navy)"}}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "18px"
          }}>
            <div style={{background: "var(--bg-card)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(3, 78, 162, 0.08)", display: "flex", gap: "16px", alignItems: "center"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "12px", background: "rgba(3, 78, 162, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--navy)", flexShrink: 0}}>
                <IconLayers />
              </div>
              <div>
                <h4 style={{fontSize: "15px", fontWeight: "700", color: "var(--navy-dark)", marginBottom: "4px"}}>Firm Code Isolation</h4>
                <p style={{fontSize: "13px", color: "var(--text-body)", opacity: 0.8}}>Multi-tenant business environment security.</p>
              </div>
            </div>

            <div style={{background: "var(--bg-card)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(20, 184, 166, 0.15)", display: "flex", gap: "16px", alignItems: "center"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "12px", background: "rgba(20, 184, 166, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--green-dark)", flexShrink: 0}}>
                <IconCamera />
              </div>
              <div>
                <h4 style={{fontSize: "15px", fontWeight: "700", color: "var(--navy-dark)", marginBottom: "4px"}}>Barcode Scanner</h4>
                <p style={{fontSize: "13px", color: "var(--text-body)", opacity: 0.8}}>Temporary camera access only when scanning.</p>
              </div>
            </div>

            <div style={{background: "var(--bg-card)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(14, 165, 233, 0.15)", display: "flex", gap: "16px", alignItems: "center"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "12px", background: "rgba(14, 165, 233, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--blue-dark)", flexShrink: 0}}>
                <IconLock />
              </div>
              <div>
                <h4 style={{fontSize: "15px", fontWeight: "700", color: "var(--navy-dark)", marginBottom: "4px"}}>Encrypted Transit</h4>
                <p style={{fontSize: "13px", color: "var(--text-body)", opacity: 0.8}}>Salted password hashes & TLS encryption.</p>
              </div>
            </div>

            <div style={{background: "var(--bg-card)", padding: "20px", borderRadius: "var(--radius-md)", border: "1px solid rgba(239, 68, 68, 0.15)", display: "flex", gap: "16px", alignItems: "center"}}>
              <div style={{width: "44px", height: "44px", borderRadius: "12px", background: "rgba(239, 68, 68, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#DC2626", flexShrink: 0}}>
                <IconTrash />
              </div>
              <div>
                <h4 style={{fontSize: "15px", fontWeight: "700", color: "var(--navy-dark)", marginBottom: "4px"}}>Account Deletion</h4>
                <p style={{fontSize: "13px", color: "var(--text-body)", opacity: 0.8}}>Dedicated email deletion request support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <section style={{padding: "50px 0 100px", backgroundColor: "var(--bg-navy)"}}>
        <div className="container">
          
          {/* SEARCH BAR */}
          <div style={{marginBottom: "48px", display: "flex", justifyContent: "center"}}>
            <div style={{
              position: "relative",
              width: "100%",
              maxWidth: "560px"
            }}>
              <input
                type="text"
                placeholder="Search all privacy topics (e.g. camera, firm code, deletion, cookies)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "16px 20px 16px 50px",
                  borderRadius: "100px",
                  border: "1px solid rgba(15, 23, 42, 0.12)",
                  fontSize: "15px",
                  outline: "none",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  backgroundColor: "var(--bg-card)",
                  color: "var(--text-dark)",
                  transition: "all 0.3s ease"
                }}
              />
              <div style={{
                position: "absolute",
                left: "18px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--mid-gray)"
              }}>
                <IconSearch />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: "absolute",
                    right: "16px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    border: "none",
                    background: "none",
                    fontSize: "14px",
                    color: "var(--mid-gray)",
                    cursor: "pointer"
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* PART 1: MEDX PRODUCT PRIVACY POLICY */}
          {showMedx && (
            <div style={{marginBottom: "70px"}}>
              <div style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 32px",
                borderLeft: "6px solid var(--green-dark)",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                marginBottom: "32px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px"
              }}>
                <div>
                  <h2 style={{fontSize: "26px", fontWeight: "800", color: "var(--navy-dark)", marginBottom: "4px"}}>
                    💊 MedX by Dignep – Privacy Policy
                  </h2>
                  <p style={{fontSize: "14px", color: "var(--text-muted)", margin: 0}}>
                    Effective & Last Updated: August 20, 2026 | Enterprise Pharmacy Management & ERP Application
                  </p>
                </div>
                <span style={{
                  background: "rgba(20, 184, 166, 0.12)",
                  color: "var(--green-dark)",
                  padding: "8px 18px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: "700"
                }}>
                  Product Privacy Policy
                </span>
              </div>

              <div style={{
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(460px, 1fr))", 
                gap: "32px",
                alignItems: "stretch"
              }}>
                {filteredMedx.map((s, idx) => (
                  <div 
                    key={s.id || idx} 
                    id={s.id}
                    className="fade-up" 
                    style={{
                      background: "var(--bg-card)",
                      padding: "36px",
                      borderRadius: "var(--radius-xl)",
                      border: "1px solid rgba(15, 23, 42, 0.05)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.borderColor = "var(--green)";
                      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.05)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
                    }}
                  >
                    <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                      <div style={{
                        width: "52px", 
                        height: "52px", 
                        background: "rgba(20, 184, 166, 0.08)", 
                        borderRadius: "16px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "var(--green-dark)",
                        flexShrink: 0
                      }}>
                        {s.icon}
                      </div>
                      <h3 style={{fontSize: "20px", fontWeight: "700", color: "var(--navy-dark)", fontFamily: "var(--font-heading)"}}>
                        {s.title}
                      </h3>
                    </div>

                    <p style={{fontSize: "15px", lineHeight: "1.8", color: "var(--text-body)", opacity: 0.9}}>
                      {s.content}
                    </p>

                    {s.details && (
                      <div style={{
                        background: "rgba(15, 23, 42, 0.02)",
                        borderRadius: "var(--radius-md)",
                        padding: "16px",
                        border: "1px solid rgba(15, 23, 42, 0.05)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px"
                      }}>
                        {s.details.map((d, i) => (
                          <div key={i} style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", fontSize: "14px", borderBottom: i < s.details.length - 1 ? "1px solid rgba(15, 23, 42, 0.04)" : "none", paddingBottom: i < s.details.length - 1 ? "8px" : "0"}}>
                            <span style={{fontWeight: "600", color: "var(--navy-dark)"}}>{d.label}:</span>
                            {d.isEmail ? (
                              <a href={`mailto:${d.val}`} style={{color: "var(--navy)", fontWeight: "600", textDecoration: "none"}}>{d.val}</a>
                            ) : d.isLink ? (
                              <a href={d.val} target="_blank" rel="noreferrer" style={{color: "var(--blue-dark)", fontWeight: "600", textDecoration: "none"}}>{d.val}</a>
                            ) : (
                              <span style={{color: "var(--text-body)"}}>{d.val}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {s.subsections && s.subsections.map((sub, i) => (
                      <div key={i} style={{marginTop: "6px"}}>
                        <h4 style={{fontSize: "15.5px", fontWeight: "700", color: "var(--navy-dark)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px"}}>
                          <span style={{width: "6px", height: "6px", borderRadius: "50%", background: "var(--green-dark)"}}></span>
                          {sub.subtitle}
                        </h4>
                        <ul style={{listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px"}}>
                          {sub.items.map((item, j) => (
                            <li key={j} style={{fontSize: "14px", color: "var(--text-body)", display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: "1.6"}}>
                              <span style={{color: "var(--green-dark)", fontWeight: "bold"}}>✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {s.items && (
                      <ul style={{listStyle: "none", padding: 0, margin: "4px 0 0", display: "flex", flexDirection: "column", gap: "8px"}}>
                        {s.items.map((item, i) => (
                          <li key={i} style={{
                            fontSize: "14px", 
                            color: "var(--text-body)", 
                            display: "flex", 
                            alignItems: "flex-start", 
                            gap: "10px", 
                            lineHeight: "1.6",
                            background: "rgba(3, 78, 162, 0.02)",
                            padding: "8px 12px",
                            borderRadius: "8px"
                          }}>
                            <span style={{color: "var(--blue-dark)", fontWeight: "bold"}}>▪</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PART 2: DIGNEP CORPORATE PRIVACY POLICY */}
          {showDignep && (
            <div>
              <div style={{
                background: "var(--bg-card)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 32px",
                borderLeft: "6px solid var(--navy-dark)",
                border: "1px solid rgba(15, 23, 42, 0.06)",
                marginBottom: "32px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px"
              }}>
                <div>
                  <h2 style={{fontSize: "26px", fontWeight: "800", color: "var(--navy-dark)", marginBottom: "4px"}}>
                    🏢 DigNep Platform Privacy Policy
                  </h2>
                  <p style={{fontSize: "14px", color: "var(--text-muted)", margin: 0}}>
                    Last Updated: April 28, 2026 | General Website & Enterprise Services Policy
                  </p>
                </div>
                <span style={{
                  background: "rgba(3, 78, 162, 0.08)",
                  color: "var(--navy-dark)",
                  padding: "8px 18px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: "700"
                }}>
                  Corporate Privacy Policy
                </span>
              </div>

              <div style={{
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fill, minmax(420px, 1fr))", 
                gap: "32px",
                alignItems: "stretch"
              }}>
                {filteredDignep.map((s, idx) => (
                  <div 
                    key={s.id || idx} 
                    id={s.id}
                    className="fade-up" 
                    style={{
                      background: "var(--bg-card)",
                      padding: "36px",
                      borderRadius: "var(--radius-xl)",
                      border: "1px solid rgba(15, 23, 42, 0.05)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                      display: "flex",
                      flexDirection: "column",
                      gap: "18px",
                      transition: "all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)",
                      cursor: "default"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.borderColor = "var(--blue)";
                      e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(15, 23, 42, 0.05)";
                      e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
                    }}
                  >
                    <div style={{display: "flex", alignItems: "center", gap: "16px"}}>
                      <div style={{
                        width: "52px", 
                        height: "52px", 
                        background: "rgba(39, 127, 196, 0.06)", 
                        borderRadius: "16px", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        color: "var(--blue)",
                        flexShrink: 0
                      }}>
                        {s.icon}
                      </div>
                      <h3 style={{fontSize: "20px", fontWeight: "700", color: "var(--navy-dark)", fontFamily: "var(--font-heading)"}}>
                        {s.title}
                      </h3>
                    </div>

                    <p style={{fontSize: "15px", lineHeight: "1.8", color: "var(--text-body)", opacity: 0.9}}>
                      {s.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EMPTY SEARCH STATE */}
          {filteredMedx.length === 0 && filteredDignep.length === 0 && (
            <div style={{textAlign: "center", padding: "80px 20px", color: "var(--text-muted)"}}>
              <p style={{fontSize: "18px", fontWeight: "600", marginBottom: "8px"}}>No privacy topics match your search query "{searchQuery}".</p>
              <button 
                onClick={() => setSearchQuery('')}
                style={{
                  background: "var(--navy)",
                  color: "white",
                  border: "none",
                  padding: "10px 24px",
                  borderRadius: "100px",
                  fontSize: "14px",
                  cursor: "pointer",
                  marginTop: "12px"
                }}
              >
                Clear Search Filter
              </button>
            </div>
          )}

          {/* FOOTER NOTICE */}
          <div className="fade-up" style={{
            marginTop: "80px", 
            textAlign: "center", 
            padding: "60px 40px", 
            background: "rgba(15, 23, 42, 0.02)", 
            borderRadius: "var(--radius-xl)", 
            border: "1px dashed rgba(15, 23, 42, 0.1)"
          }}>
            <p style={{marginBottom: "10px", fontSize: "16px", fontWeight: "700", color: "var(--navy-dark)"}}>
              Dig Nepal Technologies Pvt. Ltd. (Dignep) Privacy Standards
            </p>
            <p style={{fontSize: "14px", color: "var(--text-muted)", maxWidth: "660px", margin: "0 auto 24px", lineHeight: "1.7"}}>
              Both the DigNep Platform Privacy Policy and MedX Product Privacy Policy govern user privacy, data security, and compliance across our infrastructure.
            </p>
            <div style={{display: "flex", justifyContent: "center", gap: "16px"}}>
              <a 
                href="mailto:dignepaltechnologies@gmail.com" 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--navy-dark)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "100px",
                  textDecoration: "none",
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                <IconEmail /> Contact Privacy & Support Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
