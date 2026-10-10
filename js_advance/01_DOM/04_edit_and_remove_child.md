# DOM Add, Edit, and Remove Guide

This guide explains how to add, edit, and remove HTML elements in the DOM. We will use the HTML code below for our examples.

---

## 1. Our HTML Page (`04_edit_and_remove_child.html`)

Here is the HTML code we are working with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dom</title>
    <style>
        body {
            background-color: #212121;
            color: white;
        }
    </style>
</head>
<body>
    <ul class="language">
        <li>Javascript</li>
    </ul>
</body>
</html>
```

---

## 2. Adding Elements: Normal vs. Optimized Approach

There are two ways to add elements using a function. One is simple but slow; the other is slightly longer but much faster.

### Method 1: The Normal Approach (Using `innerHTML`)

In this approach, we insert the text directly using `innerHTML`.

```javascript
function addLanguage(langName) {
    const list = document.createElement('li');
    list.innerHTML = `${langName}`; 
    document.querySelector('.language').appendChild(list);
}

addLanguage("python");
addLanguage("C++");
```

> [!WARNING]
> **Why this is slow:** Every time you use `innerHTML`, the browser must traverse and recalculate the entire DOM tree. This is fine for small projects but slow for large websites.

---

### Method 2: The Optimized Approach (Using `createTextNode`)

Instead of parsing HTML, we create a text node directly and append it. This is much faster and is the **best practice**.

```javascript
function addOptiLanguage(langName) {
    const li = document.createElement('li');
    // Create text node and append it
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);
}

addOptiLanguage("C#");
addOptiLanguage("typescript");
```

---

## 3. Editing Elements (Two Methods)

If an element is already on the page, you can change it in two different ways.

### Method 1: Using `replaceWith()`

This replaces the selected element with a completely new element that you created.

```javascript
// 1. Select the second list item (Python)
const editTarget = document.querySelector("li:nth-child(2)");

// 2. Create the new element and set its text
const newLi = document.createElement('li');
newLi.textContent = "Ruby";

// 3. Replace the old element with the new one
editTarget.replaceWith(newLi);
```

---

### Method 2: Using `outerHTML`

`outerHTML` represents the element itself along with its content. You can overwrite it with a new HTML string.

```javascript
// 1. Select the first list item (Javascript)
const firstLang = document.querySelector("li:first-child");

// 2. Overwrite its entire HTML string
firstLang.outerHTML = "<li>MongoDB</li>";
```

---

## 4. Removing Elements

To delete an element from the page, select it and call the `.remove()` method.

```javascript
// 1. Select the last list item
const lastLang = document.querySelector("li:last-child");

// 2. Remove it from the page
lastLang.remove();
```

---

## 5. Quick Summary Cheat Sheet

* **`list.innerHTML = langName`** -> Simple insertion, but slow because it retraces the entire DOM tree.
* **`li.appendChild(document.createTextNode(langName))`** -> Faster and safer optimized approach.
* **`oldElement.replaceWith(newElement)`** -> Replaces an existing element with a new one.
* **`element.outerHTML = '<li>New</li>'`** -> Replaces the element by overwriting its HTML string.
* **`element.remove()`** -> Deletes the element from the page.
