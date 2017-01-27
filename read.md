
## Introduction

## Some improvements

### Home page navigation
1. See the vertical cut-off lines in the navigation bar. I think it would be better to create them will `border-left` or `before`, `after` pseudo-elements. Creating an empty Dom element will slow down the page.

2. Using media queries `min-width rather` then `max-width` (`#imgLogoHoolders`) may be better with respect to mobile first principle. Especially since Bootstrap is a mobile first framework.

### Silvernight page
3. A little css bug in https://hoolders.com/succes_silvernight/. When resizing the page into sizes less than 991px,
the title will collapse into each other

## More
// Todo :
1 add alt for each image
2 mobile first
specific each device sizes -xm -sm -md -lg
