/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "placedog.net"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
