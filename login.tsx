import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - AI HiTek</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form className="flex flex-col gap-4 w-full max-w-sm">
          <input type="email" placeholder="Email" className="p-2 border rounded" />
          <input type="password" placeholder="Password" className="p-2 border rounded" />
          <button className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Sign In</button>
        </form>
      </main>
    </>
  )
}
