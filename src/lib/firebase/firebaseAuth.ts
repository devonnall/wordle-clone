'use client'

import { app } from '@/lib/firebase/firebaseConfig';
import { getAuth } from 'firebase/auth';

export const auth = getAuth(app);