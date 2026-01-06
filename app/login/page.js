// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function LoginPage() {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (username === "admin@gmail.com" && password === "fi12345") {
//       document.cookie = "auth=true; path=/";
//       router.push("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-6 rounded shadow-md w-80 space-y-4"
//       >
//         <h2 className="text-lg font-bold">Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="border p-2 w-full"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border p-2 w-full"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white w-full p-2 rounded"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    if (username === "admin@gmail.com" && password === "fi12345") {
      document.cookie = "auth=true; path=/";
      router.push("/");
    } else {
      alert("Invalid credentials");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <form
        onSubmit={handleLogin}
        className="bg-white w-80 p-6 rounded-xl shadow-lg space-y-4 animate-fade-in"
      >
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold text-gray-800">
            Sultan Tracker Inventory
          </h2>
          <p className="text-sm text-gray-500">Please login </p>
        </div>

        <input
          type="email"
          placeholder="Email address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={loading}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-100"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>

        <p className="text-xs text-center text-gray-400">
          © 2026 - Sultan Tracker
        </p>
      </form>
    </div>
  );
}
