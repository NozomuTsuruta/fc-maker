import React from "react";
import { useFormContext } from "react-hook-form";

export const Export = () => {
  const { register } = useFormContext();
  return (
    <>
      <label className="inline-flex items-center mt-3">
        <input type="radio" className="h-5 w-5" name="exportType" value="default" />
        <span className="ml-2 text-gray-700">Default</span>
      </label>
      <label className="inline-flex items-center mt-3">
        <input type="radio" className="h-5 w-5" name="exportType" value="named" />
        <span className="ml-2 text-gray-700">Named</span>
      </label>
    </>
  );
};
