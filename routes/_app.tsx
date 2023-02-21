import { AppProps } from "$fresh/server.ts";

import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

export default function App({ Component }: AppProps) {
  return (
    <body class="w-full max-w-screen-md mx-auto py-8 md:px-8 px-4 bg-gray-50 text-gray-900 text-lg">
      <Header />
      <Component />
      <Footer />
    </body>
  );
}
