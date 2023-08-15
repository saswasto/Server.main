import NavBar from "./components/navbar";
import Footer from "./components/footer";
import './globals.css';

import { AnalyticsWrapper } from './components/analytics';
import JSFailWarning from "./components/jsFailWarning";
import Script from "next/script";

export default async function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>SPAICS 22-23</title>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7C858ZCQZK" strategy="afterInteractive"/>
        <Script id="GoogleAnalytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7C858ZCQZK');
          `}
        </Script>
        <Script id="warning-remover">
            {`
              if (document.getElementById('warning')) {
                  document.getElementById('warning').remove();
              }
            `}
        </Script>
      </head>

      <body>
        <NavBar/>
        {children}
        <Footer/>
        <AnalyticsWrapper/>
        <JSFailWarning/>
      </body>
    </html>
  );
}