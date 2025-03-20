import Heading from "./components/Heading";
import MainHeader from "./components/MainHeader";
import Paragraph from "./components/Paragraph";
import StdlyChat from "./components/StdlyChat";
import HumanChat from "./components/HumanChat";

function App() {

  return (
    <div className="bg-[#1E1E1E] flex flex-col min-h-screen">
      
      <MainHeader />
      
      <div className="bg-[#1E1E1E] px-24 mb-30">
        
        <StdlyChat 
        stdlyChat={
        <p>
          Hi there! I'm Stdly, your guide to the stdlib library. Let's explore how it makes JavaScript more powerful!
        </p>
        }
        />

        <Heading content="What is stdlib?" />

        <div>
          
          <Paragraph 
          text="Stdlib is a library that adds advanced math, statistics, and scientific computing tools to JavaScript. JavaScript comes with only basic math functions, but this library gives you features similar to what other languages like Python, R, and MATLAB provide." 
          />
          
          <br />
          
          <Paragraph
          text="With stdlib, you can perform complex calculations, work with data efficiently, and even visualize results. It helps make JavaScript a great choice for scientific computing, data analysis, and more!"
          />
        
        </div>

        <HumanChat 
        humanChat={
          <p>
            That sounds great! But how do I actually use it?
          </p>
        }
        /> 

        <StdlyChat 
        stdlyChat={
        <p>
          There are two common ways to use it, you can either install the whole library or install individual packages.
        </p>
        }
        />

        <Heading content="Two common ways of installing stdlib packages" />

        <div>
          
          <Paragraph 
          text="1. Install the entire library" 
          />
          <Paragraph
          text="-This method is useful if you plan to use multiple features across different categories."
          />

          <br />

          <Paragraph
          text="2. Install individual packages"
          />
          <Paragraph
          text="-This method is useful if you only need a few mathematical or utility functions from stdlib."
          />
        </div>

        <StdlyChat 
        stdlyChat={
        <p>
          If you don’t mind the size of the entire library and its dependencies, and you want access to all features <br /> without worrying about individual packages, you can download the full package.
        </p>
        }
        />
      
       <Heading content="Steps to install the entire library" />

        <div>
          
          <Paragraph 
          text="STEP 1: Run the following command in your terminal" 
          />
         
         <br />

          <Paragraph
          text="STEP 2: Import specific functionalities as per need"
          />

          <br />

          <Paragraph
          text="STEP 3: Use the functionality"
          />
        </div>

        <StdlyChat 
        stdlyChat={
        <p>
          On the other hand, if you only need a few specific features and want to keep your application fast and lightweight,<br /> you can install just the packages you need instead of the whole library.
        </p>
        }
        />

       <Heading content="Steps to install individual packages" />

        <div>
          
          <Paragraph 
          text="STEP 1: Run the following command in your terminal" 
          />
         
         <br />

          <Paragraph
          text="STEP 2: Import specific functionalities as per need"
          />

          <br />

          <Paragraph
          text="STEP 3: Use the functionality"
          />
        </div>

        <HumanChat 
        humanChat={
          <p>
            Stdly, in cases where I want to test a function or debug something without writing a full script, how can I do that?
          </p>
        }
        />

        <StdlyChat 
        stdlyChat={
        <p>
          You can use the command line feature! It lets you test functions and run quick calculations without needing <br />  to write a full script. Just open your terminal and use the REPL (Read-Eval-Print Loop) to interact with stdlib directly.
        </p>
        }
        />

       <Heading content="Steps to install the Command-Line Utility" />

       <div>
          
          <Paragraph 
          text="STEP 1: Install stdlib globally" 
          />
         
         <br />

          <Paragraph
          text="STEP 2: Check available commands"
          />

          <br />

          <Paragraph
          text="STEP 3: Run the REPL"
          />
        
        </div>

        <HumanChat
        humanImgClass="mt-5" 
        humanChat={
          <p>
            Okay, but what if I am working on a legacy project that doesn't support ES Modules or CommonJS,<br /> and I still need to use stdlib? What should I do then?
          </p>
        }
        />

        <StdlyChat
        stdlyChat={
        <p>
          Ah! In that case, UMD can help!
        </p>
        }
        />

       <Heading content="Using UMD bundles" />
      
        <div>
          
          <Paragraph 
          text="UMD (Universal Module Definition) allows you to use stdlib without worrying about module system compatibility." 
          />
         
         <br />

          <Paragraph
          text="STEP 1: Install the UMD package using npm"
          />

          <br />

          <Paragraph
          text="STEP 2: Add the bundle in your HTML file"
          />

          <br />

          <Paragraph
          text="STEP 3: Access the functions from the global scope"
          />

        </div>
      
        <HumanChat 
        humanChat={
          <p>
            I want to quickly test stdlib functions in my project without installing anything. Is there a way to do that directly?
          </p>
        }
        />
      
       <StdlyChat 
        stdlyChat={
        <p>
          Absolutely! You can use stdlib directly without installing anything by using a CDN (Content Delivery Network)
        </p>
        }
        />

       <Heading content="Using stdlib via CDN" />

        <div>
          
          <Paragraph 
          text="This makes it a quick and convenient option, especially for testing and prototyping. However, one downside is that relying on a CDN means your code depends on an external network request, which could introduce latency." 
          />
         
         <br />

          <Paragraph
          text="NOTE: You can find the CDN link of a package in its respective GitHub repository under the esm or deno branch."
          />

          <br />

          <Paragraph
          text="STEP 1: Import the required stdlib functions directly from the CDN"
          />

          <br />

          <Paragraph
          text="STEP 2: Use the functions as needed"
          />

        </div>
      
      </div>
    
    </div>
  )
}

export default App
