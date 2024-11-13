import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am h1 tag"),
//     React.createElement("h2", {}, "I am an h2 tag"),
//   ]),
// ]);

// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(heading);

//----------------------------------scratch--------------------------------------------

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // react element using react

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX --  is not HTML in JS(HTML/XML like syntax) // (transpiled before it reaches the JS) - Parcel - Babel

// JSX --> React.createElement --> ReactElement-JS(object) --> HTMLElement(render)

// Babels job is to convert all the JSX code that react understands(transpiler or JS compiler)

// to give an attribute in JSX we have to use camel casing.

// react element
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React using JSX
  </h1>
); // react element using JSX

// react component
/// class based component -- OLD
/// functional component -- NEW

// React functional component -- a function which return some JSX.

const Title = function () {
  return (
    <h1 id="heading" className="head">
      Namaste React using JSX
    </h1>
  );
};

const element = <span>React Element!! </span>;
const headingElement = (
  <h1 id="heading" className="head">
    {element}
    Namaste React using Element
  </h1>
);

const number = 1000;

// you can add anything to anything in react to render the web page

// jsx is prune from cross-site attacks.

const HeadingComponent = () => (
  <div id="container">
    {headingElement}
    <h2>{number}</h2> {/* writing javascript inside jsx*/}
    <Title /> {/*this is component composition  */}
    {Title()}
    <Title></Title>
    <h1> Namaste React Functional Component</h1>
  </div>
);
root.render(<HeadingComponent />);
