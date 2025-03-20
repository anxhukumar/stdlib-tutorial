import Heading from "./components/Heading";
import MainHeader from "./components/MainHeader";
import Paragraph from "./components/Paragraph";
import StdlyChat from "./components/StdlyChat";
import HumanChat from "./components/HumanChat";

function App() {

  return (
    <div className="bg-[#1E1E1E] flex flex-col h-screen">
      
      <MainHeader />
      
      <div className="bg-[#1E1E1E] w-screen h-screen px-24">
        
        <StdlyChat 
        stdlyChat={
        <p>
          Hi there! I'm Stdly, your guide to the stdlib library. Let's explore how it makes JavaScript more powerful!
        </p>
        }
        />

        <HumanChat 
        humanChat={
          <p>
            That sounds great! But how do I actually use it?
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

      </div>
    
    </div>
  )
}

export default App
