interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://stellasworld.com/', // Write here your website url
	author: 'Patrick Zantz', // Site author
	title: 'Innere Alchemie: Entdecke dein wahres Selbst', // Site title.
	description: 'Erkenne dein wahres Selbst, löse die Fesseln deiner begrenzenden Überzeugungen und Anhaftungen auf und entdecke so den Quell unerschöpflichen Glücks in deinem Inneren.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
