
import './Projects.css';

function Projectss() {


  return (
    <>
<section className="projects">

<div className='project-about'>
<h2 className='project-title yellow'>📋 Projects</h2>

<p className='project-para'>I enjoy building websites and web apps that are fun and useful.
Here are some projects I’ve worked on during my coding journey!</p>
</div>




<div className="project-container">

<div className="projects-subcontainer">


<div className='project-box calculator'>
<a href="https://naitik-portfolio-69.netlify.app/project/bmi/script" className="basic">1. Basic Calculator</a>
<p className='graph'>A basic calculator is an electronic or software device used to perform simple mathematical operations like addition,
   subtraction, multiplication,  and division. It is easy to use and commonly used in schools, offices, and everyday life.</p>
</div>


<div className=" project-box todo">
<a href="https://naitik-portfolio-69.netlify.app/project/todo%20list/index.html" className="basic">2. Todo List Application  </a>
<p className='graph'>A To-Do List Application is a tool that helps users create 
  and manage a list of tasks they need to complete. It allows users
   to add new tasks, set deadlines, mark tasks as done, and stay organized in their daily life.



</p>
</div>


<div className='project-box bmi'>
<a href="https://naitik-portfolio-69.netlify.app/project/calculator/" className="basic">3. BMI Calculator</a>
<p className='graph'>A BMI Calculator is a tool used to measure Body Mass Index by using a person’s
   height and weight. It helps determine whether a person is underweight,
   normal weight, overweight, or obese based on standard health guidelines.</p>
</div>


<div className="project-box converter">
<a href="https://naitik-portfolio-69.netlify.app/project/currency%20converter/index.html" className="basic">4. A currency converter </a>
<p className='graph'>A Currency Converter is a tool that converts the value of one country's
 currency into another. It helps travelers, businesses, and online shoppers know how much 
money is worth in different currencies using the latest exchange rates.</p>
</div>


<div className="project-box counter">
<a href="https://naitik-portfolio-69.netlify.app/project/word%20counter/index.html" className="basic">5. Word Counter</a>
<p className='graph'>A Word Counter is a tool that counts the number of words, characters, sentences, or paragraphs in a text. It is useful for 
  writers, students, and editors to check the length of their content and meet word limits.</p>
</div>

<div className="project-box counter">
<a href="https://thunder-x.netlify.app/" className="basic">6. Weather App</a>
<p className='graph'>A Weather App is a tool that provides real-time information about the weather, such as temperature, rain, wind, and forecasts. 
  It helps people plan their day by showing current and upcoming weather conditions for their location or any other place.</p>
</div>

</div>
</div>
</section>
    </>
  )
}

export default Projectss;
