'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isSignInWithEmailLink, signInWithEmailLink, updateProfile } from 'firebase/auth';
import { getClientAuth } from "@/lib/firebase/firebaseAuth";

export default function FinishAuthPage() {
  const router = useRouter();
  const auth = getClientAuth();
  // const searchParams = useSearchParams();

  useEffect(() => {
    // Check if the link is a valid sign-in link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Get the email from localStorage
      let email = window.localStorage.getItem('emailForSignIn');

      // If email is not in localStorage, ask the user to enter it
      if (!email) {
        email = window.prompt('Please provide your email for confirmation');
      }

      // If the user provides an email, try to sign them in
      if (email) {
        signInWithEmailLink(auth, email, window.location.href)
          .then((result) => {
            const user = result.user;

            // Check if it's a new user and if they don't have a photoURL
            if (user && !user.photoURL) {
              // Update the user's profile with a default photoURL and displayName
              updateProfile(user, {
                displayName: user?.email?.split('@')[0] ?? 'User',
                photoURL: 'http://localhost:3000/default-profile.svg',
              })
                .then(() => {
                  console.log('User profile updated successfully!');
                  window.localStorage.removeItem('emailForSignIn');
                  router.push('/');
                })
                .catch((error) => {
                  console.error('Error updating user profile:', error);
                  window.localStorage.removeItem('emailForSignIn');
                  router.push('/');
                });
            } else {
              // User already exists or has a photoURL, just redirect
              window.localStorage.removeItem('emailForSignIn');
              router.push('/');
            }
          })
          .catch((error) => {
            console.error('Error signing in with email link:', error);
            // Handle specific errors like expired links or invalid codes
            alert('Failed to sign in. The link might be expired or invalid.');
          });
      }
    }
  }, [router]);

  return (
    <div>
      <p>Finishing sign-in...</p>
    </div>
  );
}