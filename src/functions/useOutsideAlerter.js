import React, { useRef } from "react";
import { useEffect } from "react";


export default function OutsideAlerter(props) {
    //props.onInside props.onOutside
      function useOutsideAlerter(ref) {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                props.onOutside();
            }
            else{
                props.onInside();
            }
          }
        
          useEffect(() => {
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
              // Unbind the event listener on clean up
              document.removeEventListener("mousedown", handleClickOutside);
            };
          });
        }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);
  
    return <div ref={wrapperRef}>{props.children}</div>;
  }