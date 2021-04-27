# Neonvue

![](https://github.com/marknakajima/public_assets/blob/master/images/neonvue/gh-logo.jpg)


Neonvue is a Vue sci-fi starter template to quickly visualize your next futuristic theme.  It uses Vuetify + Nuxt.js + Vuex stack for static page generation and optimized for SEO.

## Demo

[Online Demo](https://lucid-fermat-af207e.netlify.app/)

## Installation, development server and build

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Adding articles

-  Open ~/assets/data/articles.json. For example, if you want to create a new article called "drones", copy any previous object in this file, update properties with "drones" data. Make sure that slug property is "drones" 
- Create a new folder and name it "drones" in ~/static/ folder
- Put 5 images in that folder using the following names : drones-1.jpg, drones-2.jpg, drones-3.jpg, drones-4.jpg, drones-5.jpg. 
- Size for each images are

| Name         | Size         |
| ------------ | ------------ |
| drones-1.jpg | 1200 x 698   |
| drones-2.jpg | 432 x 262    |
| drones-3.jpg | 432 x 262    |
| drones-4.jpg | 432 x 262    |
| drones-5.jpg | 432 x 262    |

- Reload your browser and see your new article reflected in dev server

## View generated files in localhost 

- Install 'serve' [https://www.npmjs.com/package/serve](https://www.npmjs.com/package/serve)
- go into /dist/ and use 'npx serve' from CMD 




