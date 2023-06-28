import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
    const url = req.nextUrl
    if (url.href.includes("/blog")) {
        const postPath = url.href.split("/blog")
        console.log(postPath)
        return NextResponse.rewrite(`https://dbredvick4d3f490f3a.wordpress.com${postPath.length >= 1 ? postPath[1] : ""}`)
    }
}