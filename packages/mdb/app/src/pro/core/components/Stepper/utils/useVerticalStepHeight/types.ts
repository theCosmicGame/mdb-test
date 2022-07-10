import React from 'react';

interface useStepVerticalHeight {
  stepRef: React.MutableRefObject<HTMLDivElement | null>;
  show: boolean;
  isValidated: boolean;
}

export { useStepVerticalHeight };
