## Path to success
1. run `npm i`
2. make changes what you wanna to do
3. vbundle main js with the browserify package like following `npx browserify main.js -o bundle.js`
4. Thats it

### Configuration of content.json

It should be as simple as it is.

You can define an html element inside the schema

```json
  {
    "id": "element-id",
    "class": "some-styling-class",
    "text": "Welcome",
    "element": "h1"
  }
```

Lets break it down:

id - here you can add an unique id tag to the element if you want, its optional because right now it does not even have a function ^^
class - here you can add your custom css classes to the element
text - this representate the innerHTML value of the element, so no other types are supportet only html elements with an innerhtml , this can be extended with a type property in the json for example
element - takes the html element you want to add

The programm will loop through the list normally ^^ means the first entry is the first written sentense.

```json
// support for links ;)
  {
    "id": "",
    "class": "uppercase",
    "text": "Check out my Github",
    "href": "https://github.com/xyz/",
    "target": "_blank",
    "element": "a"
  }
```

```json
// support for images
  {
    "id": "",
    "class": "",
    "element": "img",
    "src": "https://url-to-image.com",
    "width": "",
    "height": ""
  }
```

### Finishing Note
Feel free to copy fork or whatever with this code.
If this small piece of code is an inspiration for you i am happy enought.

Thanks to gothburz which provided the initial idea/code which i have modified for my own purpose
- https://github.com/gothburz
- https://codepen.io/Gothburz/pen/YyLMVx <- copepen example