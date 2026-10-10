# DOM Selector Guide

This guide explains how to find and change HTML elements on a web page using JavaScript. We will use the HTML code below for our examples.

---

## 1. Our HTML Page (`01_dom_selector.html`)

Here is the HTML code we are working with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Selector Learning</title>
    <style>
        * {
            background-color: rgb(41, 41, 41);
            color: aliceblue;
        }
    </style>
</head>
<body>
    <h1 id="title" class="heading">Learning DOM | How to use <span style="display: none;">test text</span> DOM Selector</h1>
    <h1>Lorem ipsum dolor sit amet.</h1>
    <h2>Lorem ipsum dolor sit.</h2>
    <h2>Lorem ipsum dolor sit.</h2>
    <h2>Lorem ipsum dolor sit.</h2>
    <p id="para">Lorem ipsum dolor sit amet.</p>
    <input type="text" name="" id="">
    <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
    </ul>
</body>
</html>
```

---

## 2. What is a DOM Selector?

The **DOM (Document Object Model)** is the web page converted into a tree of objects by the browser. 
A **DOM Selector** is a JavaScript function used to find and select HTML elements from this tree so you can read or change them.

---

## 3. Selecting a Single Element by ID

To select an element with a unique `id`, use `document.getElementById()`.

### Example:
```javascript
const titleElement = document.getElementById('title');
console.log(titleElement); 
// Output: <h1 id="title" class="heading">Learning DOM | How to use ... </h1>
```

- `document` represents the entire web page.
- `getElementById('title')` looks for the element with `id="title"`.

---

## 4. Reading Element Properties

Once you select an element, it becomes an object. You can read its properties like `id` and class name.

### Crucial Note: Class Name Property
In JavaScript, you cannot use `.class` because `class` is a reserved word. You must use `.className`.

### Example:
```javascript
const titleElement = document.getElementById('title');

// Correct way to read class
console.log(titleElement.className); // Output: "heading"

// Incorrect way (will return undefined)
console.log(titleElement.class); // Output: undefined
```

---

## 5. Reading Content: `innerText` vs `textContent` vs `innerHTML`

These three properties look similar but behave differently, especially when there is hidden text or HTML tags inside the element.

Let's look at our main heading:
`<h1>Learning DOM | How to use <span style="display: none;">test text</span> DOM Selector</h1>`

### Comparison Table:

| Property | What it does | Output for our Heading |
| :--- | :--- | :--- |
| **`innerText`** | Shows only the text that is **visible** on the screen. It ignores hidden text. | `"Learning DOM \| How to use DOM Selector"` |
| **`textContent`** | Shows **all** text inside the element, even if some text is hidden by CSS. | `"Learning DOM \| How to use test text DOM Selector"` |
| **`innerHTML`** | Shows the **entire HTML code** inside the element, including tags. | `"Learning DOM \| How to use <span style=\"display: none;\">test text</span> DOM Selector"` |

### Code Example:
```javascript
const titleElement = document.getElementById('title');

console.log(titleElement.innerText);
// Output: Learning DOM | How to use DOM Selector

console.log(titleElement.textContent);
// Output: Learning DOM | How to use test text DOM Selector

console.log(titleElement.innerHTML);
// Output: Learning DOM | How to use <span style="display: none;">test text</span> DOM Selector
```

---

## 6. Changing Content on the Page

You can change what an element displays by assigning a new value to its properties.

### Example 1: Changing Plain Text using `textContent`
```javascript
const titleElement = document.getElementById('title');
titleElement.textContent = "Hello World!";
// The page now shows "Hello World!"
```

### Example 2: Changing HTML using `innerHTML`
```javascript
const titleElement = document.getElementById('title');
titleElement.innerHTML = "Hello <span>World!</span>";
// This inserts a new <span> tag inside the element.
```

---

## 7. Working with HTML Attributes (`getAttribute` and `setAttribute`)

Attributes are extra options in HTML tags (like `id`, `class`, `href`, `src`). You can read and change them using methods.

### 1. Reading an Attribute: `getAttribute()`
```javascript
const titleElement = document.getElementById('title');
const myClass = titleElement.getAttribute('class');
console.log(myClass); // Output: "heading"
```

### 2. Changing or Adding an Attribute: `setAttribute()`
```javascript
const titleElement = document.getElementById('title');
// Change the class to "main-title secondary"
titleElement.setAttribute('class', 'main-title secondary');

console.log(titleElement.className); // Output: "main-title secondary"
```

---

## 8. Selecting Multiple Elements: `querySelectorAll`

If you want to select multiple elements (like all `<li>` tags or all elements of a class), use `document.querySelectorAll()`.

### Example:
```javascript
const listItems = document.querySelectorAll('li');
console.log(listItems); // Output: NodeList(3) [li, li, li]
```

### What is a `NodeList`?
A `NodeList` looks like an array, but it is **not** a real JavaScript array.
- You **can** use `.forEach()` on it.
- You **cannot** use other array methods like `.map()`, `.filter()`, or `.reduce()`.

### How to convert a `NodeList` to a real Array:
To use all array methods, convert it using `Array.from()` or the spread operator `[...]`.

```javascript
// Method 1: Array.from()
const itemsArray1 = Array.from(listItems);

// Method 2: Spread Operator
const itemsArray2 = [...listItems];

// Now you can use map()
const itemTexts = itemsArray1.map(item => item.textContent);
console.log(itemTexts); // Output: ["One", "Two", "Three"]
```

### Example: Changing style for all elements
```javascript
itemsArray1.forEach((item, index) => {
    item.textContent = `Item number ${index + 1}`;
    item.style.color = 'lightblue';
});
```

---

## 9. Quick Summary Cheat Sheet

* **`document.getElementById('id')`** -> Finds a single element by its ID.
* **`document.querySelectorAll('css-selector')`** -> Finds all matching elements and returns a `NodeList`.
* **`.className`** -> Read or change classes (never use `.class`).
* **`.innerText`** -> Shows only visible text.
* **`.textContent`** -> Shows all text (including hidden text).
* **`.innerHTML`** -> Shows text along with HTML tags.
* **`getAttribute('name')`** -> Reads any HTML attribute.
* **`setAttribute('name', 'value')`** -> Updates or adds an HTML attribute.
* **`Array.from(nodeList)`** -> Converts a `NodeList` to a real array to use methods like `.map()`.
