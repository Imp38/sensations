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
  - [Code validation](#code-validation)
    - [HTML](#html)
    - [CSS](#css)
    - [Manual Testing](#manual-testing)
  - [Performance Testing](#performance-testing)
    - [Summary across pages](#summary-across-pages)
    - [Home page performance](#home-page-performance)
    - [Candles page performance](#candles-page-performance)
    - [Gallery page performance](#gallery-page-performance)
    - [Custom orders page performance](#custom-orders-page-performance)
    - [Success page performance](#success-page-performance)
    - [404 page performance](#404-page-performance)
    - [Performance testing limitations](#performance-testing-limitations)
- [Project Management](#project-management)
- [Deployment](#deployment)
  - [Before you start](#before-you-start)
  - [Creating your own copy and deploying it](#creating-your-own-copy-and-deploying-it)
  - [Running the site on your own computer](#running-the-site-on-your-own-computer)
  - [Saving and publishing changes](#saving-and-publishing-changes)
  - [External links and kits](#external-links-and-kits)
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

### 404 page

- A friendly "Page not found" message with a button back to the Home page, shown when a visitor opens an address that does not exist on the site.
- The page keeps the same navigation bar and footer as the other pages, so visitors can still move around the site.
- The page is not in the navigation menu. GitHub Pages shows it automatically when a page cannot be found.

<img src="assets/screenshots/404-desktop.png" alt="404 page on a desktop screen" width="650">

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
| 404.html | Pass |

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

**404:** ![Validator report for 404.html with no errors or warnings](assets/screenshots/validator-html-404.png)

</details>

#### CSS

The stylesheet was checked with the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) using the CSS level 3 + SVG profile. It passes with no errors.

**Issue found:** `max-width: auto` in the `.intro-image` rule is not a valid value. It was replaced with `max-width: 100%`, and an unnecessary `width: auto` was removed.

The validator shows five warnings. They are expected: it cannot check the Google Fonts `@import` in direct input mode, and it does not statically check CSS variables.

<details>
<summary>CSS validator evidence</summary>

**Before the fix:** one error was reported for `.intro-image`.

![CSS validator report showing one error](assets/screenshots/validator-css-before.png)

**The rule before and after:**

![The .intro-image rule containing the invalid max-width: auto](assets/screenshots/css-fix-before.png)

![The .intro-image rule with max-width set to 100%](assets/screenshots/css-fix-after.png)

**After the fix:** the stylesheet validates.

![CSS validator report with no errors](assets/screenshots/validator-css.png)

</details>

### Manual Testing

I tested the features by hand on the live site, recording what I expected to happen and what actually happened.

#### Responsiveness

| Screen size | Device type | Viewport width | Result | Comment |
|---|---|---|---|---|
| Mobile | Smartphone | 375px | ✅ Pass | Content stacks in one column, the navbar collapses to the hamburger menu and nothing scrolls sideways |
| Tablet | Tablet | 768px | ✅ Pass | Layout adjusts and images are not cut off |
| Laptop | Small laptop/desktop | 1024px | ✅ Pass | Full navbar shows and content stays within the page width |

#### Navbar

| Test | Expected result | Result | Comment |
|---|---|---|---|
| Resize to different device sizes | The navbar adjusts to the screen size | ✅ Pass | Responds at mobile, tablet and desktop widths on every page |
| Hamburger menu on mobile | The menu opens and closes when the hamburger icon is tapped | ✅ Pass | On phone-width screens the links collapse into the hamburger menu |
| Click Home, Candles, Gallery and Custom orders | Each link opens its own page | ✅ Pass | Tested from every page |
| Click Contact | The page scrolls to the contact section in the footer | ✅ Pass | Contact is an anchor (`#contact`) to the footer, which is on every page, so it works from each one |
| Click the Sensations logo | The Home page opens | ✅ Pass | The logo and site name are a link to the Home page |

#### Return-to-home buttons

| Test | Expected result | Result | Comment |
|---|---|---|---|
| "Return to home" on the Success page | The Home page opens | ✅ Pass | Reached by sending the Custom orders form |
| "Back to home" on the 404 page | The Home page opens | ✅ Pass | Tested on the live site at a mistyped address (`/sensations/not-a-page`) |
| Visit an address that does not exist | The custom 404 page appears with the navbar and footer | ✅ Pass | Tested on the live site; GitHub Pages serves `404.html` automatically |

#### Custom orders enquiry form

| Test | Expected result | Result | Comment |
|---|---|---|---|
| Submit with Name empty | The form does not send and a message appears at the Name box asking for it to be filled in | ✅ Pass | |
| Submit with Email empty | The form does not send and a message appears at the Email box | ✅ Pass | |
| Enter an email without an @ symbol | The form does not send and a message asks for an @ to be included | ✅ Pass | Email field checks the format as well as being required |
| Submit with Size of gift not selected | The form does not send and a message appears at the drop-down | ✅ Pass | A choice has to be selected |
| Submit with Occasion not selected | The form does not send and a message appears at the drop-down | ✅ Pass | A choice has to be selected |
| Submit with Scent ideas empty | The form does not send and a message appears at the Scent ideas box | ✅ Pass | |
| Submit with the crackle wick box and message left empty | The form sends normally | ✅ Pass | These two fields are optional by design |
| Fill in all required fields and submit | The Success page opens | ✅ Pass | |
#### Footer social links

| Test | Expected result | Result | Comment |
|---|---|---|---|
| Icons present | Facebook, Instagram and X icons show in the footer | ✅ Pass | Same footer on every page |
| Click each icon | Site opens in a new tab and the Sensations tab stays open | ✅ Pass | Links go to each site's home page, because Sensations is a fictional business |
| Link attributes | Each link has `target="_blank"` and `rel="noopener"` | ✅ Pass | Checked in the footer code |
| Hover over an icon | Icon changes colour | ✅ Pass | Uses the CSS `:hover` rule on `.social-link` |

### Performance Testing

Performance was tested with Lighthouse in Chrome DevTools on the live pages (`https://imp38.github.io/sensations/`), in an Incognito window, using the **mobile** preset (Moto G Power, slow 4G). Lighthouse results vary from run to run, so each stage was run **three times** and the **median** is reported. Each page has its own section below, in the same layout: a results table, what I changed and why, notes, and the screenshots.

#### Summary across pages

| Page | Baseline score | Final score | Baseline LCP | Final LCP |
|---|---|---|---|---|
| Home | 78 | 76 | 5.0 s | 5.1 s |
| Candles | 71 | 78 | 7.1 s | 4.7 s |
| Gallery | 70 | 79 | 7.6 s | 3.4 s |
| Custom orders | 81 | 82 | 4.2 s | 3.9 s |
| Success (baseline only) | 90 | 90 | 2.9 s | 2.9 s |
| 404 (baseline only) | 92 | 92 | 2.7 s | 2.7 s |

Accessibility scored **100** and Best Practices **96** on every run so far. Total Blocking Time was 0 ms throughout.

#### Home page performance

**Results (median of three runs)**

| Stage | Performance | FCP | LCP | CLS |
|---|---|---|---|---|
| 1. Baseline (original images, lazy loading) | 78 | 1.7 s | 5.0 s | 0.052 |
| 2. Images compressed, lazy loading removed | 70 | 3.0 s | 8.1 s | 0.052 |
| 3. Width and height added to images | 70 | 2.9 s | 7.9 s | 0.052 |
| 4. Images converted to WebP | 72 | 2.8 s | 7.9 s | 0.006 |
| 5. WebP recompressed + hero image preloaded | 68 | 2.9 s | 7.0 s | 0.143 |
| 6. Lazy loading restored + Google Fonts preconnect | **76** | **2.9 s** | **5.1 s** | **0.006** |

**What I changed**

1. **Baseline:** the images were uncompressed, with `loading="lazy"` on the images below the fold.
2. **Compression:** I compressed the images and removed `loading="lazy"`, assuming it wasn't needed. The score **dropped** and LCP rose from 5.0 s to 8.1 s. Without lazy loading, every image downloaded at once and competed with the hero image.
3. **Width and height:** added to the images so the browser can reserve space before they load. The mood card images also needed `height: auto` in the CSS, otherwise the height attribute stretched them.
4. **WebP:** converted the hero and mood images to WebP. The files were the same size at first, so I recompressed them with TinyJPG (about 14% smaller).
5. **Hero preload:** Lighthouse showed that the hero image (a CSS background) was found late. Adding `<link rel="preload" ... fetchpriority="high">` fixed the "LCP request discovery" warning. The "Layout shift culprits" panel showed the remaining CLS came from the Google Fonts loading late.
6. **Final changes:** I restored `loading="lazy"` on the four mood card images only (below the fold) and added `preconnect` links for Google Fonts. LCP returned to about 5 s and CLS to 0.006.

**Notes**

The final median (76) is level with the baseline (78) once run-to-run variation is taken into account: the three baseline runs alone ranged from 77 to 86. The measurable gains are the more stable layout (CLS) and the much smaller image files.

**Screenshots**

<details>
<summary>Stage 1 (baseline): runs of 77, 86 and 78</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Home stage 1 run 1](assets/screenshots/lighthouse/home-stage1-run1.png) | ![Home stage 1 run 2](assets/screenshots/lighthouse/home-stage1-run2.png) | ![Home stage 1 run 3](assets/screenshots/lighthouse/home-stage1-run3.png) |

</details>

<details>
<summary>Stage 2 (compressed, no lazy loading): runs of 71, 61 and 70</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Home stage 2 run 1](assets/screenshots/lighthouse/home-stage2-run1.png) | ![Home stage 2 run 2](assets/screenshots/lighthouse/home-stage2-run2.png) | ![Home stage 2 run 3](assets/screenshots/lighthouse/home-stage2-run3.png) |

</details>

<details>
<summary>Stage 3 (width and height): runs of 70, 71 and 66</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Home stage 3 run 1](assets/screenshots/lighthouse/home-stage3-run1.png) | ![Home stage 3 run 2](assets/screenshots/lighthouse/home-stage3-run2.png) | ![Home stage 3 run 3](assets/screenshots/lighthouse/home-stage3-run3.png) |

</details>

<details>
<summary>Stage 4 (WebP): runs of 72, 71 and 74</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Home stage 4 run 1](assets/screenshots/lighthouse/home-stage4-run1.png) | ![Home stage 4 run 2](assets/screenshots/lighthouse/home-stage4-run2.png) | ![Home stage 4 run 3](assets/screenshots/lighthouse/home-stage4-run3.png) |

Evidence for the recompression step:

![Image delivery panel, WebP files not smaller](assets/screenshots/lighthouse/home-stage4-image-delivery.png)
![TinyJPG results](assets/screenshots/lighthouse/home-stage4-tinyjpg.png)

</details>

<details>
<summary>Stage 5 (hero preload): runs of 71, 65 and 68</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Home stage 5 run 1](assets/screenshots/lighthouse/home-stage5-run1.png) | ![Home stage 5 run 2](assets/screenshots/lighthouse/home-stage5-run2.png) | ![Home stage 5 run 3](assets/screenshots/lighthouse/home-stage5-run3.png) |

Why the preload was added, and the line itself:

![LCP request discovery warnings](assets/screenshots/lighthouse/home-stage5-lcp-discovery.png)
![Preload link in the head](assets/screenshots/lighthouse/home-stage5-preload-code.png)

</details>

<details>
<summary>Stage 6 (final): runs of 70, 76 and 80</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Home stage 6 run 1](assets/screenshots/lighthouse/home-stage6-run1.png) | ![Home stage 6 run 2](assets/screenshots/lighthouse/home-stage6-run2.png) | ![Home stage 6 run 3](assets/screenshots/lighthouse/home-stage6-run3.png) |

LCP breakdown from run 3 (score 80): the hero image starts loading almost immediately (20 ms resource load delay), so the preload is working.

![Home LCP breakdown, run 3](assets/screenshots/lighthouse/home-stage6-lcp-breakdown.png)

</details>

#### Candles page performance

**Results (median of three runs)**

| Stage | Performance | FCP | LCP | CLS |
|---|---|---|---|---|
| 1. Baseline (JPG images, no lazy loading) | 71 | 2.9 s | 7.1 s | 0.006 |
| 2. `fetchpriority="high"` on the LCP image + lazy loading below the fold | **80** | 2.9 s | **4.3 s** | 0.008 |
| 3. Images converted to WebP and compressed | 78 | 3.0 s | 4.7 s | 0.008 |

**What I changed**

1. **Baseline:** Lighthouse reported that the LCP image (a candle card) had no `fetchpriority`, and that the eight JPG images totalled 1,053 KiB.
2. **Priority and lazy loading:** I added `fetchpriority="high"` to the LCP image and `loading="lazy"` to the cards below the first two. LCP dropped from 7.1 s to 4.3 s and the score rose by 9 points, because the below-the-fold images no longer compete with the first ones.
3. **WebP and compression:** I converted the eight images to WebP with CloudConvert, then compressed them with TinyJPG. Conversion alone barely changed the file sizes; the compression did the saving. Image weight halved, from 1,053 KiB to 532 KiB.

**Notes**

The score stayed about the same after the WebP stage (78 against 80, within normal run-to-run variation). With the lower images already lazy-loaded, the remaining delay comes from render-blocking CSS and fonts, not image size. The smaller files still mean less data for visitors on slow connections. Width and height attributes were not added to the candle images, because CLS was already 0.006 to 0.008. Lighthouse still notes that the images (1408 × 768) are larger than their displayed size (386 × 211); I kept the original pictures rather than cropping them.

**Screenshots**

<details>
<summary>Stage 1 (baseline): runs of 71, 71 and 71</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Candles stage 1 run 1](assets/screenshots/lighthouse/candles-stage1-run1.png) | ![Candles stage 1 run 2](assets/screenshots/lighthouse/candles-stage1-run2.png) | ![Candles stage 1 run 3](assets/screenshots/lighthouse/candles-stage1-run3.png) |

What Lighthouse reported:

![Image delivery, JPG images](assets/screenshots/lighthouse/candles-stage1-image-delivery.png)
![LCP request discovery, fetchpriority missing](assets/screenshots/lighthouse/candles-stage1-lcp-discovery.png)

</details>

<details>
<summary>Stage 2 (fetchpriority and lazy loading): runs of 85, 80 and 80</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Candles stage 2 run 1](assets/screenshots/lighthouse/candles-stage2-run1.png) | ![Candles stage 2 run 2](assets/screenshots/lighthouse/candles-stage2-run2.png) | ![Candles stage 2 run 3](assets/screenshots/lighthouse/candles-stage2-run3.png) |

LCP breakdown after the change: the LCP image starts loading within 20 ms.

![Candles LCP breakdown](assets/screenshots/lighthouse/candles-stage2-lcp-breakdown.png)

</details>

<details>
<summary>Stage 3 (WebP and compression): runs of 78, 84 and 78</summary>

| Run 1 | Run 2 | Run 3 |
|---|---|---|
| ![Candles stage 3 run 1](assets/screenshots/lighthouse/candles-stage3-run1.png) | ![Candles stage 3 run 2](assets/screenshots/lighthouse/candles-stage3-run2.png) | ![Candles stage 3 run 3](assets/screenshots/lighthouse/candles-stage3-run3.png) |

Conversion and compression, and the image weight afterwards (532 KiB):

![CloudConvert results](assets/screenshots/lighthouse/candles-stage3-cloudconvert.png)
![TinyJPG results](assets/screenshots/lighthouse/candles-stage3-tinyjpg.png)
![Image delivery, WebP images](assets/screenshots/lighthouse/candles-stage3-image-delivery.png)

</details>

#### Gallery page performance

| Stage | Change | Performance | FCP | LCP | CLS |
| --- | --- | --- | --- | --- | --- |
| 1 | Baseline | 70 | 3.0 s | 7.6 s | 0.006 |
| 2 | `fetchpriority="high"` on the LCP image, lazy loading below the fold | 83 | 3.0 s | 3.9 s | 0.006 |
| 3 | Images converted to WebP and compressed | 79 | 3.0 s | 3.4 s | 0.13 |

Median of three mobile runs per stage on the live site. Total Blocking Time was 0 ms in every run, and Accessibility (100) and Best Practices (96) did not change.

**What I changed**

- **Stage 2:** added `fetchpriority="high"` to the carved mandala candle, which Lighthouse identified as the LCP image. The first two images load normally and the other six have `loading="lazy"`.
- **Stage 3:** converted all eight images to WebP with Squoosh (quality 75-80). Six of them were then compressed further with TinyJPG. TinyJPG made `gallery-hugging-candles` and `gallery-ceramic-pots` visibly worse, so I redid those two from the originals with Squoosh only. CloudConvert's free limit ran out, so I used Squoosh for this page.

**Notes**

- LCP improved from 7.6 s to 3.4 s. Most of that came from Stage 2 (7.6 s to 3.9 s).
- The score fell from 83 to 79 at Stage 3 even though LCP improved, because the median CLS rose from 0.006 to 0.13. The three runs gave 0.13, 0.263 and 0.007, and a fourth run gave 0 (score 85, LCP 3.6 s). The same code produced very different layout shift, so I cannot say Stage 3 caused it.
- The layout shift panel from the 0.007 run lists `main` shifting when three web fonts load. I did not capture a panel from a high-CLS run, so the cause of the larger shifts is unconfirmed. It may be the same font loading (see Performance testing limitations).
- In the LCP breakdown for the mandala candle, element render delay (220 ms) was the largest part, ahead of resource load duration (110 ms).
- FCP stayed at 2.9-3.0 s in every run on every stage, as on the other pages.
- Lighthouse still reports about 829 KiB of possible image savings. The heaviest files are `gallery-hugging-candles` (374.7 KiB) and `gallery-ceramic-pots` (268.0 KiB, a 3429x4556 image shown at 388x516), followed by `gallery-twisted-blue` (75.7 KiB).
- I tested resizing the ceramic pots image to its displayed width of 388 px. The file dropped from 1.83 MB to 17.0 kB, but the image was visibly soft when zoomed in, and visitors to a gallery are likely to zoom in. I kept the full-resolution images and accepted the larger files.

<details>
<summary>Stage 1 screenshots (baseline)</summary>

Scores 70, 70, 71. LCP 7.8 s, 7.6 s, 7.5 s. CLS 0.006, 0.007, 0.006.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Gallery stage 1 run 1](assets/screenshots/lighthouse/gallery-stage1-run1.png) | ![Gallery stage 1 run 2](assets/screenshots/lighthouse/gallery-stage1-run2.png) | ![Gallery stage 1 run 3](assets/screenshots/lighthouse/gallery-stage1-run3.png) |

LCP request discovery (`fetchpriority=high` missing on the LCP image):

![Gallery stage 1 LCP request discovery](assets/screenshots/lighthouse/gallery-stage1-lcp-discovery.png)

Improve image delivery (969 KiB estimated savings):

![Gallery stage 1 improve image delivery](assets/screenshots/lighthouse/gallery-stage1-image-delivery.png)

</details>

<details>
<summary>Stage 2 screenshots (fetchpriority and lazy loading)</summary>

Scores 76, 84, 83. LCP 4.9 s, 3.8 s, 3.9 s. CLS 0.006, 0.007, 0.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Gallery stage 2 run 1](assets/screenshots/lighthouse/gallery-stage2-run1.png) | ![Gallery stage 2 run 2](assets/screenshots/lighthouse/gallery-stage2-run2.png) | ![Gallery stage 2 run 3](assets/screenshots/lighthouse/gallery-stage2-run3.png) |

The gallery HTML with `fetchpriority="high"` and `loading="lazy"`:

![Gallery HTML after stage 2](assets/screenshots/lighthouse/gallery-stage2-code.png)

</details>

<details>
<summary>Stage 3 screenshots (WebP conversion and compression)</summary>

Scores 84, 73, 79. LCP 3.1 s, 3.4 s, 4.4 s. CLS 0.13, 0.263, 0.007.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Gallery stage 3 run 1](assets/screenshots/lighthouse/gallery-stage3-run1.png) | ![Gallery stage 3 run 2](assets/screenshots/lighthouse/gallery-stage3-run2.png) | ![Gallery stage 3 run 3](assets/screenshots/lighthouse/gallery-stage3-run3.png) |

An extra run on the same code (score 85, LCP 3.6 s, CLS 0):

![Gallery stage 3 extra run](assets/screenshots/lighthouse/gallery-stage3-extra-run.png)

Squoosh settings (quality 80) on the ceramic pots image, which was 1.83 MB originally:

![Squoosh WebP conversion](assets/screenshots/lighthouse/gallery-stage3-squoosh.png)

First compression pass (Squoosh, then TinyJPG). This reduced the files further, but `gallery-hugging-candles` and `gallery-ceramic-pots` lost visible quality, so I re-uploaded the originals and compressed them once, through Squoosh only:

![TinyJPG results](assets/screenshots/lighthouse/gallery-stage3-tinyjpg.png)

Resize test at 388 px, original against resized:

| Original | 388 px |
| --- | --- |
| ![Original size](assets/screenshots/lighthouse/gallery-stage3-resize-original.png) | ![Resized to 388 px](assets/screenshots/lighthouse/gallery-stage3-resize-388px.png) |

Zoomed in:

| Original | 388 px |
| --- | --- |
| ![Original size, zoomed](assets/screenshots/lighthouse/gallery-stage3-resize-original-zoom.png) | ![Resized to 388 px, zoomed](assets/screenshots/lighthouse/gallery-stage3-resize-388px-zoom.png) |

Lighthouse panels from the third run:

![Improve image delivery](assets/screenshots/lighthouse/gallery-stage3-image-delivery.png)

![LCP breakdown](assets/screenshots/lighthouse/gallery-stage3-lcp-breakdown.png)

![Layout shift culprits](assets/screenshots/lighthouse/gallery-stage3-layout-shift.png)

</details>

#### Custom orders page performance

| Stage | Change | Performance | FCP | LCP | CLS |
| --- | --- | --- | --- | --- | --- |
| 1 | Baseline | 81 | 2.9 s | 4.2 s | 0.018 |
| 2 | `fetchpriority="high"` on the LCP image | 80 | 3.0 s | 4.3 s | 0.018 |
| 3 | Images converted to WebP | 82 | 2.9 s | 3.9 s | 0.018 |

Median of three mobile runs per stage on the live site. Total Blocking Time was 0 ms in every run except one at Stage 2 (50 ms), and Accessibility (100) and Best Practices (96) did not change.

**What I changed**

- **Stage 2:** added `fetchpriority="high"` to the gift candles image, which Lighthouse identified as the LCP image. I left the memorial candles image as it was, because the top of it is already visible on the first mobile screen.
- **Stage 3:** converted both images to WebP with Squoosh (quality 75) at their original size, 1408x768. I did not compress them any further.

**Notes**

- The overall change is small. The score went from 81 to 82 and LCP from 4.2 s to 3.9 s. The score difference is within the variation between runs. The clearest change is LCP at Stage 3, where all three runs (3.7-4.1 s) were faster than all three Stage 2 runs (4.2-5.1 s).
- `fetchpriority` made no measurable difference at Stage 2. The LCP breakdown shows a resource load delay of only 60 ms, so the image was already being requested early. That is most likely why there was little left to improve on a page with two images.
- The first baseline run (score 92, FCP 1.7 s, LCP 3.2 s) was much faster than the other two. I kept it in the results. The median is not affected by it.
- CLS was 0.127 in one Stage 3 run and 0.018 in the other two. I did not capture a layout shift panel from that run, so the cause is unconfirmed.
- The two images are now 143.0 KiB in total, down from 269.5 KiB (47% smaller).
- Lighthouse still reports about 132 KiB of possible savings, all of it because the images are larger (1408x768) than their displayed size (388x212). I kept them at full resolution so they stay sharp on large and high-density screens.
- FCP stayed at 2.9-3.0 s, as on the other pages, apart from the fast first baseline run.

<details>
<summary>Stage 1 screenshots (baseline)</summary>

Scores 92, 76, 81. FCP 1.7 s, 2.9 s, 2.9 s. LCP 3.2 s, 5.1 s, 4.2 s. CLS 0.018, 0.018, 0.007.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Custom orders stage 1 run 1](assets/screenshots/lighthouse/custom-orders-stage1-run1.png) | ![Custom orders stage 1 run 2](assets/screenshots/lighthouse/custom-orders-stage1-run2.png) | ![Custom orders stage 1 run 3](assets/screenshots/lighthouse/custom-orders-stage1-run3.png) |

LCP request discovery (`fetchpriority=high` missing on the LCP image):

![Custom orders stage 1 LCP request discovery](assets/screenshots/lighthouse/custom-orders-stage1-lcp-discovery.png)

Improve image delivery (249 KiB estimated savings):

![Custom orders stage 1 improve image delivery](assets/screenshots/lighthouse/custom-orders-stage1-image-delivery.png)

</details>

<details>
<summary>Stage 2 screenshots (fetchpriority)</summary>

Scores 80, 76, 80. LCP 4.3 s, 5.1 s, 4.2 s. CLS 0.007, 0.018, 0.018.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Custom orders stage 2 run 1](assets/screenshots/lighthouse/custom-orders-stage2-run1.png) | ![Custom orders stage 2 run 2](assets/screenshots/lighthouse/custom-orders-stage2-run2.png) | ![Custom orders stage 2 run 3](assets/screenshots/lighthouse/custom-orders-stage2-run3.png) |

LCP breakdown from the third run:

![Custom orders stage 2 LCP breakdown](assets/screenshots/lighthouse/custom-orders-stage2-lcp-breakdown.png)

</details>

<details>
<summary>Stage 3 screenshots (WebP conversion)</summary>

Scores 82, 80, 83. LCP 4.1 s, 3.7 s, 3.9 s. CLS 0.018, 0.127, 0.018.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Custom orders stage 3 run 1](assets/screenshots/lighthouse/custom-orders-stage3-run1.png) | ![Custom orders stage 3 run 2](assets/screenshots/lighthouse/custom-orders-stage3-run2.png) | ![Custom orders stage 3 run 3](assets/screenshots/lighthouse/custom-orders-stage3-run3.png) |

Squoosh conversion (quality 75). The gift image went from 138 kB to 73.1 kB and the memorial image from 137 kB to 73.4 kB, 47% smaller in each case:

| Gift candles | Memorial candles |
| --- | --- |
| ![Squoosh gift image](assets/screenshots/lighthouse/custom-orders-stage3-squoosh-gift.png) | ![Squoosh memorial image](assets/screenshots/lighthouse/custom-orders-stage3-squoosh-memorial.png) |

The updated HTML:

![Custom orders HTML after stage 3](assets/screenshots/lighthouse/custom-orders-stage3-code.png)

Improve image delivery from the third run (132 KiB estimated savings, all from the displayed-size warning):

![Custom orders stage 3 improve image delivery](assets/screenshots/lighthouse/custom-orders-stage3-image-delivery.png)

</details>

#### Success page performance

| Stage | Change | Performance | FCP | LCP | CLS |
| --- | --- | --- | --- | --- | --- |
| 1 | Baseline (no changes needed) | 90 | 2.9 s | 2.9 s | 0.016 |

Median of three mobile runs on the live site. Total Blocking Time was 0 ms in every run, Accessibility was 100 and Best Practices was 96.

**What I changed**

- Nothing. The page already scored 90 at baseline and has the least content of any page (text only, no images), so the image fixes used on the other pages do not apply. The only items Lighthouse flagged are the render-blocking stylesheets shared by every page (see Performance testing limitations), so I tested the baseline only.

**Notes**

- The largest content on this page is text, so LCP matches FCP (2.9 s).
- One run had a faster FCP (2.4 s) than the other two (2.9 s). I have kept it in the results, and the median is not affected by it.
- Lighthouse lists three render-blocking requests: the Google Fonts stylesheet (770 ms), the Bootstrap CSS from jsDelivr (900 ms) and my own `style.css` (1.7 KiB). It estimates potential savings of 2,060 ms, which is not part of the score. These stylesheets are what style the page, so I kept them as they are, as on the other pages (see Performance testing limitations).

<details>
<summary>Stage 1 screenshots (baseline)</summary>

Scores 90, 92, 90. FCP 2.9 s, 2.4 s, 2.9 s. LCP 2.9 s, 2.9 s, 2.9 s. CLS 0.016, 0.018, 0.016.

| Run 1 | Run 2 | Run 3 |
| --- | --- | --- |
| ![Success stage 1 run 1](assets/screenshots/lighthouse/success-stage1-run1.png) | ![Success stage 1 run 2](assets/screenshots/lighthouse/success-stage1-run2.png) | ![Success stage 1 run 3](assets/screenshots/lighthouse/success-stage1-run3.png) |

</details>

#### 404 page performance

| Stage | Performance | Accessibility | Best Practices | FCP | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| Baseline (no changes needed) | 92 | 100 | 92 | 2.6 s | 2.7 s | 0.018 | 0 ms |

**What I changed**

- Nothing. The page is text only, scored 92 at baseline, and the items Lighthouse flagged either cannot be removed (see Notes) or are shared by every page (see Performance testing limitations).

**Notes**

- This page was tested once, not three times, so these figures are a single run and not a median.
- Lighthouse shows a warning that it was "unable to reliably load the page" with "Status code: 404". This is expected, because an error page is meant to return a 404 status. The scores were still calculated from the page that loaded.
- Best Practices scored 92 because of a console error, "Failed to load resource: the server responded with a status of 404". This is the browser logging the page's own 404 status, so it cannot be removed without making the page return a normal status.
- The other flagged items are shared by every page (the logo size and the render-blocking stylesheets) and are covered in Performance testing limitations.

<details>
<summary>Baseline evidence</summary>

**Run:**

![Lighthouse mobile report for the 404 page](assets/screenshots/lighthouse/404-stage1-run1.png)

**Console error:**

![Lighthouse Best Practices showing the 404 console error](assets/screenshots/lighthouse/404-stage1-console-error.png)

</details>

#### Performance testing limitations

- **Google Fonts `@import`:** Lighthouse flags this as render-blocking, and the late-loading fonts cause the occasional layout shift (on the Home page CLS varied between 0.006 and 0.143 between runs). The 0.143 shift also appeared in one baseline run, before any of my changes, so it comes from the fonts and not from the image work. I kept `@import` in the stylesheet deliberately, as it is the method taught on the course. 
- **Cache lifetimes:** Lighthouse suggests longer caching, but GitHub Pages does not allow the cache headers to be changed.
- **Image sizes:** Lighthouse flags several images as larger than their displayed size, because it tests at a phone-sized viewport where they appear about 388 px wide (on the Gallery and Custom orders pages). I kept the images at their original dimensions instead of resizing them, for two reasons:
  - **Sharpness:** when I resized the largest Gallery image to 388 px, the file dropped from 1.83 MB to 17.0 kB, but it looked visibly soft when zoomed in. Visitors to a gallery are likely to zoom in to judge the quality of the candles, and phones with high-density screens need roughly twice the displayed width to look sharp.
  - **Larger screens:** the same images are shown larger on tablets and desktops, so a file sized for a phone would look blurry there.

  I reduced the file sizes with WebP conversion and compression instead, and accepted that Lighthouse still reports potential savings, for example about 829 KiB on the Gallery and 132 KiB on Custom orders. 

- **Run-to-run variation:** results differ between identical runs because conditions are never exactly the same: the quality of my broadband connection at the time, how quickly GitHub Pages and the CDNs (jsDelivr and Google Fonts) respond, and how busy my computer is. A single run can therefore be unusually fast or slow, so I normally ran each stage three times and report the median, which stops one unusual run from deciding the result. Three runs also gives a clear middle value without making the testing take too long. Every individual run is shown in the screenshots, and small differences between stages should not be over-interpreted.

- **Render-blocking stylesheets:** every page loads the same three stylesheets in its `<head>`: Bootstrap CSS from jsDelivr, the Google Fonts CSS and my own `style.css`. Lighthouse lists them as render-blocking, with an estimated 2,060 ms of potential savings. That figure is an estimate and is not part of the score. They style the whole site, so I left them in place. This is also why FCP stays at around 3 s across the pages.

<details>
<summary>Render-blocking requests (Lighthouse, captured on the Success page)</summary>

![Lighthouse render-blocking requests](assets/screenshots/lighthouse/render-blocking-requests.png)

</details>
<br>

- **Logo size:** Lighthouse flags the navbar logo (`favicon-32x32.png`) on every page as "Serves images with low resolution". It is displayed at 32×32 pixels and Lighthouse expects 48×48 for high-density screens. I left it because the logo is small and looks sharp at its displayed size, and this is the reason Best Practices scores 92 on the pages where nothing else is flagged.

<details>
<summary>Low-resolution image flag (Lighthouse, captured on the 404 page)</summary>

![Lighthouse low-resolution image panel](assets/screenshots/lighthouse/logo-low-resolution.png)

</details>

## Project Management

I planned and tracked Sensations with a GitHub Projects board. Each requirement was written as a user story and moved across the board (Todo, In Progress, Done) as I built it. Stories were labelled must-have, should-have or could-have, so the essential features were built first. All must-have and should-have stories are complete. The one remaining could-have story (#9, the sound-recording candle) is deliberately left In Progress, because the site presents it as "coming soon". You can view the [Sensations project board](https://github.com/users/Imp38/projects/3).

![Sensations project board showing nine completed user stories and one could-have story in progress](assets/screenshots/board-final.png)

## Deployment

The site is deployed with GitHub Pages and is live at https://imp38.github.io/sensations/.

### Before you start

You need a free GitHub account, a code editor (this project used Visual Studio Code) and Git installed on your computer. Python 3 is only needed if you want to preview the site with a local web server. Otherwise no other software is needed, because the site is plain HTML, CSS and a little JavaScript, and Bootstrap and Font Awesome load from the web.

### Creating your own copy and deploying it

A fork is your own copy of the repository under your account. You can change it freely, and your changes do not affect the original project.

1. Go to https://github.com and click **Sign up**. Follow the steps to create an account and verify your email address.
2. Open the [Sensations repository](https://github.com/Imp38/sensations) and click **Fork** at the top right. Choose your account as the owner and click **Create fork**. This puts a full copy of the project in your own account.
3. In your fork, go to **Settings**, then **Pages** in the left-hand menu.
4. Under **Build and deployment**, set the source to **Deploy from a branch**.
5. Under **Branch**, choose **main** and the **/ (root)** folder, then click **Save**.
6. Wait a minute or two, then refresh the Pages settings. The link to your live site appears at the top, in the form `https://your-username.github.io/sensations/`.

Every time you push a change to `main`, GitHub rebuilds and redeploys the site automatically.

### Running the site on your own computer

1. Install Git from https://git-scm.com and a code editor such as Visual Studio Code.
2. Open your fork on GitHub, click the green **Code** button and copy the HTTPS link.
3. Open a terminal in the folder where you want the project and run:

   ```
   git clone https://github.com/your-username/sensations.git
   ```

4. Open the new `sensations` folder in your editor.
5. Open a terminal inside the project folder. In Visual Studio Code, choose **Terminal**, then **New Terminal** from the top menu, or press **Ctrl+`** (the backtick key, below Esc). The terminal opens in the project folder.
6. Start a local web server by running:

   ```
   python3 -m http.server
   ```

   If `python3` is not recognised, try `python -m http.server` instead. This needs Python 3 installed from https://www.python.org.

7. Open a browser and go to `http://localhost:8000`. The Sensations home page loads.
8. To stop the server, click in the terminal and press **Ctrl+C**.

Alternatively, open `index.html` directly in a browser, or use the Live Server extension in Visual Studio Code and choose **Open with Live Server**.

### Saving and publishing changes

After editing files, the changes reach GitHub in three steps: stage, commit and push. Run these commands in a terminal opened in the project folder (see the previous section).

1. Check what has changed:

   ```
   git status
   ```

   Changed files are listed in red, and files that are ready to commit are in green.

2. Stage the changes. To stage everything that has changed:

   ```
   git add .
   ```

   To stage only specific files, name them instead:

   ```
   git add index.html
   git add README.md assets/screenshots/board-final.png
   ```

   To stage every file in one folder:

   ```
   git add assets/screenshots/
   ```

3. Commit the staged changes with a short message that says what changed:

   ```
   git commit -m "Add 404 page"
   ```

4. Push the commit to the `main` branch on GitHub:

   ```
   git push
   ```

The first time you push, Git asks you to sign in to GitHub, usually by opening a browser window. Sign in with your GitHub account and approve the request. Git remembers this on your computer, so you only do it once. You can only push to repositories you own, which is why you push to your fork and not to the original.

GitHub Pages then rebuilds the site, and the changes appear on the live site after a minute or two. A hard refresh (Ctrl+Shift+R) shows the newest version.

I committed related changes together and unrelated ones separately, for example adding screenshots in one commit and the README that uses them in the next. This keeps the history easy to read and means each commit does one job.

### External links and kits

The site loads Bootstrap CSS and JavaScript from the jsDelivr CDN and fonts from Google Fonts. These need an internet connection but no account or setup.

The icons come from a Font Awesome kit linked to my own account, so they will also show on a copy of the site. If you would rather use your own, create a free account at https://fontawesome.com, make a kit, and replace the kit `<script>` line in each HTML page with the one Font Awesome gives you.

## Credits

- Favicon: candle emoji graphic from [Twemoji](https://github.com/twitter/twemoji), copyright 2020 Twitter, Inc and other contributors, licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Generated with [favicon.io](https://favicon.io).
- Image optimisation: images converted to WebP and compressed with [Squoosh](https://squoosh.app/) and [TinyJPG](https://tinyjpg.com/).
- AI assistance: I used Claude (Anthropic) as a tutor and reviewer while building the site. It explained concepts and reviewed my code. Screenshots are shown in [ai-prompts](ai-prompts/claude/).
- Hero, intro, mood card, candle, custom order and some gallery images: generated with Google Gemini. The prompts and results are in [ai-prompts](ai-prompts/gemini/).
- Gallery photo: [black & white candles](https://unsplash.com/photos/black-and-white-candle-on-brown-wooden-holder-YasQvzPbGOQ) by Hanna Balan on Unsplash used under the [Unsplash License](https://unsplash.com/license)
- Gallery photo of two hugging candles: [Two brown candles](https://unsplash.com/photos/two-brown-candles-ZDZzaTh8elk) by Dmitri Leychu on Unsplash, used under the [Unsplash License](https://unsplash.com/license)
- Christmas tree candle: [A small red christmas tree](https://unsplash.com/photos/a-small-christmas-tree-made-out-of-folded-paper-ZhKdPOaC9yA) by Ionela Mat on Unsplash, used under the [Unsplash License](https://unsplash.com/license)
- Fonts: [Lora](https://fonts.google.com/specimen/Lora) and [Nunito](https://fonts.google.com/specimen/Nunito) from Google Fonts.
- Layout and components: [Bootstrap 5.3](https://getbootstrap.com/).
- Icons: [Font Awesome](https://fontawesome.com/).
- Colour palette: created and contrast-checked with [Coolors](https://coolors.co/2f231d-2e2520-8a5e3c-6b4226-412e23).