import { SignUp, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const handleSignupComplete = () => {
    navigate('/welcome');  // Redirect to a custom page, e.g., "Welcome" page
  };

  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      <SignUp
        path="/sign-up"
        routing="path"
        onSignup={handleSignupComplete}  // Clerk provides this event handler
      />
    </>
  )
}