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
import { AccordionsHelpersContentProps } from './types';

 
const TypeTextIndentFalseS: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `inset 0px -1px 0px rgba(0, 0, 0, 0.08)`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: `400px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `8px 16px 16px 8px`,  
  boxSizing: `border-box`,  
}));
  
const Txt: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(88, 88, 88, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `SF Pro Text`,  
  fontWeight: `500`,  
  fontSize: `12px`,  
  letterSpacing: `-0.24px`,  
  textDecoration: `none`,  
  lineHeight: `16px`,  
  textTransform: `none`,  
  flexGrow: `1`,  
  margin: `0px`,  
}));
 
function AccordionsHelpersContent(props: AccordionsHelpersContentProps): JSX.Element {
  return (
    <TypeTextIndentFalseS >
       <Txt >
         {props.content}
           </Txt>
     </TypeTextIndentFalseS>
   );
}

export default AccordionsHelpersContent;
