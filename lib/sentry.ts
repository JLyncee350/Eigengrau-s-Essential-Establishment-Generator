import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'

if (process.env.NODE_ENV === 'production') {
  console.log('Initializing sentry.')

  // Disable sentry if we're running locally, even if production.
  const enabled = location.origin !== 'file://'

  Sentry.init({
    enabled,
    dsn: 'https://92c3fb4ac9054e9987d39969cc55969a@o365643.ingest.sentry.io/5469192',
    integrations: [
      new Integrations.BrowserTracing()
    ],
    tracesSampleRate: 0.2
  })
}
