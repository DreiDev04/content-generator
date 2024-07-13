"use client";
import React, { createContext, useState, ReactNode } from "react";
import { FORMDATA } from "@/app/dashboard/content/(components)/GenerateForms";

interface FormContextProps {
  formData: FORMDATA | undefined;
  setFormData: React.Dispatch<React.SetStateAction<FORMDATA | undefined>>;
  isLoading: Boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FORMDATA | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <FormContext.Provider value={{ formData, setFormData, isLoading, setIsLoading}}>
      {children}
    </FormContext.Provider>
  );
};

export { FormContext, FormProvider };
