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
import StepBase from './StepBase';
import { ProgressStepsProgressMinimalIcProps } from './types';

 
const SizeLgThemeNumberedB: any = styled("div")({  
  display: `flex`,  
  position: `relative`,  
  isolation: `isolate`,  
  flexDirection: `row`,  
  width: "100%",  
  justifyContent: `center`,  
  alignItems: `center`,  
  padding: `0px`,  
  boxSizing: `border-box`,  
});
  
const StepBase1: any = styled(StepBase)(({ theme }: any) =>({  
  width: `40px`,  
  height: `40px`,  
  margin: `0px`,  
}));
  
const Line: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: `rgba(206, 212, 218, 1)`,  
  width: `48px`,  
  height: `2px`,  
  margin: `0px`,  
}));
  
const StepBase2: any = styled(StepBase)(({ theme }: any) =>({  
  width: `40px`,  
  height: `40px`,  
  margin: `0px`,  
}));
  
const Line1: any = styled("div")(({ theme }: any) =>({  
  backgroundColor: `rgba(206, 212, 218, 1)`,  
  width: `48px`,  
  height: `2px`,  
  margin: `0px`,  
}));
  
const StepBase3: any = styled(StepBase)(({ theme }: any) =>({  
  width: `40px`,  
  height: `40px`,  
  margin: `0px`,  
}));
  
const Line2: any = styled("div")({  
  backgroundColor: `rgba(206, 212, 218, 1)`,  
  width: `48px`,  
  height: `2px`,  
  margin: `0px`,  
});
  
const StepBase4: any = styled(StepBase)(({ theme }: any) =>({  
  width: `40px`,  
  height: `40px`,  
  margin: `0px`,  
}));
 
function ProgressStepsProgressMinimalIc(props: ProgressStepsProgressMinimalIcProps): JSX.Element {
  return (
    <SizeLgThemeNumberedB className={props.className} >
      <StepBase1   current={props.current === 1}  completed={props.completed?.includes(1)} number = "1"/>
      <Line >
      </Line>
      <StepBase2   current={props.current === 2}  completed={props.completed?.includes(2)} number = "2"/>
      <Line1 >
      </Line1>
      <StepBase3   current={props.current === 3}  completed={props.completed?.includes(3)} number = "3"/>
      <Line2 >
      </Line2>
      <StepBase4   current={props.current === 4}  completed={props.completed?.includes(4)} number = "4"/>
    </SizeLgThemeNumberedB>
  );
}

export default ProgressStepsProgressMinimalIc;
