/**
 * URL Validation Utility
 * 
 * This module provides functions for validating URLs in the Callify application.
 */

/**
 * Validates if a string is a properly formatted URL or a domain name with extension
 * 
 * @param url - The URL string or domain name to validate
 * @returns An object containing validation result and error message if applicable
 */
export function validateUrl(url: string): { isValid: boolean; errorMessage?: string } {
  // Trim the URL to remove any leading/trailing whitespace
  const trimmedUrl = url.trim();
  
  // Check if URL is empty
  if (!trimmedUrl) {
    return { isValid: false, errorMessage: "Please enter a website URL" };
  }

  // Check if it's a domain-only input (e.g., "example.com")
  const domainOnlyRegex = /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
  if (domainOnlyRegex.test(trimmedUrl)) {
    // Valid domain name format (e.g., "example.com")
    return { isValid: true };
  }

  try {
    // If not a simple domain, try to parse as a full URL
    const urlObj = new URL(trimmedUrl);
    
    // Check if the protocol is http or https
    if (urlObj.protocol !== 'http:' && urlObj.protocol !== 'https:') {
      return { 
        isValid: false, 
        errorMessage: "URL must start with http:// or https://" 
      };
    }
    
    // Check if the URL has a valid domain
    if (!urlObj.hostname || urlObj.hostname === 'localhost' || urlObj.hostname === '127.0.0.1') {
      return { 
        isValid: false, 
        errorMessage: "Please enter a valid website domain" 
      };
    }
    
    // Check for common TLDs or at least a dot in the domain
    const hasDot = urlObj.hostname.includes('.');
    if (!hasDot) {
      return { 
        isValid: false, 
        errorMessage: "Please enter a valid domain name (e.g., example.com)" 
      };
    }
    
    // URL passed all validation checks
    return { isValid: true };
  } catch (error) {
    // URL constructor will throw if the URL is invalid
    return { 
      isValid: false, 
      errorMessage: "Please enter a valid domain name (e.g., example.com) or full URL" 
    };
  }
}

/**
 * Normalizes a URL by ensuring it has a protocol and proper formatting
 * 
 * @param url - The URL string to normalize
 * @returns The normalized URL string
 */
export function normalizeUrl(url: string): string {
  let normalizedUrl = url.trim();
  
  // Add https:// if no protocol is specified
  if (!/^https?:\/\//i.test(normalizedUrl)) {
    normalizedUrl = `https://${normalizedUrl}`;
  }
  
  return normalizedUrl;
}

/**
 * Checks if a URL is reachable by making a HEAD request
 * Note: This should be used server-side to avoid CORS issues
 * 
 * @param url - The URL to check
 * @returns A promise that resolves to a boolean indicating if the URL is reachable
 */
export async function isUrlReachable(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      mode: 'no-cors' // This helps with CORS issues but will still fail client-side for cross-origin requests
    });
    return true;
  } catch (error) {
    console.error('Error checking URL reachability:', error);
    return false;
  }
}
