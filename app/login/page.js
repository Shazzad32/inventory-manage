// "use client";

import PageLogin from "@/components/PageLogin";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function Login() {
//   const router = useRouter();

//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (userId === "admin@gmail.com" && password === "fi12345") {
//       document.cookie = "auth=true; path=/";
//       router.push("/");
//     } else {
//       alert("Wrong User ID or Password");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
//       <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8">
//         {/* Title */}
//         <h2 className="text-2xl font-semibold text-white text-center mb-6">
//           Inventory Login
//         </h2>

//         {/* Input */}
//         <div className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email address"
//             value={userId}
//             onChange={(e) => setUserId(e.target.value)}
//             className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-cyan-400"
//           />
//         </div>

//         {/* Button */}
//         <button
//           onClick={handleLogin}
//           className="w-full mt-6 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition duration-200 text-white font-medium"
//         >
//           Sign In
//         </button>

//         {/* Footer */}
//         <p className="text-center text-gray-300 text-sm mt-4">
//           Secure access to your dashboard
//         </p>
//       </div>
//     </div>
//   );
// }

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <PageLogin />
    </div>
  );
}
