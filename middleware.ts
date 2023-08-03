import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl

    if (url.href.includes("/blog")) {
        const requestHeaders = new Headers(req.headers)
        requestHeaders.set('x-hello-from-middleware1', 'hello')

        // how do I format below?
        const response = NextResponse.rewrite({
            request: {
                // New request headers
                headers: requestHeaders,
            },
        })
        response.headers.set('x-hello-from-middleware2', 'hello')

        return NextResponse.rewrite('https://rewritesonline.wordpress.com/')
    }


}