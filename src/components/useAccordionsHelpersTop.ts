/**********************************************************************
*
*   Component hook generated by Quest
*
*   Code Logic for the component goes in this hook
*   To setup bindings that use the data here or call the functions here, use the Quest editor   
*
*   For help and further details refer to: https://www.quest.ai/docs
*
*
**********************************************************************/

import { useState } from "react";

const useAccordionsHelpersTop = () => {

  const [isHovered, setIsHovered] = useState(false);

  let data: any = {
    isHovered
  };
  
  const onMouseOver = (): any => {
    setIsHovered(true)
  };
  const onMouseOut = (): any => {
    setIsHovered(false)
  };

  let fns: any = {onMouseOver, onMouseOut};
  return {data, fns};
}

export default useAccordionsHelpersTop;