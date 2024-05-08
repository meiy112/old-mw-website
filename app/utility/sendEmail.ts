import emailjs from "@emailjs/browser";
import { isValidEmail } from "./utility";

export class EmailForm {
  private name: string;
  private email: string;
  private message: string;
  private reaction: string;

  constructor() {
    this.name = "";
    this.email = "";
    this.message = "";
    this.reaction = "Cool";
  }

  set setName(name: string) {
    this.name = name;
  }
  set setEmail(email: string) {
    this.email = email;
  }
  set setMessage(message: string) {
    this.message = message;
  }
  set setReaction(reaction: string) {
    this.reaction = reaction;
  }

  get getName() {
    return this.name;
  }
  get getEmail() {
    return this.email;
  }
  get getMessage() {
    return this.message;
  }
  get getReaction() {
    return this.reaction;
  }
}

export function sendEmail(email: EmailForm) {
  const serviceId = "service_jjgiv7o";
  const templateId = "template_dzruoit";
  const publicKey = "bZF4VUseg2CkImsdx";

  // Define template parameters
  const templateParams = {
    user_name: email.getName,
    user_email: email.getEmail,
    user_message: email.getMessage + "reaction: " + email.getReaction,
  };

  console.log(email);

  // Send email using EmailJS
  emailjs
    .send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
      console.log("Email sent successfully:", response);
    })
    .catch((error) => {
      // Examine the error object
      if (error.response && error.response.status === 400) {
        // EmailJS service returned an error response
        if (error.response.data.message.includes("invalid email")) {
          throw new Error("Invalid email address");
        } else {
          throw new Error("Email sending failed due to an unknown error");
        }
      } else if (error.message.includes("network")) {
        // Handle network-related errors
        throw new Error("Network error while sending email");
      } else {
        // Handle other general errors
        throw new Error("An unexpected error occurred while sending the email");
      }
    });
}
