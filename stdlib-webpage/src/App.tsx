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
          
          <div className="w-110 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[0]?.code || ''}} />
         
         <br />

          <Paragraph
          text="STEP 2: Import specific functionalities as per need"
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
          On the other hand, if you only need a few specific features and want to keep your application fast and lightweight,<br /> you can install just the packages you need instead of the whole library.
        </p>
        }
        />

       <Heading content="Steps to install individual packages" />

        <div>
          
          <Paragraph 
          text="STEP 1: Run the installation command with the specific package name that you want to download, in your terminal" 
          />

         <div className="w-137 mt-2" dangerouslySetInnerHTML={{ __html: renderedShellHtml[1]?.code || ''}} />
         
         <br />

          <Paragraph
          text="STEP 2: Import specific functionalities as per need"
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
            Stdly, in cases where I want to test a function without writing a full script, how can I do that?
          </p>
        }
        />

        <StdlyChat 
        stdlyChat={
        <p>
          You can use the command line feature! It lets you test functions and run quick calculations without needing <br />  to write a full script. Just open your terminal and use the REPL to interact with stdlib directly.
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
