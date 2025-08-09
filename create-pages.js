const fs = require('fs');
const path = require('path');

// Define all the routes that need "Under Construction" pages
const routes = [
  // Organizations
  { path: '/dashboard/organizations/manage', title: 'Manage Organizations', name: 'Organization management' },
  { path: '/dashboard/organizations/settings', title: 'Organization Settings', name: 'Organization settings' },
  { path: '/dashboard/organizations/assistants', title: 'AI Assistants', name: 'AI assistant configuration' },
  
  // Analytics
  { path: '/dashboard/analytics/overview', title: 'Analytics Dashboard', name: 'Analytics dashboard' },
  { path: '/dashboard/analytics/calls', title: 'Call Performance', name: 'Call performance analytics' },
  { path: '/dashboard/analytics/conversion', title: 'Conversion Rates', name: 'Conversion tracking' },
  { path: '/dashboard/analytics/roi', title: 'ROI Tracking', name: 'ROI analysis' },
  { path: '/dashboard/analytics/reports', title: 'Custom Reports', name: 'Custom reporting' },
  
  // Billing
  { path: '/dashboard/billing/plans', title: 'Plans & Limits', name: 'Plans and limits' },
  { path: '/dashboard/billing/purchase', title: 'Purchase Credits', name: 'Credit purchasing' },
  { path: '/dashboard/billing/settings', title: 'Billing Settings', name: 'Billing settings' },
  
  // Settings
  { path: '/dashboard/settings/account', title: 'Account Settings', name: 'Account settings' },
  { path: '/dashboard/settings/profile', title: 'Profile Settings', name: 'Profile settings' },
  { path: '/dashboard/settings/security', title: 'Security & Privacy', name: 'Security settings' },
  { path: '/dashboard/settings/integrations', title: 'Integrations', name: 'Integration management' },
  { path: '/dashboard/settings/api', title: 'API & Webhooks', name: 'API access' },
  
  // Help
  { path: '/dashboard/help/documentation', title: 'Documentation', name: 'Documentation' },
  { path: '/dashboard/help/tutorials', title: 'Tutorials', name: 'Tutorials' },
  { path: '/dashboard/help/faq', title: 'FAQ', name: 'FAQ section' },
  { path: '/dashboard/help/support', title: 'Contact Support', name: 'Support contact' },
  { path: '/dashboard/help/community', title: 'Community', name: 'Community forums' },
];

// Template for the page content
const getPageContent = (title, name) => `"use client"

import { UnderConstruction } from "@/components/under-construction"

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="container py-6">
      <h1 className="text-2xl font-bold mb-6">${title}</h1>
      <UnderConstruction pageName="${name}" estimatedCompletion="in our next update" />
    </div>
  )
}`;

// Create the pages
routes.forEach(route => {
  // Correctly handle the path for Next.js app directory structure
  const pageDirPath = path.join(__dirname, 'src/app', route.path);
  const filePath = path.join(pageDirPath, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(pageDirPath)) {
    fs.mkdirSync(pageDirPath, { recursive: true });
    console.log(`Created directory: ${pageDirPath}`);
  }
  
  // Create the page file
  fs.writeFileSync(filePath, getPageContent(route.title, route.name));
  console.log(`Created page: ${filePath}`);
});

console.log('All "Under Construction" pages have been created successfully!');
