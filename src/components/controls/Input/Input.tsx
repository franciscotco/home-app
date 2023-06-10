import React, { ForwardedRef, HTMLAttributes, useEffect, type ReactElement, InputHTMLAttributes, useCallback, forwardRef } from "react";

import classNames from "classnames";

import "./input.css";

function updateInputStatus() {
  const inputs = document.querySelectorAll('input'); // Select all input elements
  inputs.forEach(input => {
    input.disabled = true; // Disable inputs if offline, enable if online
  });
}

// Update input status on page load
updateInputStatus();

// Update input status when online/offline status changes
window.addEventListener('online', updateInputStatus);
window.addEventListener('offline', updateInputStatus);

window.addEventListener('load', function() {
  var inputs = document.getElementsByTagName('input');
  console.log("LOAD");
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].disabled = false;
  }
});

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, disabled, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): ReactElement => {

  const handleOffline = useCallback((): void => {
    console.log("OFFLINE");
    if (ref && typeof ref !== "function" && ref.current) {
      console.log("HELLO");
      ref.current.disabled = false;
    }
  }, [ref]);
  
  useEffect(() => {
    handleOffline();
    window.addEventListener("offline", handleOffline);

    return (): void => {
      window.removeEventListener("offline", handleOffline);
    }
  }, [handleOffline]);

  return (
    <input {...props} ref={ref} disabled={disabled} className={classNames(className, "input")} />
  );
}

export default forwardRef(Input);
