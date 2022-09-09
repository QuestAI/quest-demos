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

const useAccordionsAccordion = () => {

  const [state, setState] = useState('collapsed')

  let data: any = {
    state
  };
  const onAccordionClick = (param1:any): any => {
    setState(state === 'collapsed' ? 'expanded' : 'collapsed')
  };

  let fns: any = {onAccordionClick};
  return {data, fns};
}

export default useAccordionsAccordion;