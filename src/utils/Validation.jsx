import { useContext } from "react";
import { FormContext } from "../App";

 const useValidation = () => {
  const { formData } = useContext(FormContext);
 const validate=()=>{
     let newErrors = {};
     if (!formData.fName.trim()) {
       newErrors.fName = "First name cannot be empty or just spaces";
     }
     if (!formData.lName.trim()) {
       newErrors.lName = "Last name cannot be empty or just spaces";
     }
     if (!formData.message.trim()) {
       newErrors.message = "Message cannot be empty or just spaces";
     }
     if (!formData.email.trim()) {
       newErrors.email = "Email is required.";
     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
       newErrors.email = "Enter a valid email address.";
     }

     if (!formData.phone.trim()) {
       newErrors.phone = "Mobile Number is required.";
     } else if (!/^\d{10}$/.test(formData.phone)) {
       newErrors.phone = "Mobile Number must be 10 digits.";
     }
     return newErrors;
    }
    return { validate }
};
export default useValidation;