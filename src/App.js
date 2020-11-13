import React, { useRef, useState, useCallback, useEffect } from 'react';

function useMyHook() {
  const [s1, setS1] = useState();
  const [s2, setS2] = useState();
  const setFn = useCallback(
    () => {
      console.log('set s1');
      setS1(Date.now());
      console.log('set s2');
      setS2(Date.now());
    },
    [setS1, setS2]
  );
  return setFn;
}


export default function() {

  const renderCount = useRef(0)
  renderCount.current++
  console.log('render')
  const setTwoStates = useMyHook()

  // uncomment either one or the other to see the diff re render behaviour

  // // triggers only one re render
  // useEffect(() => setTwoStates(), [])
  // // console.logs are render, set s1, set s2, render

  // // triggers two re render
  // useEffect(() => setTimeout(setTwoStates, 1), [])
  // // console.logs are render, set s1, render, set s2, render 


  return (
    <div>render count: {renderCount.current}</div>
  );
}
