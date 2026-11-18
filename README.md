# Sensations

## About
This is my first development, built with HTML, CSS, Bootstrap and a small amount of JS.

Sensations is a website for a custom candle business. It helps people find a candle that fits the moment, whether that is a chance to unwind after a stressful day, a thoughtful gift, or a way to feel closer to someone they miss.

Welcome to Sensations, where a candle becomes something more. Whether you want to relive precious memories of a loved one overseas or no longer with us, or simply need a moment of calm, our custom candles let you choose a scent, a shape and a mood that feels right. Browse the range, or get in touch to design a candle of your own.

## Table of contents

- [About](#about)
- [User Experience (UX)](#ux)
  - [Strategy](#strategy)
    - [Target audience](#target-audience)
    - [User stories](#user-stories)
  - [Skeleton](#skeleton)
  - [Surface](#surface)
    - [Colour](#colour)
- [Features](#features)
  - [Navigation](#navigation)
  - [Home page](#home-page)
  - [Candles page](#candles-page)
  - [Gallery page](#gallery-page)
  - [Custom orders page](#custom-orders-page)
  - [Success page](#success-page)
- [Testing](#testing)
  - [Bugs found and fixed](#bugs-found-and-fixed)
  - [Known issues](#known-issues)
- [Credits](#credits)

## UX

### Strategy
Everyone has someone they miss, whether that is a loved one who is no longer here, or a partner or friend who is deployed overseas, in the forces or in commercial work. Sensations is built around that feeling. A candle with a scent that reminds you of someone is a simple way to feel close to them, and a custom candle can also help you unwind after a stressful day. The aim of the site is to make it easy to find or design a candle that fits the moment.

#### Target audience
Sensations is aimed at two groups:

1. **Stressed or busy people**: who want a candle to help them unwind, focus or create a calm space, particularly after a demanding day at work.

2. **Gift buyers**: looking for something personal for someone else, including people who want to remember a loved one or stay close to someone who is far away.

#### User stories

**Must have**

- As a visitor, I want to see what Sensations offers as soon as the page opens, so that I know if it's right for me.
- As a stressed worker, I want to browse candles by mood (relax, focus, energise), so that I can find one that suits how I want to feel.
- As a shopper, I want to see each candle's scent, size and price, so that I can compare them.
- As a user, I want a clear navigation menu on every page, so that I can find things easily.
- As a user on my phone, I want the site to work on a small screen, so that I can browse anywhere.

**Should have**

- As a gift buyer, I want to see gift and memorial options, so that I can find something meaningful for someone else.
- As a customer, I want to enquire about a custom candle (shape, scent, crackle wick), so that I can get one made for me.
- As a visitor, I want to look through past candle designs, so that I can get ideas and decide what mood I want in a candle of my own.

**Could have**

- As a visitor, I want links to social media, so that I can follow Sensations.
- As the Sensations business owner, I want to show the upcoming sound-recording candle, so that I can build interest in it before it launches.

### Skeleton

I planned the layout of the Home page with wireframes at three screen sizes, drawn in Excalidraw, starting with mobile and working up.

- Home page: [View all sizes in Excalidraw](https://excalidraw.com/#json=fdP5koSWRAkm2BOPnYN7e,admn2GMpF2jozJRBVkGfUg) | PNGs: [Mobile](assets/wireframe/wireframe-home-mobile.png) | [Tablet](assets/wireframe/wireframe-home-tablet.png) | [Desktop](assets/wireframe/wireframe-home-desktop.png)
- Candles page: [View all sizes in Excalidraw](https://excalidraw.com/#json=kDwd309jPNA6DRb74UTtb,anNZee22k9o65CHl411oOA) | PNGs: [Mobile](assets/wireframe/wireframe-candles-mobile.png) | [Tablet](assets/wireframe/wireframe-candles-tablet.png) | [Desktop](assets/wireframe/wireframe-candles-desktop.png)
- Gallery page: [View all sizes in Excalidraw](https://excalidraw.com/#json=SMt9CQW0mbja2K5XBbniC,qoA03XfeAS90V35jBVMY-w) | PNGs: [Mobile](assets/wireframe/wireframe-gallery-mobile.png) | [Tablet](assets/wireframe/wireframe-gallery-tablet.png) | [Desktop](assets/wireframe/wireframe-gallery-desktop.png)
- Custom orders page: [View all sizes in Excalidraw](https://excalidraw.com/#json=PDI2VwuLRafEuKjVjYz-C,iK0aJgdXGHB7iFDIKFGXRw) | PNGs: [Mobile](assets/wireframe/wireframe-custom-orders-mobile.png) | [Tablet](assets/wireframe/wireframe-custom-orders-tablet.png) | [Desktop](assets/wireframe/wireframe-custom-orders-desktop.png)
- Success page: [View all sizes in Excalidraw](https://excalidraw.com/#json=CZ3Ce9ZrhSUcGao1KSz15,I-RfXYvLUIULMRFXDWunqw) | PNGs: [Mobile](assets/wireframe/wireframe-success-mobile.png) | [Tablet](assets/wireframe/wireframe-success-tablet.png) | [Desktop](assets/wireframe/wireframe-success-desktop.png)

#### Differences from the wireframes

- The intro picture is a portrait crop, shown at its natural size beside the text, instead of the wider image in the wireframe.
- The mood cards use square images, and the mood name sits above each picture as drawn.
- The footer includes phone opening hours, and three social links (Facebook, Instagram and X).

Note: Opening the Excalidraw links may show a warning about replacing the current canvas. This is normal, and the PNGs open directly.

### Surface

#### **Colour**

| Colour | Hex | Used for |
|---|---|---|
| White | `#ffffff` | Page and card backgrounds, navbar and footer text |
| Dark Coffee | `#2f231d` | Navbar and footer |
| Dark Coffee | `#412e23` | Headings |
| Dark Coffee | `#2e2520` | Body text |
| Brown Bark | `#6b4226` | Buttons and outlines |
| Toffee Brown | `#8a5e3c` | Navbar button on hover |

I wanted Sensations to feel warm and calm, so I used a palette of browns, the colour of candle wax, wood and coffee. The page itself stays white, which keeps the text easy to read and lets the browns stand out in the navbar, footer, headings and buttons.

I built the palette with [Coolors](https://coolors.co/2f231d-2e2520-8a5e3c-6b4226-412e23), and I used it to check that every text and background pair has good contrast, because accessibility mattered to me. All of them are above the 4.5:1 minimum, and body text on white is almost 15:1.

![Colour palette for Sensations, showing five brown shades with their hex codes](assets/images/colour-palette.png)

The darkest browns are used for the navbar, footer, headings and body text. The two lighter browns are used for buttons: the middle brown for the button and its outline, and the lightest for the navbar button when it's hovered over.

## Features

### Navigation

A sticky navigation bar on every page. On larger screens, the links sit across the top, with the current page in bold.

![Navigation bar on a desktop screen, showing the Sensations name and five links](assets/screenshots/navbar-desktop.png)

On small screens, the links collapse into a menu button, which opens to show them stacked.

![Navigation bar on a phone, with the menu open and five links listed](assets/screenshots/navbar-mobile-open.png)

### Home page
- A full-width hero image of lit candles.
- A tagline and an Explore Candles button that links to the Candles page.
- A short introduction with a picture.
- Four mood cards (Relax, Focus, Energise and Reminisce), shown two by two on phones and four across on larger screens.
- A footer with contact details, phone opening hours and social links that open in a new tab.

| Desktop | Mobile |
|:---|:---|
| <img src="assets/screenshots/home-desktop.jpg" width="650" align="top"> | <img src="assets/screenshots/home-mobile.jpg" width="220" align="top"> |

### Candles page

- Eight scented candles arranged in four mood columns (Relax, Focus, Energise and Reminisce), two in each.
- Every candle shows its picture, scent, size and price.

<img src="assets/screenshots/candles-desktop.jpg" alt="Candles page on a desktop screen" width="650">

### Gallery page

- A mosaic of eight pictures of past candle designs, laid out edge to edge.
- There are no captions, so visitors can read their own mood into each design.
- The layout steps down to a single column on phones.

<img src="assets/screenshots/gallery-desktop.jpg" alt="Gallery page on a desktop screen, showing eight candle pictures in a mosaic" width="650">

### Custom orders page

- Two ways to order a custom candle: gift candles and memorial candles, each with a picture showing wrapping and personalisation options.
- A "coming soon" note for a future voice-recording candle.
- A pricing table with four sizes (150g, 200g, 300g and 400g), shown full width on phones and half width on larger screens.
- An enquiry form with name, email, size, occasion and scent ideas as required fields, an optional crackle wick tick box and an optional message. The fields sit side by side on larger screens and stack on phones.
- The form checks the input in the browser before it is sent, and shows the confirmation page once it is complete.
- The form differs from the wireframe, with it not sitting beside the pricing, this is due to the form being too crampt. Placing it below allows for more space and a more professional look.

<img src="assets/screenshots/custom-orders-desktop.jpg" alt="Custom orders page on a desktop screen" width="650">

### Success page

- A confirmation message thanking the visitor, with a button back to the Home page.
- The message sits in the middle of the page between the navigation bar and the footer.
- The page is not in the navigation menu. Visitors reach it by sending the Custom orders enquiry form.

<img src="assets/screenshots/success-desktop.jpg" alt="Success page on a desktop screen" width="650">

## Testing

### Bugs found and fixed

Bugs found during development and testing, with the cause and fix for each. Click an evidence line to see the screenshots.

| # | Bug | Cause | Fix |
|---|---|---|---|
| 1 | A stray underline appeared beside the Facebook and Instagram icons in the footer | Bootstrap's default link style underlined the space after each icon | Added `text-decoration: none` to the social link rules for normal, hover and focus states |
| 2 | Candle cards were different heights at some widths, so the second row did not line up | Longer scent names wrapped onto two lines in the narrower columns | Added a minimum height to the candle card bodies for screens 992px and wider |
| 3 | The pricing table was too narrow on phones, so the "Extra large, 400g" label wrapped onto two lines | A Bootstrap class (`w-50`) fixed the table at half width on every screen size | Removed the class, made the table full width by default, and set it to half width only from 768px upwards |
| 4 | On small screens, the menu stayed open after tapping an in-page link such as Contact | Bootstrap only closes its mobile menu when its own toggle button is pressed, not when a link inside it is clicked | Added a small script that scrolls to the section and closes the menu when a link to the same page is tapped |

<details>
<summary>Bug 1 evidence: stray underline</summary>

**Before the fix:** a small line appears beside the first two icons.

![Footer social icons with a stray underline beside the Facebook and Instagram icons](assets/screenshots/bug-social-underline-before.png)

**Cause:** Bootstrap's `a` rule applies an underline to every link.

![Browser developer tools showing Bootstrap's link rule setting text-decoration to underline](assets/screenshots/bug-social-underline-devtools.png)

</details>

<details>
<summary>Bug 2 evidence: uneven candle cards</summary>

**Before the fix:** at 1159px wide, the top-row cards differ in height because longer scent names wrap onto two lines.

![Candle cards of uneven height at 1159px](assets/screenshots/bug-candle-cards-before.png)

**The fix:** a minimum height on the card bodies, inside the media query for screens 992px and wider.

![CSS rule setting a minimum height on the candle card bodies](assets/screenshots/bug-candle-cards-fix.png)

**After the fix:** every card in each row is the same height.

![Candle cards level at 1159px after the fix](assets/screenshots/bug-candle-cards-after.png)

</details>

<details>
<summary>Bug 3 evidence: pricing table on phones</summary>

**Before the fix:** at 375px wide, the table is only half the width of the page, so "Extra large, 400g" wraps onto two lines.

![Pricing table half width on a phone, with a wrapped label](assets/screenshots/bug-pricing-table-before.png)

**The fix, part 1:** the table is set to full width by default, in the Custom orders section of the stylesheet.

![CSS rule setting the pricing table to full width](assets/screenshots/bug-pricing-table-fix-base.png)

**The fix, part 2:** a media query, inside the 768px block, sets it to half width on tablets and larger.

![Media query setting the pricing table to half width from 768px upwards](assets/screenshots/bug-pricing-table-fix-media.png)

**After the fix:** the table fills the width on a phone, and every label fits on one line.

![Pricing table full width on a phone](assets/screenshots/bug-pricing-table-after.png)

</details>

<details>
<summary>Bug 4 evidence: mobile menu stays open</summary>

Links to other pages already worked, because the new page loads with the menu closed. Only links to a section on the same page, such as Contact, left the menu open.

| Before the fix | After the fix |
|---|---|
| <img src="assets/screenshots/bug-menu-before.png" alt="Mobile menu left open after tapping Contact" width="200"> | <img src="assets/screenshots/bug-menu-after.png" alt="Mobile menu closed after tapping Contact" width="200"> |

**Before the fix:** on a phone, tapping Contact scrolls to the footer, but the menu stays open, and Contact still shows its hover colour.

**The fix, part 1:** a short JavaScript file listens for clicks on the menu links. When a link points to a section on the same page, it scrolls there smoothly and closes the menu.

![script.js, which closes the menu when an in-page link is clicked](assets/screenshots/bug-menu-fix-script.png)

**The fix, part 2:** the script is linked at the bottom of every page, after Bootstrap's own script.

![The script tag with its comment at the bottom of a page](assets/screenshots/bug-menu-fix-link.png)

**After the fix:** tapping Contact scrolls to the footer and the menu closes.

</details>

### Code validation

#### HTML

Each page was checked with the [W3C Nu HTML Checker](https://validator.w3.org/nu/) by pasting in its code. All five pages pass with no errors or warnings.

| Page | Result |
|---|---|
| index.html | Pass, after one fix (see below) |
| candles.html | Pass |
| gallery.html | Pass |
| custom-orders.html | Pass |
| success.html | Pass |

**Issue found on the Home page:** the validator reported an error and a warning. The hero was a `<section>` with `role="img"`, which is not allowed on that element, and the intro was a `<section>` without a heading. Both were changed to `<div>` elements, and the page then passed.

<details>
<summary>HTML validator evidence</summary>

**Home page, before the fix:**

![Validator report showing one error and one warning for index.html](assets/screenshots/validator-html-index-before.png)

**Home page, after the fix:**

![Validator report for index.html with no errors or warnings](assets/screenshots/validator-html-index.png)

**Candles:** ![Validator report for candles.html with no errors or warnings](assets/screenshots/validator-html-candles.png)

**Gallery:** ![Validator report for gallery.html with no errors or warnings](assets/screenshots/validator-html-gallery.png)

**Custom orders:** ![Validator report for custom-orders.html with no errors or warnings](assets/screenshots/validator-html-custom-orders.png)

**Success:** ![Validator report for success.html with no errors or warnings](assets/screenshots/validator-html-success.png)

</details>

## Credits

- Favicon: candle emoji graphic from [Twemoji](https://github.com/twitter/twemoji), copyright 2020 Twitter, Inc and other contributors, licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Generated with [favicon.io](https://favicon.io).
- Hero, intro, mood card, candle, custom order and some gallery images: generated with Google Gemini. The prompts and results are in [ai-prompts](ai-prompts/).
- Gallery photo: [black & white candles](https://unsplash.com/photos/black-and-white-candle-on-brown-wooden-holder-YasQvzPbGOQ) by Hanna Balan on Unsplash used under the [Unsplash License](https://unsplash.com/license)
- Gallery photo of two hugging candles: [Two brown candles](https://unsplash.com/photos/two-brown-candles-ZDZzaTh8elk) by Dmitri Leychu on Unsplash, used under the [Unsplash License](https://unsplash.com/license)
- Christmas tree candle: [A small red christmas tree](https://unsplash.com/photos/a-small-christmas-tree-made-out-of-folded-paper-ZhKdPOaC9yA) by Ionela Mat on Unsplash, used under the [Unsplash License](https://unsplash.com/license)
- Fonts: [Lora](https://fonts.google.com/specimen/Lora) and [Nunito](https://fonts.google.com/specimen/Nunito) from Google Fonts.
- Layout and components: [Bootstrap 5.3](https://getbootstrap.com/).
- Icons: [Font Awesome](https://fontawesome.com/).
- Colour palette: created and contrast-checked with [Coolors](https://coolors.co/2f231d-2e2520-8a5e3c-6b4226-412e23).