import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const cartId = searchParams.get("cart_id")
  const checkoutStep = searchParams.get("step")

  if (!cartId) {
    return NextResponse.next()
  }

  let redirectUrl = request.nextUrl.href

  let response = NextResponse.redirect(redirectUrl, 307)

  // If a cart_id is in the params, we set it as a cookie and redirect to the address step.
  if (cartId && !checkoutStep) {
    redirectUrl = `${redirectUrl}&step=address`
    response = NextResponse.redirect(`${redirectUrl}`, 307)
    response.cookies.set("_medusa_cart_id", cartId, { maxAge: 60 * 60 * 24 })
  }

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.svg).*)"],
}
