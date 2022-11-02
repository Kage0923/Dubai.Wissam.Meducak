# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.11.0](https://github.com/ElegantStack/gatsby-themes/compare/@elegantstack/gatsby-blog-core@3.10.0...@elegantstack/gatsby-blog-core@3.11.0) (2022-05-18)


### Features

* **gatsby-blog-core:** migrate to Strapi v4 ([0d58f33](https://github.com/ElegantStack/gatsby-themes/commit/0d58f33fcc30f92ca96e0ad5edfa345427dc4bea))
* Upgrade Gatsby and React and other depenedencies ([144ccc1](https://github.com/ElegantStack/gatsby-themes/commit/144ccc14a11f5f5cb5721d744922a3f164410f17))


### Bug Fixes

* **gatsby-blog-core:** fix error when no article tag is used ([0a10c62](https://github.com/ElegantStack/gatsby-themes/commit/0a10c627cfa5b6c8a81dc6ca33c061c5dcda3d89))



## [3.10.0](https://github.com/ElegantStack/gatsby-themes/compare/@elegantstack/gatsby-blog-core@3.9.0...@elegantstack/gatsby-blog-core@3.10.0) (2022-02-28)


### Refactor

* **gatsby-plugin-smooth-scrollbar:** remove unused package ([4b08b77](https://github.com/ElegantStack/gatsby-themes/commit/4b08b77f1e0516dd52d33a09597c907401521009))




## [3.9.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.8.0...@elegantstack/gatsby-blog-core@3.9.0) (2021-11-15)


### Features

* **gatsby-blog-core:** add protected field to Article type for future implementation of gated content ([e8205ef](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e8205efb851ee8cc95036072916a0df48d322640))
* upgrade to Gatsby v4 ([e481e4a](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e481e4ab705d20c9d3daf3b2048f29eef308f420))


### Bug Fixes

* **gatsby-blog-core:** fix strapi category icon not resolving ([5fffb30](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/5fffb30ca827d2f5cc99abc25186e21d50921e55))




## [3.8.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.7.0...@elegantstack/gatsby-blog-core@3.8.0) (2021-09-07)


### Features

* add Facebook Cooments integration ([2f0eef3](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2f0eef3874a85a12454ddbdd290d0c41b07d71c1))
* add GraphComment.com integration ([f327dbb](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f327dbb33df1c74c931293d075f753bc866f5e50))
* upgrade Gatsby and dependencies ([d59a731](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/d59a731107925db1a03367d9a24d7c40dae622e6))


### Refactor

* **gatsby-blog-core:** remove trailing slash from siteUrl in theme options ([8d7b18c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/8d7b18cdf9a42d0a479ee70bd721d759b84be45e))




## [3.7.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.6.0...@elegantstack/gatsby-blog-core@3.7.0) (2021-08-19)


### Features

* **gatsby-blog-core:** add includeTableOfContents theme option ([f992cf3](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f992cf39d5a73df801a65d7c0d2ffa21dc94e338))
* **gatsby-blog-core:** add tableOfContents to article query ([d0a1f46](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/d0a1f469ac2eec96747161041bef7877f4ea3893))


### Bug Fixes

* add back excerpt field to post page used for SEO description metatag ([3205f6c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/3205f6c6f33ddbfc00bd96fe1734064022f138e3))



## [3.6.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.5.0...@elegantstack/gatsby-blog-core@3.6.0) (2021-08-01)


### Features

* update Gatsby and dependencies ([95b3b72](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/95b3b7234b39eb66e5957f9acc0d10519b400941))
* **gatsby-blog-core:** add theme option for changing article image quality ([ca8446a](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ca8446adc9ac02325a79a34a4ee84cd7aa39f2e5))


### Performance Improvements

* **gatsby-blog-core:** add theme option for disabling article timeToRead and excerpt for faster builds ([1553bce](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/1553bce72779c401ccae78e811c015298349c802))
* **gatsby-blog-core:** remove unnecessary excerpt field from post page query for faster builds ([6d5b780](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6d5b78085e8626f9cc0238d15a42ed1a6e8000b3))


### Refactor

* **gatsby-blog-core:** change cropFocus to CENTER for cropping blog images ([f4b3a96](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f4b3a962db1233340c4e983fe0512a284c4ab848))
* **gatsby-blog-core:** delete irrelevant duplicate file of algolia queries ([e35739f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e35739fab25a49c5307f4b1ca28ac5127c161e71))




## [3.5.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.4.1...@elegantstack/gatsby-blog-core@3.5.0) (2021-06-17)


### Features

* upgrade gatsby and other dependencies ([941b5ea](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/941b5ea131271f222c557d9ab3b38da5a8140d2d))
* **gatsby-blog-core, gatsby-plugin-utility-directives:** add slugSanitizeRegex theme option for custom slug sanitization regex ([cc78284](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/cc78284388c5c300679394e2ae08472d64ac0a7c))


### Bug Fixes

* **gatsby-blog-core:** disable extension warning for gatsby-transformer-sharp ([ee79bdd](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ee79bdd875c98c2de9bfa5c8e405eaed7a3d7adb))




### [3.4.1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.4.0...@elegantstack/gatsby-blog-core@3.4.1) (2021-06-10)


### Bug Fixes

* **gatsby-blog-core:** fix author thumbnail image in Strapi CMS ([be6a041](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/be6a041b9ef9cd603df61523d1cfb532c0c25bc7))



## [3.4.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.3.0...@elegantstack/gatsby-blog-core@3.4.0) (2021-05-30)


### Features

* **gatsby-blog-core:** add support for Strapi v1 sourcing plugin ([400a5ba](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/400a5ba32ceeeded8396d012679eb6dcc5997ce4))




## [3.3.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.2.1...@elegantstack/gatsby-blog-core@3.3.0) (2021-05-19)


### Features

* upgrade dependencies ([dae5750](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/dae57508db7811d0a33ceeb53d57f9b680196f37))


### Refactor

* **gatsby-blog-core:** move gatsby-plugin-sharp quality from gatsby-config.js to fragments ([fd698df](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/fd698dfe01cb95b1615bf995539ddc2126c3a746))
* **gatsby-blog-core, gatsby-blog-helpers:** move alias import declerations to aliased packages ([0a4c409](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/0a4c4090e79affdc34440fdf9e0db4c2e9a16846))




### [3.2.1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.2.0...@elegantstack/gatsby-blog-core@3.2.1) (2021-03-30)


### Refactor

* **gatsby-blog-core:** change hero image cropFocus to ATTENTION ([3ead701](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/3ead7014fb1eb97a301e998d531d014556b9532e))




## [3.2.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.1.0...@elegantstack/gatsby-blog-core@3.2.0) (2021-03-27)


### Features

* **gatsby-blog-core:** re-enable Sanity CMS with support for new sourcing plugin ([ff30a85](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ff30a85e6a26d005580928f9e9824b61c7fc557c))
* upgrade dependencies ([da85e59](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/da85e59915b171796803e5e281fae0cd2e263e3c))




## [3.1.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.0.1...@elegantstack/gatsby-blog-core@3.1.0) (2021-03-20)


### Features

* upgrade to Gatsby v3.1 and upgrade other deps ([f187898](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f187898cd7cae9827c2290fc5906574de894b75f))




## [3.0.1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/@elegantstack/gatsby-blog-core@3.0.0...@elegantstack/gatsby-blog-core@3.0.1) (2021-03-18)

### Bug Fixes

- **gatsby-blog-core:** fix hero image for featured posts not rendering ([2637865](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2637865f3c993e15488db207a9b7f07af1119fa9))

## 3.0.0 (2021-03-17)

### Features

- **gatsby-blog-core:** add sitePaths.article to theme options ([7ba9921](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/7ba992145455b2ae90b86ba6fb067a7e83dafbd6))
- upgrade to Gatsby v3 and gatsby-plugin-image ([2e9689c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2e9689cc5fccf1af4f84ca051809eafccce08d11))
- **gatsby-blog-core:** add missing context.location.state from Gatsby v3 ([ee9bd78](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ee9bd781d2d164a0f4f3166f643f728a3d854202))
- **gatsby-blog-core:** register new gatsby-plugin-image in gatsby-config ([3d1e0ea](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/3d1e0ea3961edd4fc0850b0716553cefb4070d2a))

### Performance Improvements

- **gatsby-blog-core:** decrease default image quality from 85 to 75 ([e1ec503](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e1ec5032e6d83662104f26116bfb0516c58d7f3b))
- **gatsby-blog-core:** improve responsive image generation [skip ci] ([a87bb6b](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a87bb6bbdb77d2ef7e0556f0a8a1c0f2736c11ca))

### Refactor

- **gatsby-blog-core:** rename @elegantstack/core-blog package to @elegantstack/gatsby-blog-core ([a9a77a4](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a9a77a4d6fb375ccf8ab063015e164ee08e10d01))
- **gatsby-blog-helpers:** rename @elegantstack/helpers-blog package to @elegantstack/gatsby-blog-helpers ([7592f8e](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/7592f8e82ffb8148473878d2ab9edb19c6d3f5fa))
- **helpers:** rename @elegantstack/helpers package to @elegantstack/common-helpers ([a39fe74](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a39fe74e2c08af5091ac4a5b5cff414f23d5b71f))

## 2.11.0 (2021-02-25)

### Features

- **core-blog:** add draft field to mdx articles ([9cf3d71](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9cf3d714f029b43cccd100abcbf2ad409497068a))

### Refactor

- **core-blog:** move gatsby-plugin-proxy-directive dependecny from gatsby-plugin-proxy-schema to core-blog ([9b2b30e](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9b2b30ea38cdf947df09a5511c20c92b334ad0c8))

## 2.10.0 (2021-02-13)

### Features

- upgrade dependencies ([46d41a3](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/46d41a339cd9774a913fa3d70f633661e884a3e8))

### Performance Improvements

- **core-blog:** add webp and quality to author fragment ([a6ee815](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a6ee815498c78d7e88492022196ee72784fff605))

### Refactor

- **core-blog:** remove unnecessary code from ArticleTag node creator ([309ccac](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/309ccac8a0891e89b86a2c564ca4966df94571ec))
- **siteMetadata:** change fragment name ([6395527](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6395527e7f423183af162b5065a00ba9e853b8a6))

## 2.9.0 (2020-12-31)

### Features

- **core-blog:** add Strapi CMS support ([2761a9f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2761a9f331cfc719530ed3e051ba80cbeee2d1e5))

## 2.8.0 (2020-12-15)

### Refactor

- upgrade external dependency packages ([dcf1114](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/dcf1114436cb0f09f029dd4aed6d8a18715ef5a2))

## 2.7.0 (2020-12-05)

### Features

- add ability to enable/disable dark mode from theme options ([366ad91](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/366ad911e950c05edc37cba88ab59f5073690c2f))
- increase Contentful default image quality ([f928840](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f928840d890902de7a9c10e8f4a29da5129cdc4d))

## 2.4.0 (2020-09-26)

### Features

- Remove helpers-blog dependency from flow-ui-layout and pass mobile menu to header via context ([476a37c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/476a37c6aeaf9b7d3b873d13d0b598fb8eff0bc2))

### Bug Fixes

- Remove unnecessary slufigy module form core-blog package ([97110b5](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/97110b590aee44d0432f880a32c4ea198471a738))

## 2.3.1 (2020-08-20)

## 2.3.0 (2020-08-06)

### Features

- add siteUrl to theme options for Open Graph images ([6b3354f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6b3354fda976ad72c4e6384832be3f8e220b753d))

### Bug Fixes

- change sources.mdx to sources.local in default options ([db4db98](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/db4db9870557e93409d4104bf1411f70387f877b))
- separate content/assets from themeOptions.localPaths ([6d5d8b1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6d5d8b152c7f188a84d914f2ec8eeaa38deef72f))

## 2.2.0 (2020-07-28)

### Bug Fixes

- fix sorting of posts by date ([ccc21e9](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ccc21e956a67c3901cbef26d802e9846db5ccb39))

## 2.0.0 (2020-07-26)

### Features

- decouple general functionalities from core and move them to plugins ([eaffbbf](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/eaffbbfe74e4f4a4064c67368e09886c73b6e8a7))
- upgrade dependencies in package files ([9391fad](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9391fad0a525f7a8514ab722831eff9a2eae8e04))

### Bug Fixes

- Author description in Contentful was not resolving correctly ([9c8f30d](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9c8f30db8b1cbade3fa961683a385de8abef0afd))

## [2.10.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.9.0...v2.10.0) (2021-02-13)

### Features

- upgrade dependencies ([46d41a3](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/46d41a339cd9774a913fa3d70f633661e884a3e8))

### Performance Improvements

- **core-blog:** add webp and quality to author fragment ([a6ee815](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/a6ee815498c78d7e88492022196ee72784fff605))

### Refactor

- **core-blog:** remove unnecessary code from ArticleTag node creator ([309ccac](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/309ccac8a0891e89b86a2c564ca4966df94571ec))
- **siteMetadata:** change fragment name ([6395527](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6395527e7f423183af162b5065a00ba9e853b8a6))

## [2.9.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.8.0...v2.9.0) (2020-12-31)

### Features

- **core-blog:** add Strapi CMS support ([2761a9f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2761a9f331cfc719530ed3e051ba80cbeee2d1e5))

## [2.8.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.7.0...v2.8.0) (2020-12-15)

### Refactor

- upgrade external dependency packages ([dcf1114](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/dcf1114436cb0f09f029dd4aed6d8a18715ef5a2))

# [2.7.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.6.2...v2.7.0) (2020-12-05)

### Features

- add ability to enable/disable dark mode from theme options ([366ad91](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/366ad911e950c05edc37cba88ab59f5073690c2f))
- increase Contentful default image quality ([f928840](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/f928840d890902de7a9c10e8f4a29da5129cdc4d))

# [2.4.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.3.1...v2.4.0) (2020-09-26)

### Bug Fixes

- Remove unnecessary slufigy module form core-blog package ([97110b5](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/97110b590aee44d0432f880a32c4ea198471a738))

### Features

- Remove helpers-blog dependency from flow-ui-layout and pass mobile menu to header via context ([476a37c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/476a37c6aeaf9b7d3b873d13d0b598fb8eff0bc2))

## [2.3.1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.3.0...v2.3.1) (2020-08-20)

**Note:** Version bump only for package @elegantstack/core-blog

# [2.3.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.2.3...v2.3.0) (2020-08-06)

### Bug Fixes

- change sources.mdx to sources.local in default options ([db4db98](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/db4db9870557e93409d4104bf1411f70387f877b))
- separate content/assets from themeOptions.localPaths ([6d5d8b1](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6d5d8b152c7f188a84d914f2ec8eeaa38deef72f))

### Features

- add siteUrl to theme options for Open Graph images ([6b3354f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/6b3354fda976ad72c4e6384832be3f8e220b753d))

# [2.2.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v2.1.0...v2.2.0) (2020-07-28)

### Bug Fixes

- fix sorting of posts by date ([ccc21e9](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/ccc21e956a67c3901cbef26d802e9846db5ccb39))

# [2.0.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v1.2.0...v2.0.0) (2020-07-26)

### Bug Fixes

- Author description in Contentful was not resolving correctly ([9c8f30d](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9c8f30db8b1cbade3fa961683a385de8abef0afd))

### Features

- decouple general functionalities from core and move them to plugins ([eaffbbf](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/eaffbbfe74e4f4a4064c67368e09886c73b6e8a7))
- upgrade dependencies in package files ([9391fad](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/9391fad0a525f7a8514ab722831eff9a2eae8e04))

# [1.2.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v1.1.0...v1.2.0) (2020-07-14)

### Bug Fixes

- Create schema types only when an article of the type is available ([adb3a94](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/adb3a94d34531574ca2fb4ff9cc3ffe2f18d5dac))
- Include path prefixes in user defined slugs ([e31144b](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/e31144b313acc93ac10d0c59a00d51e4e72f26e8))

### Features

- Add support for Sanity CMS (sanity.io) for creating blog posts ([5f9e83f](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/5f9e83f7f1d94cb9a896d191868572e17b9b9a9e))
- Port schema types to new sourcing system ([5edc16c](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/5edc16ce883bfdc3b3df16006d647527d45c5e07))
- Refactor semantic schema sourcing strategy from cloning/modifying nodes to proxying for cache optimization and more flexibility ([2479f2e](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/2479f2e60030fb8087e4c0cd47f1c689cc530d6b))
- Unified GraphQL ArticleCategory.icon from all sources ([59fad09](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/commit/59fad09fd8763080bcaa12afe1ae3a0d9294bea2))

# [1.1.0](https://gitlab.com/alimoosavi15/gatsby-theme-flexiblog/compare/v1.0.0...v1.1.0) (2020-07-06)

**Note:** Version bump only for package @elegantstack/core-blog
