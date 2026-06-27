// api/auth.js
// Vercel Serverless Function — validates the portfolio password.
// Reads PORTFOLIO_PASSWORD from Vercel environment variables.
// Sets a secure HttpOnly cookie on success and redirects to the protected page.
// On failure, redirects back to the password page with an error flag.

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed')
    return
  }

  const correctPassword = process.env.PORTFOLIO_PASSWORD
  if (!correctPassword) {
    res.status(500).send('Server error: PORTFOLIO_PASSWORD is not configured.')
    return
  }

  // Read and parse the raw request body (application/x-www-form-urlencoded)
  const rawBody = await new Promise((resolve, reject) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })

  const params = new URLSearchParams(rawBody)
  const submitted = params.get('password') || ''
  const next = params.get('next') || '/works.html'

  if (submitted === correctPassword) {
    // 8-hour session cookie — HttpOnly prevents JS access, Secure requires HTTPS
    res.setHeader('Set-Cookie', [
      'portfolio-auth=authenticated; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800'
    ])
    res.writeHead(302, { Location: next })
    res.end()
  } else {
    const errorPath = '/password.html?next=' + encodeURIComponent(next) + '&error=1'
    res.writeHead(302, { Location: errorPath })
    res.end()
  }
}
