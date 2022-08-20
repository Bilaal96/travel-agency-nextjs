<h1>✈ Free Roam 🌴</h1>

A fictional Travel Agency landing page & blog built using Next.js & SCSS modules. Strapi CMS was used to build custom content-types for holiday packages, blog articles & about page content. Using a CMS such as Strapi allows content managers to update site content with minimal coding knowledge using the Strapi dashboard.

**Table of Contents**

- [1 | Application Technologies & Features](#1--application-technologies--features)
  - [1.1 | Tech Used](#11--tech-used)
  - [1.2 | Features](#12--features)
  - [1.3 | Data Fetching & Rendering Strategies Used](#13--data-fetching--rendering-strategies-used)
    - [1.3.1 | Querying Strapi With GraphQL](#131--querying-strapi-with-graphql)
    - [1.3.2 | Next.js Rendering Strategies](#132--nextjs-rendering-strategies)
- [2 | What I Learned](#2--what-i-learned)
  - [2.1 | Next.js](#21--nextjs)
  - [2.2 | Strapi](#22--strapi)
  - [2.3 | Other](#23--other)
- [3 | Issues Faced During Development](#3--issues-faced-during-development)
  - [3.1 | Computing The Page Range For Pagination Component](#31--computing-the-page-range-for-pagination-component)
    - [3.1.1 | Challenges](#311--challenges)
    - [3.1.2 | Calculating Sibling Pages](#312--calculating-sibling-pages)
    - [3.1.3 | When To Show Ellipsis](#313--when-to-show-ellipsis)
  - [3.2 | Choosing A Method To Paginate Articles](#32--choosing-a-method-to-paginate-articles)
    - [3.2.1 | Rendering Options for Articles Pagination: SSR vs CSR](#321--rendering-options-for-articles-pagination--ssr-vs-csr)
    - [3.2.2 | Requesting Articles Efficiently & Reducing Server Load](#322--requesting-articles-efficiently--reducing-server-load)
    - [3.2.3 | Why I Chose CSR With SWR Package](#323--why-i-chose-csr-with-swr-package)
    - [3.2.4 | Conclusion](#324--conclusion)
  - [3.3 | Closing Mobile Navigation On External Clicks](#33--closing-mobile-navigation-on-external-clicks)
    - [3.3.1 | The Desired Outcome](#331--the-desired-outcome)
    - [3.3.2 | The Problem: External Clicks Did Not Register On ImageSlider Component](#332--the-problem--external-clicks-did-not-register-on-imageslider-component)
    - [3.3.3 | Finding & Implementing The Solution](#333--finding--implementing-the-solution)

# 1 | Application Technologies & Features

## 1.1 | Tech Used

- Frontend:
  - Next.js, SCSS Modules, GraphQL Queries
  - Packages: [Swiper.js](https://github.com/nolimits4web/swiper), [date-fns](https://date-fns.org/), [Lodash](https://lodash.com/), [SWR](https://swr.vercel.app/)
- Backend ([link to repo](https://github.com/Bilaal96/blog-strapi)):
  - Strapi CMS with GraphQL & Cloudinary plugins

## 1.2 | Features

- Image slider implemented using Swiper.js
- Horizontal scrolling cards that display info for Holiday Packages
- Animated image reel to show company partners; pauses animation on hover
- Used [sampleSize](https://lodash.com/docs/4.17.15#sampleSize) from Lodash to generate array of 7 random articles for "Other Articles" section (on `/blog` route)
- Custom solution for pagination of blog articles on `/blog/all-articles` route

## 1.3 | Data Fetching & Rendering Strategies Used

### 1.3.1 | Querying Strapi With GraphQL

- The Strapi backend uses a GraphQL plugin that maps each Strapi Content-type to its own Type in a GraphQL API; such types can be viewed in a GraphQL Playground, although this must be configured for production (click [here](https://docs.strapi.io/developer-docs/latest/plugins/graphql.html) for details).
- I created a utility function ([queryStrapi](utils/query-strapi.js)) that wraps the fetch function and queries the GraphQL API created by Strapi. It accepts a GraphQL query string as argument.

### 1.3.2 | Next.js Rendering Strategies

- All pages use Static Site Generation (SSG) to render pages.
- Incremental Static Generation (ISR) is used to revalidate data (on static pages) once it becomes stale. It works by checking if fetched data is stale on specified intervals. If stale, the data is re-fetched and the page will re-render with fresh data.
- The SWR package was used for Client-Side Rendering (CSR) of paginated articles (on `/blog/all-articles` route). SWR is leveraged for its abilities to:
  - Cache data fetched on the client - thus preventing requests for data that was previously fetched and reducing server load.
  - Revalidate stale data - ensuring that the blog articles in-view reflect the most up-to-date articles from the database.

# 2 | What I Learned

## 2.1 | Next.js

- The difference between client-side & server-side rendering
- How to implement numerous rendering strategies in Next.js and what benefits each provides
- Routing
- Generating dynamic routes using `getStaticPaths` alongside `getStaticProps`
- SEO benefits of Next.js - including rendering strategies and the Image component
- Using SCSS modules to scope styles to components

## 2.2 | Strapi

- Using Strapi to create & manage content-types
- Creating entries (i.e. instances of a particular content-type)
- Configuring plugins:
  - Image hosting with Cloudinary
  - Using GraphQL with Strapi
- Configuring Strapi for different environments (i.e. development & production)

## 2.3 | Other

- Using Conventional Commits pattern for cleaner git history

# 3 | Issues Faced During Development

## 3.1 | Computing The Page Range For Pagination Component

### 3.1.1 | Challenges

For the Pagination component design, I took inspiration from Material UI's Pagination component, where only n pages precede & following the current page. The final solution computes the relevant pages to show based on the currently selected page.

I had difficulty figuring out how to display the correct number of pages that are adjacent to the current page whilst also showing the ellipsis at the correct times. For example, if the current page was `5`, the pages shown would be `[ 1, ..., 4, 5, 6, ..., n ] // where n > (last sibling + 2)`.

### 3.1.2 | Calculating Sibling Pages

I then came across the idea of thinking of the adjacent numbers as "siblings". By specifying a `siblingCount` value I was able to create a reusable component which could show any number of specified siblings.

For example, if `siblingCount === 2`, then pages would be `[ 1, ..., 5, 6, 7, 8, 9, ..., n ]` where `7` is the current page. Notice that `siblingCount` is the number of siblings shown on one side of the current page (left or right).

### 3.1.3 | When To Show Ellipsis

From this point, the ellipsis could be shown by checking if the number of pages between the extremes of siblings (i.e. first or last sibling) and the first or last page (respectively) was greater than `2`. This check ensures that an ellipsis is only shown if there is at least `1` page **between** a sibling and first/last page.

<strong>Example: page range = `[1, 10]`, siblingCount = `1`, currentPage = `3`</strong>

- Siblings of `3` are `2` (firstSibling) & `4` (lastSibling)
- Left ellipsis is NOT shown because there are no pages between `1` (firstPage) and firstSibling `2`
  - i.e. `firstSibling > 2 === false`
- Right ellipsis IS shown because pages DO EXIST between `10` (lastPage) and lastSibling `4`
  - i.e. `lastSibling < (lastPage - 1) === true`
- Resulting page range shown: `[ 1, 2, 3, 4, ..., 10 ]`

For pagination implementation, see:

- [usePagination() hook](hooks/usePagination.js)
- [Pagination component](components/Pagination/Pagination.jsx)

For Pagination component use, see:

- ["All Articles" page](pages/blog/all-articles.js)

## 3.2 | Choosing A Method To Paginate Articles

### 3.2.1 | Rendering Options for Articles Pagination: SSR vs CSR

<strong>How Pagination Works With Strapi's GraphQL API</strong>

Strapi's GraphQL API allows us to paginate requests "by page" (see [GraphQL Pagination in Strapi Docs](https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/graphql-api.html#pagination-by-page)). So in the GraphQL query, I simply provide 2 parameters:

- `page` - number of the page being requested
- `pageSize` - how many articles to display on the page

Fetching paginated articles could be done with either:

- Client-side Rendering (CSR)
- Server-side Rendering (SSR)

<strong>Using SSR for Pagination</strong>

`getServerSideProps()` (or `gSSP`) runs at request-time on server-side only. It receives the `context` object as an argument, which can be used to access query parameters.

One option to fetch the paginated articles is to send the GraphQL pagination parameters (`page` & `pageSize`) as query parameters to the server using Next's built-in Router. `gSSP` can then access the parameters via the `context` object and then send a GraphQL query to Strapi for the paginated articles.

<strong>Using CSR for Pagination</strong>

With this approach I could use `getStaticProps()` (or `gSP`) to statically render the `/blog/all-articles` page which would improve the page load-time (as the page is pre-rendered at build-time as opposed to run-time). After the page has loaded I could request the paginated articles in `useEffect` and populate the UI appropriately, according to the response.

CSR inherently takes some time and I would use a spinner (or loading icon) to indicate that the data is being fetched.

### 3.2.2 | Requesting Articles Efficiently & Reducing Server Load

Regardless of whether I chose CSR or SSR, on click of each pagination-page the articles would always be requested. This means that data would be re-requested when:

1. clicking the current page
2. clicking a previously requested page

To resolve problem #1, I simply disabled the button for the current page, making it non-clickable.

Problem #2 could be resolved using caching. The methods of caching vary depending on whether I chose SSR or CSR. My options were:

- cache in local storage
- use [caching headers](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#caching-with-server-side-rendering-ssr) (i.e. `Cache-Control`) inside `gSSP` to set caching directives
- use [SWR](https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr) package to cache responses from data fetched on client-side

### 3.2.3 | Why I Chose CSR With SWR Package

This section outlines why I opted to go with CSR using the SWR package.

<strong>Evaluation of Rendering Methods</strong>

The rendering method I chose would also partially dictate which caching option I went with. The drawback of SSR (via `gSSP`) was that on each request for paginated articles, the entire page would be re-rendered and sent back to the client.

The fetched data is simply to be displayed in the UI, it does not influence the overall shape of the UI, therefore the re-render by `gSSP` is unnecessary. As a result of this, I decided to go with CSR.

<strong>Evaluation of Caching Methods</strong>

With SSR off the table, I had to choose between caching in Local Storage vs using the [SWR](https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr) package.

Local Storage would be a simple solution to cache the data on initial load, however it would be tedious to sync Local Storage when the articles data is updated (i.e. articles are added/removed).

The [SWR](https://nextjs.org/docs/basic-features/data-fetching/client-side#client-side-data-fetching-with-swr) package provides the `useSWR` hook, which I could use to client-side-fetch the articles on click of each pagination-page. The nice thing about `useSWR` is that it handles caching automatically with configurable options.

SWR is derived from the `stale-while-revalidate` (SWR) caching directive. It decreases page load-times like so:

- on initial request (i.e. no cache), data is fetched then cached. This request results in the longest latency and occurs once.
- on subsequent requests data is served from the cache.

The cache is essentially updated in the background:

- if cached data is fresh, it's served as-is.
- if cached data is stale, it is:
  - served as the response;
  - then revalidated, i.e. data is re-fetched and the fresh response is cached.

### 3.2.4 | Conclusion

Ultimately, statically rendering the page allowed me to ensure that page load-times are optimised for SEO (where SSR may have increased load-times). Using Static Site Generation meant that I had to fetch data on the client, and `useSWR` was the easiest option to do so, whilst also ensuring that cached data was kept up-to-date **without increasing page load-times**.

## 3.3 | Closing Mobile Navigation On External Clicks

### 3.3.1 | The Desired Outcome

Very simply, close the mobile dropdown navigation menu when the user clicks outside of it. This functionality was implemented with [`useClickOutside`](hooks/useClickOutside.js).

### 3.3.2 | The Problem: External Clicks Did Not Register On ImageSlider Component

[`ImageSlider`](components/ImageSlider/ImageSlider.jsx) renders a [Swiper](https://swiperjs.com/react) component to create a swipeable image carousel. This swipe/touch-detection was taking precedence over the check for clicking outside of the navigation menu. As a result of this, the navigation menu would not close if the user clicked on the ImageSlider component.

### 3.3.3 | Finding & Implementing The Solution

In the documentation for [Swiper](https://swiperjs.com/react), I noticed that you could disable the swiping functionality with a CSS class: `swiper-no-swiping`. I used Chrome Devtools to add the CSS class to the Swiper component and then checked if the external click was registered when clicking the Swiper component. The menu closed as desired.

To resolve the issue, I created a utility function - [handleSwiperNoSwiping()](utils/swiper.js) - that adds/removes the `swiper-no-swiping` CSS class to all Swiper elements on a page. I used this function to:

- add `swiper-no-swiping` when the navigation menu is open
- remove `swiper-no-swiping` when the navigation menu is closed

This ensured that:

- the menu would close on external clicks;
- the ImageSlider component was still swipeable.

# 4 | Related Links

- Backend repo link: https://github.com/Bilaal96/blog-strapi
