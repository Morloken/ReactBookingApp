
// 'use server';
// import { createSessionClient } from '@/config/appwrite';
// import { cookies } from 'next/headers';

// async function destroySession() {
//   // Retrieve the session cookie
//   const sessionCookie = cookies().get('appwrite-session');

//   if (!sessionCookie) {
//     return {
//       error: 'No session cookie found',
//     };
//   }

//   try {
//     const { account } = await createSessionClient(sessionCookie.value);

//     // Delete current session
//     // await account.deleteSession(sessionCookie.value);
//     await account.deleteSession('current');

//     // Clear session cookie
//     cookies().delete('appwrite-session');

//     return {
//       success: true,
//     };
//   } catch (error) {
//     console.error('Error destroying session:', error);
//     return {
//       error: 'Error deleting session',
//     };
//   }
// }



// export default destroySession;
'use server';
import { createSessionClient } from '@/config/appwrite';
import { cookies } from 'next/headers';

async function destroySession() {
  // Використовуємо `await` для отримання cookies
  const cookiesStore = await cookies();
  const sessionCookie = cookiesStore.get('appwrite-session');

  if (!sessionCookie) {
    return {
      error: 'No session cookie found',
    };
  }

  try {
    const { account } = await createSessionClient(sessionCookie.value);

    // Видаляємо поточну сесію
    await account.deleteSession('current');

    // Очищаємо cookie
    cookiesStore.delete('appwrite-session');

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
