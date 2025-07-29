export default function ({ $auth, redirect }) {
  try {
    // If the user is logged in, redirect to home page
    if ($auth && $auth.loggedIn) {
      return redirect('/')
    }
  } catch (error) {
    console.error('Guest middleware error:', error)
    // If there's an error with $auth, safely redirect to login page
    return redirect('/auth/signin')
  }
}