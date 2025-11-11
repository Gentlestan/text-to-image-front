import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/context/AuthContext";
import ErrorBoundary from "@/components/common/ErrorBoundary";
//import Header from "@/components/layouts/Header";

console.log("Public DSN:", process.env.NEXT_PUBLIC_SENTRY_DSN);

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ErrorBoundary>
      <AuthProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </AuthProvider>
      </ErrorBoundary>
  )
}