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

import CheckImage from './assets/images/ViewerQuestionType_Check.png';
import { styled } from '@mui/material/styles';
import { ViewerQuestionTypeProps } from './types';
import useViewerQuestionType from './useViewerQuestionType';
 
const StateDefaultResponse: any = styled("div", {
    shouldForwardProp: prop => !["props", "data"].includes(prop.toString())
  })(({ theme, props, data }: any) =>({  
  backgroundColor: `rgba(255, 255, 255, 1)`,  
  boxShadow: `0px 4px 8px rgba(16, 24, 40, 0.1)`,  
  border: data.isHover && props.number !== props.currentAnswer ? `1px solid rgba(101, 63, 230, 1)` : !data.isHover && props.number == props.currentAnswer ? `1px solid rgba(101, 63, 230, 1)` : data.isHover && props.number === props.currentAnswer ? `1px solid rgba(101, 63, 230, 1)` : `1px solid rgba(222, 226, 230, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: `6px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `column`,  
  justifyContent: `flex-start`,  
  alignItems: `flex-start`,  
  padding: `19px 15px`,  
  width: "100%",  
  cursor: `pointer`,  
}));
  
const CheckboxAndRadio: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `flex-start`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  width: `345px`,  
  margin: `0px`,  
});
  
const CheckboxAndRadio1: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
  margin: `0px`,  
});
  
const CheckboxBase: any = styled("div", {
    shouldForwardProp: prop => !["props", "data"].includes(prop.toString())
  })(({ theme, props, data }: any) =>({  
  backgroundColor: data.isHover && props.number !== props.currentAnswer ? `rgba(247, 245, 253, 1)` : data.isHover && props.number === props.currentAnswer ? `rgba(247, 245, 253, 1)` : `rgba(255, 255, 255, 1)`,  
  border: `1px solid rgba(101, 63, 230, 1)`,  
  boxSizing: `border-box`,  
  borderRadius: !data.isHover && props.number == props.currentAnswer ? `10px` : data.isHover && props.number === props.currentAnswer ? `10px` : `18px`,  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: !data.isHover && props.number == props.currentAnswer ? `row` : data.isHover && props.number === props.currentAnswer ? `row` : `column`,  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  width: `20px`,  
  height: `20px`,  
  margin: `0px`,  
  overflow: data.isHover && props.number !== props.currentAnswer ? `hidden` : "unset",  
}));
  
const Check: any = styled("img", {
    shouldForwardProp: prop => !["props", "data"].includes(prop.toString())
  })(({ props, data }: any) =>({  
  height: `8px`,  
  width: `8px`,  
  margin: !data.isHover && props.number == props.currentAnswer ? `0px` : data.isHover && props.number === props.currentAnswer ? `0px` : `10px 0px 0px 0px`,  
}));
  
const Text: any = styled("div")(({ theme }: any) =>({  
  textAlign: `left`,  
  whiteSpace: `pre-wrap`,  
  color: `rgba(52, 58, 64, 1)`,  
  fontStyle: `normal`,  
  fontFamily: `Open Sans`,  
  fontWeight: `400`,  
  fontSize: `16px`,  
  letterSpacing: `0px`,  
  textDecoration: `none`,  
  lineHeight: `24px`,  
  textTransform: `none`,  
  flexGrow: `1`,  
  margin: `0px 0px 0px 8px`,  
}));
 
function ViewerQuestionType(props: ViewerQuestionTypeProps): JSX.Element {
  const {data, fns} = useViewerQuestionType();
  return (
    <StateDefaultResponse className={props.className} onClick={() => props.setCurrentAnswer(props.number)} onMouseOver={fns.hoverOn} onMouseOut={fns.hoverOff} props={props} data={data} >
      <CheckboxAndRadio >
        <CheckboxAndRadio1 >
          <CheckboxBase props={props} data={data} >
            {((!data.isHover && props.number == props.currentAnswer) || (data.isHover && props.number === props.currentAnswer)) &&
              <Check props={props} data={data}  src={CheckImage} alt={"Check"}/>
            }
          </CheckboxBase>
        </CheckboxAndRadio1>
        <Text >
          {`Example Answer Option`}
            </Text>
      </CheckboxAndRadio>
    </StateDefaultResponse>
  );
}

export default ViewerQuestionType;
