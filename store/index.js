import Vuex from 'vuex';
import articlesJSON from '~/assets/data/articles.json';

export const state = () => ({
	dataArticles : articlesJSON,
	loading      : false
});

export const getters = {
	getNumTotalArticles    : (state) => () => {
		return state.dataArticles.length;
	},
	getCurrent             : (state) => (slug) => {
		return state.dataArticles.find(function(item) {
			return item.slug === slug;
		});
	},
	getByTags              : (state) => (tags, num = 100) => {
		return [
			...state.dataArticles
		]
			.filter((element) => {
				return (
					element.tags.filter(function(tag) {
						return tags.indexOf(tag) > -1;
					}).length === tags.length && element.text !== ''
				);
			})
			.sort((a, b) => {
				return b.rating - a.rating;
			})
			.splice(0, num);
	},
	getLatest              : (state) => (num = 100) => {
		return [
			...state.dataArticles
		]
			.filter((element) => element.text !== '')
			.sort((a, b) => new Date(b.date) - new Date(a.date))
			.splice(0, num);
	},
	getRecommendation      : (state) => (slug, num = 4) => {
		// mock recommendation getter
		return [
			...state.dataArticles
		]
			.filter((element) => {
				return element.slug !== slug && element.text !== '';
			})
			.sort(() => Math.random() - 0.5)
			.splice(0, num);
	},
	getBySlugsWithSnippets : (state) => (slugObjects = []) => {
		let moddedArray = [];

		slugObjects.map((obj) => {
			[
				...state.dataArticles
			].map((dataSite) => {
				if (dataSite.slug === obj.slug) {
					let modObj = JSON.parse(JSON.stringify(dataSite));
					modObj.snippet = obj.snip;
					moddedArray.push(modObj);
				}
			});
		});
		return moddedArray;
	},
	goDetail               : (state) => (item) => {
		$nuxt.$router.push({
			path : '/list/' + item.slug
		});
	},
	goTag                  : (state) => (tag, items = []) => {
		$nuxt.$router.push({
			path : '/tags/' + tag
		});
	},
	getAllTags             : (state) => () => {
		let uniqueTags = [];
		let uniques = new Set();

		state.dataArticles.forEach((site) => {
			for (let tag of site.tags) {
				if (!uniques.has(tag)) {
					uniques.add(tag);
					uniqueTags.push(tag);
				}
			}
		});

		return uniqueTags;
	}
};
