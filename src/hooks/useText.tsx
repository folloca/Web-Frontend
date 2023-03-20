import React, { Dispatch, SetStateAction, useCallback, useState } from "react";

interface IUseTextOutput {
  value: string | undefined;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  setNewValue: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  setNewText: (newStr: string) => void;
  setReset: () => void;
}

function useText(defaultValue?: string): IUseTextOutput {
  const [value, setValue] = useState(defaultValue);

  const setNewValue = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setValue(e.target.value),
    [],
  );

  const setNewText = useCallback((newStr: string) => setValue(newStr), []);

  const setReset = useCallback(() => setValue(undefined), []);

  return { value, setValue, setNewValue, setReset, setNewText };
}

export default useText;
