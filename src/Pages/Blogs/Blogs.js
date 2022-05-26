import React from "react";
import "./Blogs.css";
import blog1 from "../../Images/Blogs img/performance.png";
import blog2 from "../../Images/Blogs img/retina_.png";
import blog3 from "../../Images/Blogs img/proto.png";
import blog4 from "../../Images/Blogs img/test.png";
import blog5 from "../../Images/Blogs img/setStare.png";
import blog6 from "../../Images/Blogs img/find-font-from-image.png";


const Blogs = () => {
  return (
    <div className="Blogs-section">
      <div className="blog-title">
        <h1 className="text-3xl font-bold text-center">Blogs</h1>
      </div>
      <div className="blogs-container">
        <div>
          <div>
            <img src={blog1} alt="" srcset="" />
          </div>
          <div className="blog-detail">
            <h1 className="text-xl font-bold">
              1. How will you improve the performance of a React Application?
            </h1>
            <p>Optimizing performance in a React application</p>
            <li>Keeping component state local where necessary.</li>
            <li>
              Memoizing React components to prevent unnecessary re-renders.
            </li>
            <li>Code-splitting in React using dynamic import()</li>
            <li>Windowing or list virtualization in React.</li>
            <li>Lazy loading images in React.</li>
          </div>
        </div>
        <div>
          <div>
            <img src={blog2} alt="" srcset="" />
          </div>
          <div className="blog-detail">
            <h1 className="text-xl font-bold">
              2. What are the different ways to manage a state in a React
              application?
            </h1>
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
            </p>
            <p>
              <span className="font-bold">Local (UI) state</span> – Local state
              is data we manage in one or another component.
            </p>
            <p>
              <span className="font-bold">Global (UI) state</span>– Global state
              is data we manage across multiple components.
            </p>
            <p>
              <span className="font-bold">Server state</span>– Data that comes
              from an external server that must be integrated with our UI state.
            </p>
            <p>
              <span className="font-bold">URL state</span>– Data that exists on
              our URLs, including the pathname and query parameters.
            </p>
            <p>
              There are many more elements, but these are the major categories
              worth focusing on for most applications you build.
            </p>
          </div>
        </div>
      </div>
      <div className="blogs-container">
        <div>
          <div>
            <img src={blog3} alt="" srcset="" />
          </div>
          <div className="blog-detail">
            <h1 className="text-xl font-bold">
              3.How does prototypical inheritance work?
            </h1>
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__.
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={blog4} alt="" srcset="" />
          </div>
          <div className="blog-detail">
            <h1 className="text-xl font-bold">
              4. What is a unit test? Why should write unit tests?
            </h1>
            <p>
              Unit tests are typically automated tests written and run by
              software developers to ensure that a section of an application
              (known as the "unit") meets its design and behaves as intended. In
              procedural programming, a unit could be an entire module, but it
              is more commonly an individual function or procedure.
            </p>
          </div>
        </div>
      </div>
      <div className="blogs-container">
        <div>
          <div>
            <img src={blog5} alt="" srcset="" />
          </div>
          <div className="blog-detail">
            <h1 className="text-xl font-bold">
              5.Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts?
            </h1>
            <p>
            One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components. In React, every state update causes the component being updated to re-render. Because re-rendering is an expensive operation, making state updates synchronously can cause serious performance issues, for example, increasing load times or causing your application to crash. By batching state updates, React avoids unnecessary re-renders, boosting performance overall. I hope you enjoyed this article!
            </p>
          </div>
        </div>
        <div>
          <div>
            <img src={blog6} alt="" srcset="" />
          </div>
          <div className="blog-detail">
            <h1 className="text-xl font-bold">
              6. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
            </h1>
            <p>
             Loading.............
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
