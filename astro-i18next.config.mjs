/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
	defaultLocale: "en-US",
	locales: ["en-US", "es"],
	i18nextServer: {
		backend: {
			loadPath: "./public/locales/{{lng}}/{{ns}}.json"
		}
	},

	routes: {
		es: {
			"hello-world": "hola-mundo",
			characters: {
				index: "personajes"
			}
		}
	}
}
