import { initializeApp } from 'firebase/app'
import { getStorage, setStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCh6r2QA0yIApjqHWoOymD7PKdjndVej30',
  authDomain: 'amethyst-e71d3.firebaseapp.com',
  projectId: 'amethyst-e71d3',
  storageBucket: 'amethyst-e71d3.appspot.com',
  messagingSenderId: '675521822317',
  appId: '1:675521822317:web:82e59820e77cdc07374964',
  measurementId: 'G-4GP2L0W2NW',
}

export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

