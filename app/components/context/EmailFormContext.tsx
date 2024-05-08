import { EmailForm } from "@/app/utility/sendEmail";
import { createContext, useContext } from "react";

const EmailFormContext = createContext(new EmailForm());

export function useEmailForm() {
  return useContext(EmailFormContext);
}

export function EmailFormProvider({ children }: { children: any }) {
  const emailForm = new EmailForm();

  return (
    <EmailFormContext.Provider value={emailForm}>
      {children}
    </EmailFormContext.Provider>
  );
}
