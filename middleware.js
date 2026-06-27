// middleware.js
// Vercel Routing Middleware — intercepts requests to password-protected case study pages.
// Checks for the portfolio-auth cookie set by /api/auth.
// Redirects unauthenticated users to /password.html.
// IMPORTANT: must be a default export for Vercel to detect this as middleware.

export default function middleware(request) {
  const url = new URL(request.url)
  const cookieHeader = request.headers.get('cookie') || ''

  // Parse cookies into a key-value object
  const cookies = Object.fromEntries(
    cookieHeader.split(';').map(c => {
      const [k, ...v] = c.trim().split('=')
      return [k, v.join('=')]
    })
  )

  const isAuthenticated = cookies['portfolio-auth'] === 'authenticated'

  if (!isAuthenticated) {
    const passwordPage = new URL('/password.html', request.url)
    passwordPage.searchParams.set('next', url.pathname)
    return Response.redirect(passwordPage.toString(), 302)
  }

  // Authenticated — allow request through
}

export const config = {
  matcher: [
    '/works/victim-hub.html',
    '/works/accessibility-support-hub.html'
  ]
}
