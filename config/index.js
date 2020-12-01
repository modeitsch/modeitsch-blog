const site = {
  pathPrefix: '/gatsby-simple-blog',
  title: 'Modeitsch Blog',
  author: 'Moshe Deitsch',
  description: 'We Are Not a Gadget.',
  siteUrl: 'https://gatsby-simple-blog.thundermiracle.com/',
  twitter: 'kylemathews',
  github: 'thundermiracle',
  medium: 'thundermiracle',
  facebook: 'thundermiracle',
  disqusShortName: 'gatsby-simple-blog',
  googleTrackingId: 'G-E7NM1ZBB2T',
  lang: 'en',
  displayTranslations: true,
  postsPerPage: 3,
};

const supportedLanguages = {
  en: 'English',
  'he': 'עברית',
};

module.exports = {
  site,
  supportedLanguages,
};
