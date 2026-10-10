# DOM Traversal Guide

This guide explains how to move (traverse) between parents, children, and siblings in the DOM. We will use the HTML code below for our examples.

---

## 1. Our HTML Page (`02_travers_element.html`)

Here is the HTML code we are working with:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    <style>
        * {
            background-color: #212121;
            color: aliceblue;
        }
    </style>
</head>
<body>
    <div class="parent"> 
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
</html>
```

---

## 2. What is DOM Traversal?

DOM Traversal means moving through the DOM tree structure. 
It allows you to:
- Move **down** (from Parent to Children).
- Move **up** (from Child to Parent).
- Move **sideways** (from Sibling to Sibling).

---

## 3. Moving Down: Parent to Children

If you have selected a parent element, you can access its children using the properties below.

### 1. `parent.children`
This property returns an `HTMLCollection` of all child elements (only tags, ignoring empty spaces and text).

```javascript
const parent = document.querySelector('.parent');
console.log(parent.children); 
// Output: HTMLCollection(4) [div.day, div.day, div.day, div.day]
```

- **Access by Index:** You can access a single child like an array element.
  ```javascript
  console.log(parent.children[1].innerHTML); // Output: "Tuesday"
  ```

- **Iterating with a Loop:**
  ```javascript
  for (let i = 0; i < parent.children.length; i++) {
      console.log(parent.children[i].innerHTML);
  }
  // Output: Monday, Tuesday, Wednesday, Thursday
  ```

- **Changing styles of a child:**
  ```javascript
  // Change the text color of "Wednesday" to green
  parent.children[2].style.color = "green";
  parent.children[2].style.padding = "10px";
  ```

### 2. `parent.firstElementChild`
Returns the very first child element.
```javascript
console.log(parent.firstElementChild); 
// Output: <div class="day">Monday</div>
```

### 3. `parent.lastElementChild`
Returns the very last child element.
```javascript
console.log(parent.lastElementChild); 
// Output: <div class="day">Thursday</div>
```

---

## 4. Moving Up: Child to Parent

If you have selected a child element, you can move up to its parent using `parentElement`.

### Example:
```javascript
const dayOne = document.querySelector('.day'); // Selects Monday
console.log(dayOne.parentElement);
// Output: <div class="parent">...</div>
```

---

## 5. Moving Sideways: Sibling to Sibling

Siblings are elements that share the same parent. You can move between siblings using sibling properties.

### 1. `nextElementSibling`
Moves to the next sibling element.
```javascript
const dayOne = document.querySelector('.day'); // Selects Monday
console.log(dayOne.nextElementSibling); 
// Output: <div class="day">Tuesday</div>
```

### 2. `previousElementSibling`
Moves to the previous sibling element.
```javascript
const dayTwo = parent.children[1]; // Selects Tuesday
console.log(dayTwo.previousElementSibling); 
// Output: <div class="day">Monday</div>
```

---

## 6. Crucial Concept: Elements vs Nodes

In JavaScript, there is a big difference between a **Node** and an **Element**.
- **Elements** are only HTML tags (like `<div>`, `<p>`, `<h1>`).
- **Nodes** include everything: HTML tags, plain text, comments, and even empty spaces (line breaks/newlines).

### 1. `parent.childNodes`
This property returns a `NodeList` containing all child nodes.

```javascript
console.log(parent.childNodes); 
// Output: NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]
```

### Why are there 9 nodes for 4 elements?
The browser counts the line breaks (newlines) and empty spaces between the HTML tags as `text` nodes. 
Here is how the browser reads it:
1. `text` (The line break after `<div class="parent">`)
2. `div.day` (Monday)
3. `text` (The line break after Monday)
4. `div.day` (Tuesday)
5. `text` (The line break after Tuesday)
6. `div.day` (Wednesday)
7. `text` (The line break after Wednesday)
8. `div.day` (Thursday)
9. `text` (The line break after Thursday)

### Comparison Table:

| Property | Returns | Type | Includes Space/Line Breaks? |
| :--- | :--- | :--- | :--- |
| **`children`** | Only HTML tags | `HTMLCollection` | **No** |
| **`childNodes`** | Tags, text, comments, line breaks | `NodeList` | **Yes** |

---

## 7. Quick Summary Cheat Sheet

* **`parent.children`** -> Returns an HTMLCollection of child elements.
* **`parent.firstElementChild`** -> First child element.
* **`parent.lastElementChild`** -> Last child element.
* **`element.parentElement`** -> Parent of the selected element.
* **`element.nextElementSibling`** -> Next sibling element.
* **`element.previousElementSibling`** -> Previous sibling element.
* **`parent.childNodes`** -> Returns a NodeList of all child nodes (including line breaks and comments).
