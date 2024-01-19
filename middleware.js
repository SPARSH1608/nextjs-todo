import { NextResponse } from 'next/server';

export function middleware(request) {
  //   console.log('hello from middleware');
  return NextResponse.redirect(new URL('/', request.url));
}
//to protect route or data privacy
export const config = {
  //   matcher: '/about',
  matcher: ['/about/:path*'],
  //only '/about not to '/about/info
};
