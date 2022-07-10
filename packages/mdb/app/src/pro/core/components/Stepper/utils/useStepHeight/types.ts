import React from "react";

interface useStepHeightProps {
  stepRef: React.MutableRefObject<HTMLLIElement | null>;
  setHeight: React.SetStateAction<any>;
  isActive: boolean;
  isValidated: boolean;
  isMobile: boolean;
  children: React.ReactNode;
}

export { useStepHeightProps };
