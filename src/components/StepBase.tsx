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

import Icon1Image from './assets/images/Stepbase_Icon.png';
import { styled } from '@mui/material/styles';
import { StepBaseProps } from './types';

 
const StatusIncompleteSize: any = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ theme, props }: any) =>({  
  backgroundColor: props.completed === true ? `rgba(249, 234, 248, 1)` : props.current === true ? `rgba(249, 234, 248, 1)` : `rgba(255, 255, 255, 1)`,  
  borderRadius: `50px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  height: `40px`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  boxShadow: props.current === true ? `0px 0px 0px rgba(244, 212, 241, 1)` : "unset",  
}));
  
const Content: any = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ props }: any) =>({  
  border: props.completed === true ? `2px solid rgba(203, 43, 186, 1)` : props.current === true ? `2px solid rgba(203, 43, 186, 1)` : `2px solid rgba(206, 212, 218, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: `50px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: props.current === true ? `row` : `column`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `8px`,  
  width: `40px`,  
  height: `40px`,  
  margin: `0px`,  
  backgroundColor: props.current === true ? `rgba(249, 234, 248, 1)` : "unset",  
}));
  
const Q1: any = styled("div", {
    shouldForwardProp: prop => !["props"].includes(prop.toString())
  })(({ theme, props }: any) =>({  
  textAlign: `center`,  
  whiteSpace: `pre-wrap`,  
  color: props.completed === true ? `rgba(203, 43, 186, 1)` : props.current === true ? `rgba(203, 43, 186, 1)` : `rgba(206, 212, 218, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Open Sans`,  
  fontWeight: `600`,  
  fontSize: `20px`,  
  letterSpacing: `-0.4px`,  
  textDecoration: `none`,  
  lineHeight: `23.040000915527344px`,  
  textTransform: `none`,  
  height: `26px`,  
  width: `24px`,  
  margin: `0px`,  
}));
  
const Icon1: any = styled("img")({  
  height: `15.23px`,  
  width: `20px`,  
  margin: `0px`,  
});
 
function StepBase(props: StepBaseProps): JSX.Element {
  return (
    <StatusIncompleteSize className={props.className} props={props} >
      <Content props={props} >
        {(props.completed !== true) &&
          <Q1 props={props} >
            {props.number}
              </Q1>
        }
        {(props.completed === true) &&
          <Icon1  src={Icon1Image} alt={"Icon"}/>
        }
      </Content>
    </StatusIncompleteSize>
  );
}

export default StepBase;