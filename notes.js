// by default Next create server components
// if we want to use client component then we have to use 'use client' of top level of component (using use client we can use our hooks and other things.)
// whatever you create a page that consider as a route. we have to give filename as page.js
// if we want to create dynamic routes like product details then create a folder like this -- [details]
// if we want more routes then folder name will be eg: /search/1/5/6 -- > [...]
// if we want to extract the url/route from above bar -- > usePathName
// if we want to navigate to another routes --- > useRouter() ---> router.push('/')
// if we want to extract params from search bar  -----> useSearchparams() -->
// if we want parmas data in server component the we can pass params in component and for queryParams ---> searchParams
// if we want to create custom 404 not found so we can create not-found.js file in app folder/route
