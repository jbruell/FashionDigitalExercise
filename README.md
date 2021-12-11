# Coding Exercise for FashionDigital

## How to run

- Install the necessary tools, see [Prerequisites](#Prerequisites)
- Execute the command `yarn start` in the root directory of the project.

The server should be available on `http://localhost:3000/`. If not, check the console output for additional information.

## Prerequisites

- node >= 16.13.0
- npm >= 8.1.0
- yarn >= 1.22.5

## Exercise description

Write a Node.JS and/or client-side JS-Framework web application, that

- reads from an URL with JSON-Data including a list of products.
- acts as a web-server and provides the following route:
  - /productList should render a list of products according to the data found in JSON. Feel free to define the actual layout and what gets rendered yourself.
  - The list needs to be responsive based on display width and device. Roughly as seen on the scribbles below.
  - You may choose your own strategy and behavior on what happens between different widths. E.g. resizing of individual products, displaying more products per row, etc.
- provides a functionality to filter products by size as well as a feature to sort by price.
- provides a /statistics route that answers the following questions
  (make clear if there is no answer or an ambiguous answer)
  - which brand has the most products that cost less than 40 EUR
  - which brand offers the largest selection of sizes to the customer
  - which brand offers the lowest average price for customers wearing size “32”

You are invited to use and include whatever assets you find from our actual websites (as long as you don’t host them publicly) to further style and beautify this project. You may use any tools that you like to accomplish this task, including build/dependency management, IDE/editor, libraries, etc. The website should work in all modern browsers. We should be able to run your solution without needing to make any changes, with a single command, an available internet connection, an up-to-date SDK and - if necessary - the build tool of your choice.
