# Hoolders

##Introduction

This document will talk about the following things:

1. The structure of my CSS codes

2. More thinkings about framework on this project

3. Some hidden bugs and some possible improvements that I found for the Hoolders site.


## Css structure

Besides for third-party CSS files, I have written three CSS files for this project. The `grid.library.css` file contains frequently-used and project independent styles (eg. `margin` and `padding`). The `hoolders.library.css` file contains common styles that are project dependent, which means they will be used in different parts of this project. The `index.css` file contains styles that are used for a unique section of the page. As more CSS files will result in more Http requests, therefore, all CSS files should be minimized into one CSS file in the final product.

## More thinking

When I write these HTML codes for this project, I am always thinking about frameworks. Imagine that we have 10 thumbnail products and we want to add a new class or new element into these thumbnails, we will have to do the same dirty work for 10 times. But if we use frameworks such as AngularJs (\*ngFor) or VueJs (v-for) and define thumbnail as a component, then all we need to do is adding one class or one element. Moreover, the number of thumbnails can be defined in the database, so that only by changing a parameter in a table of the database can eventually change the number of thumbnails on our page. That's much more efficient and the code is much more maintainable. It may take a longer time to start using such frameworks but they will show their value in long-term. Since using JS frameworks is not the propose of this test, I just code in a classical way. ( After our email exchanges, I added some more interactions for the page. But I don't have enough time to reconstruct the whole page by using frameworks. There will be two exams next week... )     

## Some suggestions on Hoolders's page

### Home page navigation

1. See the vertical cut-off lines in the navigation bar. I think it would be better to create them with `border-left` or `before`, `after` pseudo-elements. Because creating an empty Dom element just for decoration will slow down the page.

2. Using media queries `min-width rather` than `max-width` (eg. `#imgLogoHoolders`) may be better with respect to mobile-first principle. Especially since Bootstrap is a mobile first framework.

### Silvernight page

1. A little bug in https://hoolders.com/succes_silvernight/. When resizing the page into sizes less than 991px, the title will collapse into each other. I've make a [screen-shot](./media/title-collapse.png) for it
