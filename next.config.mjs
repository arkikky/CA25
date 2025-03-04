/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coinfest.asia",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.coinfest.asia",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hub.coinvestasi.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.facebook.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  serverRuntimeConfig: {
    version: process.env.SITE_APP_VERSION,
    hbSptCheckout: process.env.FORM_CHECKOUT,
    token_api: process.env.API_TOKEN_KEY,
    hbspot_token_api: process.env.API_TOKEN_HUBSPOT,
    ipAddress_token: process.env.API_IPADDRESS_TOKEN,
    secretToken: process.env.SECRET_TOKEN,
    secretTokenEncrypt: process.env.SECRET_TOKEN_ENCRYPT,
    secretXenditToken: process.env.SECRET_XENDIT_TOKEN,
  },
  publicRuntimeConfig: {
    domain: process.env.NEXT_PUBLIC_DOMAIN,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
    siteAppName: process.env.NEXT_PUBLIC_SITE_APP_NAME,
    siteTitle: process.env.NEXT_PUBLIC_SITE_TITLE,
    siteDesc: process.env.NEXT_PUBLIC_SITE_DESC,
    author: process.env.NEXT_PUBLIC_AUTHOR,
    tags: process.env.NEXT_PUBLIC_TAGS,
  },
};

export default nextConfig;
