import { Poppins } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import { Metadata } from 'next';

const poppins = Poppins({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata:  Metadata = {
  title: 'Compress And Resize Images, imagecompressor for free',
  description: 'Compress and resize images easily with our online image compression and resizing tool. Reduce file sizes for faster loading web pages for free. You can also resize the images for free. You can upload more than 100 images and compress images with just one click.',
  keywords: "image compression, image resizing, online tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Add metadata using the Head component */}
      <Head>
        <meta property="og:title" content="Image Compressor and Resizer" />
        <meta property="og:description" content="Compress and resize images easily with our online image compression and resizing tool. Reduce file sizes for faster loading web pages." />
        <link rel="canonical" href="https://imagecompressor.website" />

        {/* Add Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-D363E2EN97"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D363E2EN97');
            `,
          }}
        />
      </Head>

      <body className={poppins.className}>{children}</body>
    </div>
  );
}
