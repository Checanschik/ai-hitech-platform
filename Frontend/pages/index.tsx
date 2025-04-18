import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI HiTek - Remote IT Hiring Platform</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to AI HiTek</h1>
        <p className="mb-6 text-lg text-center max-w-xl">
          The smartest way to hire vetted remote IT talent using AI-powered matching.
        </p>
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get Early Access
        </a>
      </main>
    </>
  )
}
