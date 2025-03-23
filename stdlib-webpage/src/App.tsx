import Heading from "./components/Heading";
import MainHeader from "./components/MainHeader";
import Paragraph from "./components/Paragraph";
import StdlyChat from "./components/StdlyChat";
import HumanChat from "./components/HumanChat";
import { codeToHtml } from 'shiki';
import { useEffect, useState } from "react";

function App() {

  type CodeHtml = {
    id: number,
    code: string
  }

  const [renderedShellHtml, setRenderedShellHtml] = useState<CodeHtml[]>([]);
  const [renderedJsHtml, setRenderedJsHtml] = useState<CodeHtml[]>([]);

  const shellCommands: CodeHtml[] = [
    { id: 1, code: "npm install @stdlib/stdlib" },
    { id: 2, code: "npm install @stdlib/random-array" },
    { id: 3, code: "npm install -g @stdlib/stdlib" },
    { id: 4, code: `stdlib help` },
    { id: 5, code: "stdlib repl" },
    { id: 6, code: `
      In [1]: capitalize("apple")
      Out[1]: 'Apple'
      ` }
  ];

  const javaScriptCode: CodeHtml[] = [
    { id: 1, code: `var abs = require("@stdlib/math/special/abs");` },
    { id: 2, code: `
      var output = abs( -5.0 );
      //OUTPUT: 5
      ` },
    { id: 3, code: `var bernoulli = require( '@stdlib/random/array/bernoulli' );` },
    { id: 4, code: `
      var output = bernoulli(6, 0.5);
      //OUTPUT: [ 0, 1, 0, 1, 0, 0 ]
      ` }
  ]

  useEffect(() => {
    
    const generateShellCommands = async () => {
      const shellCommandsHtml: CodeHtml[] = [];
      for (let command of shellCommands) {
        const result = await codeToHtml(command.code, {
          lang: 'shellscript',
          theme: 'gruvbox-dark-soft'
        });
        shellCommandsHtml.push({ id: command.id, code: result });
      }
      setRenderedShellHtml(shellCommandsHtml);
    }

    const generateJsCode = async () => {
      const jsCodeHtml: CodeHtml[] = [];
      for (let item of javaScriptCode) {
        const result = await codeToHtml(item.code, {
          lang: 'javascript',
          theme: 'slack-dark'
        });
        jsCodeHtml.push({ id: item.id, code: result });
      }
      setRenderedJsHtml(jsCodeHtml);
    }
    
    generateShellCommands();
    generateJsCode();
  }, []);

  return (
    <div className="bg-[#1E1E1E] flex flex-col min-h-screen">
      
      <MainHeader />
      
      <div className="bg-[#1E1E1E] px-24 mb-30">
        
        <StdlyChat 
        stdlyChat={
        <p>
          Hi there! I am Stdly. I am your guide to the stdlib library. Let's explore together how to implement this library into your projects!
        </p>
        }
        />

        <Heading content="What is stdlib?" />

        <div>
          
          <Paragraph 
          text="Stdlib is a library that fills the gap of mathematical and statistical features in JavaScript and Node.js. When it comes to data processing and scientific computing, the languages that are commonly used are Python, R, MATLAB, etc." 
          />
          
          <br />
          
          <Paragraph
          text="Stdlib enables programmers to stick to JavaScript to perform these advanced numerical computations and makes it a reliable choice."
          />
        
        </div>

        <HumanChat 
        humanChat={
          <p>
            That sounds great, can you take me stepwise into the installation process?
          </p>
        }
        /> 

        <StdlyChat 
        stdlyChat={
        <p>
          Yeah sure! There are two common ways to use it, you can either install the whole library at once or install individual packages as per your need.
        </p>
        }
        />

        <Heading content="Two common ways of installing stdlib packages" />

        <div>
          
          <Paragraph 
          text="1. Install the entire library" 
          />
          <Paragraph
          text="-This allows you to access all the features of this library."
          />

          <br />

          <Paragraph
          text="2. Install individual packages"
          />
          <Paragraph
          text="-This is preferred when you only want to implement a few features in your project."
          />
        </div>

        <StdlyChat 
        stdlyChat={
        <p>
          If you don't care about the size of the packages and their dependencies, and you want to gain access to multiple features <br /> at once, you can download the full library. 
        </p>
        }
        />
      
       <Heading content="Steps to install the entire library" />

        <div>
          
          <Paragraph 
          text="STEP 1: Run the following command in your terminal" 
          />
          
          <div className="w-110 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[0]?.code || ''}} />
         
         <br />

          <Paragraph
          text="STEP 2: Import specific functionalities as per your need"
          />

          <div className="w-110 mt-2" dangerouslySetInnerHTML={{ __html: renderedJsHtml[0]?.code || ''}} />

          <br />

          <Paragraph
          text="STEP 3: Use the functionality"
          />

          <div className="w-110 mt-2" dangerouslySetInnerHTML={{ __html: renderedJsHtml[1]?.code || ''}} />

        </div>

        <StdlyChat 
        stdlyChat={
        <p>
          If you want your application to be lightweight and you prioritize fast performance, <br /> you can install specific packages that you need, instead of the whole library.
        </p>
        }
        />

       <Heading content="Steps to install individual packages" />

        <div>
          
          <Paragraph 
          text="STEP 1: Run the installation command, with the specific package name that you want to download, in your terminal" 
          />

         <div className="w-137 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[1]?.code || ''}} />
         
         <br />

          <Paragraph
          text="STEP 2: Import specific functionalities as per your need"
          />

          <div className="w-137 mt-2" dangerouslySetInnerHTML={{ __html: renderedJsHtml[2]?.code || ''}} />

          <br />

          <Paragraph
          text="STEP 3: Use the functionality"
          />

          <div className="w-137 mt-2" dangerouslySetInnerHTML={{ __html: renderedJsHtml[3]?.code || ''}} />


        </div>

        <HumanChat 
        humanChat={
          <p>
            Stdly, let's say I want to test a function but I don't want the hassle of writing a full script, what can I do then?
          </p>
        }
        />

        <StdlyChat 
        stdlyChat={
        <p>
          You can use the command line feature directly, it lets you test a function without needing to write any script. <br /> Simply open your terminal and use the REPL.
        </p>
        }
        />

       <Heading content="Steps to install the Command-Line Utility" />

       <div>
          
          <Paragraph 
          text="STEP 1: Install stdlib globally" 
          />

         <div className="w-85 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[2]?.code || ''}} />
         
         <br />

          <Paragraph
          text="STEP 2: Check available commands"
          />

         <div className="w-85 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[3]?.code || ''}} />


          <br />

          <Paragraph
          text="STEP 3: Run the REPL"
          />

         <div className="w-85 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[4]?.code || ''}} />

         <div className="w-85 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[5]?.code || ''}} />


        
        </div>

      </div>
    
    </div>
  )
}

export default App
