//Protecting routes from unauthorized access
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";



export async function middleware(request) {
    // const {pathname} = request.nextUrl;
    // console.log(`Requested page for : ${pathname}`);

    const isAuthenticated = false;
    if (!isAuthenticated) {//if user is not logged in - redirect to login; we blocking him from accessing the page
        return NextResponse.redirect(new URL('/login', request.url));
    }
    return NextResponse.next();
}

export const config = {//limiting access for certain pages
    matcher: [
        '/bookings',
    ]
}