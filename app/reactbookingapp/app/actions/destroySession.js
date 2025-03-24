
'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function destroySession() {
  // Retrieve the session cookie
  const sessionCookie = cookies().get('appwrite-session');

  if (!sessionCookie) {
    return {
      error: 'No session cookie found',
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);

    // Delete current session
    // await account.deleteSession(sessionCookie.value);
    await account.deleteSession('current');

    // Clear session cookie
    cookies().delete('appwrite-session');

    return {
      success: true,
    };
  } catch (error) {
    console.error('Error destroying session:', error);
    return {
      error: 'Error deleting session',
    };
  }
}



export default destroySession;
// // async function destroySession() {
// //     // Retrieve the session cookie
// //     const sessionCookie = cookies().get('appwrite-session');
  
// //     if (!sessionCookie) {
// //       return {
// //         error: 'No session cookie found',
// //       };
// //     }
  
// //     try {
// //       const { account } = await createSessionClient(sessionCookie.value);
  
// //       // Get the list of active sessions
// //       const sessions = await account.getSessions();
  
// //       // Find the session ID for the current session, you might need to adjust based on your Appwrite setup
// //       const currentSession = sessions.sessions.find(session => session.userId === account.getId());
// //       if (!currentSession) {
// //         return {
// //           error: 'No active session found',
// //         };
// //       }
  
// //       // Delete the current session by ID
// //       await account.deleteSession(currentSession.$id);
  
// //       // Clear session cookie
// //       cookies().delete('appwrite-session');
  
// //       return {
// //         success: true,
// //       };
// //     } catch (error) {
// //       console.error('Error destroying session:', error);
// //       return {
// //         error: 'Error deleting session',
// //       };
// //     }
// //   }
// async function destroySession() {
//     // Retrieve the session cookie
//     const sessionCookie = cookies().get('appwrite-session');
  
//     if (!sessionCookie) {
//       return {
//         error: 'No session cookie found',
//       };
//     }
  
//     try {
//       const { account } = await createSessionClient(sessionCookie.value);
  
//       // Try deleting the session directly (if session ID is accessible)
//       await account.deleteSession(sessionCookie.value); // Assuming the session cookie value is the session ID
  
//       // Clear session cookie
//       cookies().delete('appwrite-session');
  
//       return {
//         success: true,
//       };
//     } catch (error) {
//       console.error('Error destroying session:', error);
//       return {
//         error: 'Error deleting session',
//       };
//     }
//   }