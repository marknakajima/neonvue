const colors = require('vuetify/es5/util/colors').default;

module.exports = {
	generate     : {
		// routes : dynamicRoutes
	},
	mode         : 'universal',
	/*
  ** Headers of the page
  */
	head         : {
		titleTemplate : '%s - ' + process.env.npm_package_name,
		title         : process.env.npm_package_name || '',
		meta          : [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link          : [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel  : 'stylesheet',
				href : 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap'
			}
		]
	},
	/*
  ** Customize the progress-bar color
  */
	loading      : { color: '#fff' },
	/*
  ** Global CSS
  */
	css          : [],
	/*
  ** Plugins to load before mounting the App
  */
	plugins      : [
		{ src: '~plugins/ga.js', mode: 'client' }
	],
	/*
  ** Nuxt.js dev-modules
  */
	buildModules : [
		'@nuxtjs/vuetify'
	],
	/*
  ** Nuxt.js modules
  */
	modules      : [
		// Doc: https://axios.nuxtjs.org/usage
		// '@nuxtjs/axios',
		// '@nuxtjs/pwa',
		// Doc: https://github.com/nuxt-community/dotenv-module
		'@nuxtjs/dotenv'
	],
	/*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
	axios        : {},
	/*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
	vuetify      : {
		customVariables : [
			'~/assets/variables.scss'
		],
		theme           : {
			dark   : true,
			themes : {
				options : {
					customProperties : true
				},
				dark    : {
					primary       : '#1fffff',
					bg            : '#1c1e26',
					grayDarkSlate : '#22232e',
					accent        : colors.grey.darken3,
					secondary     : colors.amber.darken3,
					info          : colors.teal.lighten1,
					warning       : colors.amber.base,
					error         : colors.deepOrange.accent4,
					success       : '#87c1c5',
					anchor        : '#1fffff'
				}
			}
		}
	},
	/*
  ** Build configuration
  */
	build        : {
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
};
