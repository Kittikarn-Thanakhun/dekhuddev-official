import { initializeApp, getApps } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

export function getFirebase() {
  const app = getApps().length ? getApps()[0] : initializeApp({
    apiKey:     process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId:  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    appId:      process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  })
  return { auth: getAuth(app), googleProvider: new GoogleAuthProvider() }
}
