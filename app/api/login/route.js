// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// const validUser = {
//   username: "admin",
//   password: "password123",
// };

// export async function POST(req) {
//   const { username, password } = await req.json();

//   if (username === validUser.username && password === validUser.password) {
//     cookies().set("auth", "true", { httpOnly: true, path: "/" });
//     return NextResponse.json({ success: true }, { status: 200 });
//   }

//   return NextResponse.json(
//     { success: false, error: "Invalid credentials" },
//     { status: 401 }
//   );
// }

import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === "example@gmail.com" && password === "inventory@123") {
    const response = NextResponse.json({ success: true });

    response.headers.set(
      "Set-Cookie",
      `auth=true; Path=/; HttpOnly; Secure=${
        process.env.NODE_ENV === "production"
      }; SameSite=Lax; Max-Age=3600`
    );

    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
