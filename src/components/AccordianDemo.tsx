/**********************************************************************
*
*   Component generated by Quest
*
*   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts. 
*   To preseve that abilty, always export from Quest to regenerate this file.
*   To setup props, bindings and actions, use the Quest editor
*   Code Logic goes in the hook associated with this component
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { styled } from '@mui/material/styles';
import AccordionsAccordion from './AccordionsAccordion';
import useAccordianDemo from './useAccordianDemo';
 
const AccordianDemo1: any = styled("div")({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `97px 60px`,  
  boxSizing: `border-box`,  
});
  
const Accordian: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `10px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const AccordionsAccordion1: any = styled(AccordionsAccordion)(({ theme }: any) =>({  
  width: `400px`,  
  margin: `0px`,  
}));
 
function AccordianDemo(): JSX.Element {
  const {data} = useAccordianDemo();
  return (
    <AccordianDemo1 >
       <Accordian >
         {data.items && data.items.map((item: any, index: number) => {
           return (
             <AccordionsAccordion1  key={index}  title={item.title} content={item.content}/>
           )
         })}
       </Accordian>
     </AccordianDemo1>
   );
}

export default AccordianDemo;
