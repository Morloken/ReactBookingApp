'use server'
import { createSessionClient } from "@/config/appwrite";
import { cookies } from "next/headers";

async function checkAuth() {
    const cookiesStore = await cookies();
    const sessionCookie = cookiesStore.get('appwrite-session');
    if (!sessionCookie) {
        return { isAuthentificated: false };
    }
    try {
        const { account } = await createSessionClient(sessionCookie.value);
        const user = await account.get();
        return {
            isAuthentificated: true,
            user: {
                id: user.$id,
                name: user.name,
                email: user.email
            }
        };
    } catch (error) {
        return { isAuthentificated: false };
    }

}

export default checkAuth;