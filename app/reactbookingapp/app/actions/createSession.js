'use server';
import { createAdminClient } from "@/config/appwrite";
import { cookies } from "next/headers";
async function createSession(previousState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if(!email || !password) {
        return {
            error: 'Email and password are required'
        }
    }

    //get account instance
    const {acount} = await createAdminClient();

    try {
        //create session
       const session = await acount.createEmailPasswordSession(email, password);

       //create cookie
       cookies().set('appwrite-session', session.secret, {
        httpOnly: true, secure: true, sameSite: 'strict', expires : new Date(session.expire), path: '/'
    });

    return {success: true};
    } catch (error) {
        console.log('autentication error', error);
        return {error:'Invalid credentials'};
    }

    
}
export default createSession;