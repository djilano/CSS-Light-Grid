# CSS Light Grid

CSS Light Grid is a lightweight CSS grid module that helps you quickly build responsive
websites without the hassle of learning the CSS Grid Framework. The grid is based on a
12 column layout.


<p align="center">
  <br />
  <img width="134" height="54" src="https://djilanosmit.nl/sandbox/csslightgrid/assets/csslightgridlogo.png">
  <br />
</p>


(Remember that this is an Early release)

* < 1.77 KB CSS file size
* < 400 bytes after Gzip
* Easy to remember class-names
* Responsive by default (< 480px)
* Based on CSS Grid (no floats, no flexbox, no negative margins..)

#### [DEMO](https://djilanosmit.nl/sandbox/csslightgrid/)

## Clone & Build

#### Install Dependencies

```
npm i
```

#### Gulp
Running the following command will grab all files from src/scss and compiles it to style.css (and minified versions) with the build command.

```
gulp watch
```

```
gulp build
```


## Installation with NPM (No build required)

#### With [npm](https://npmjs.com)

```
npm i css-light-grid --save-dev
```

## Implementation

#### Using with [sass](https://sass-lang.com/documentation)

Import the css module to your stylesheet or scss/sass partials

##### Node-sass / Node-bourbon

```css
@import "~/css-light-grid.min.css";
```

##### Other

```css
@import "../node_modules/css-light-grid/css-light-grid.min.css";
```

##### CDN
The easiest and most simple way to use the css is to use the cdn hosted version. 
Include it in the head of your html with:

```html
<link rel="stylesheet" href="https://unpkg.com/css-light-grid@1.1.0/css-light-grid.min.css" />
```

##### Locally
The built css is located in the root directory. It contains an minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css-light-grid.min.css">
```

## Usage

CSS Grid works by using the container rather then it's children to create a grid, therefor we have to
define a container as grid by applying the following `class="grid"` to the container HTML element.


**Container Classes**

| Classes       | Breakpoint    | Usage |
| ------------- |-------------| -----|
| grid          | Defines Elem as Grid     | class="grid" |
| mq-desktop    | Breakpoint < 1024px      | class="grid mq-desktop" |
| mq-tablet     | Breakpoint < 768px       | class="grid mq-tablet " |


**Gap Classes**

| Classes       | Gap size      | Usage |
| ------------- |-------------| -----|
| gap-xs        | 10px          | class="grid gap-xs" |
| gap-s         | 20px          | class="grid gap-s"  |
| gap-md        | 40px          | class="grid gap-md" |
| gap-l         | 60px          | class="grid gap-l"  |
| gap-xl        | 80px          | class="grid gap-xl" |


**Column classes**

| Classes       | Column size   | Usage |
| ------------- |-------------| -----|
| col-1         | 1/12           | class="col-1"  |
| col-2         | 2/12           | class="col-2"  |
| col-3         | 3/12           | class="col-3"  |
| col-4         | 4/12           | class="col-4"  |
| col-5         | 5/12           | class="col-5"  |
| col-6         | 6/12           | class="col-6"  |
| col-7         | 7/12           | class="col-7"  |
| col-8         | 8/12           | class="col-8"  |
| col-9         | 9/12           | class="col-9"  |
| col-10        | 10/12          | class="col-10" |
| col-11        | 11/12          | class="col-11" |
| col-12        | 12/12          | class="col-12" |

## Examples

**2 column layout**
```html
  <div class="grid gap-s">
    <div class="col-6">col-6 (50%)</div>
    <div class="col-6">col-6 (50%)</div>
  </div>
``` 

**3 column layout**
```html
  <div class="grid gap-s">
    <div class="col-4">col-4 (33.33%)</div>
    <div class="col-4">col-4 (33.33%)</div>
    <div class="col-4">col-4 (33.33%)</div>
  </div>
``` 

**mixed column layout + tablet breapoint**
```html
  <div class="grid gap-s mq-tablet">
    <div class="col-2">col-2</div>
    <div class="col-7">col-7</div>
    <div class="col-3">col-3</div>
  </div>
``` 


## Author

* [Djilano Smit](https://djilanosmit.nl)
* [Djilano Smit | Gitlab](https://gitlab.com/Geneiryodan)

## License

MIT
