import React,{useState} from 'react'

const Tabs = ({tabs}) => {
const [name,setName]=useState("Tab 1");
   
function setT(e){
// console.log();
setName(e.target.dataset.name);
console.log(e.target.dataset.name);
}

  return (
    <div>
   <ul>
    <li data-name={tabs[0].title} onClick={setT}>{tabs[0].title}</li>
    <li data-name={tabs[1].title} onClick={setT} >{tabs[1].title}</li>
    <li data-name={tabs[2].title}  onClick={setT}>{tabs[2].title}</li>
   </ul>

 {name &&  <p>This is the content for {name}.</p>}
 
   
    </div>
  )
}

export default Tabs;