import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Try to get country from various headers set by CDN/proxy
  const country =
    request.headers.get('cf-ipcountry') ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('x-country-code') ||
    'US';

  return NextResponse.json({ country: country.toUpperCase() });
}
