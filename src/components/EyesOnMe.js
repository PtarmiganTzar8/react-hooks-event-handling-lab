// Code EyesOnMe Component Here
import React from "react";

function EyesonMe (){
    function focus(event) {
        console.log('Hey! Eyes on me!');
      }

      function blur(event) {
        console.log('Good!');
      }

    return (
        <div>
            <button onFocus={blur} onBlur={focus}>Eyes on me</button>
        </div>
    )
}

export default EyesonMe;