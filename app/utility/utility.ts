// Returns current time (12 hour clock) in string form
export const getCurrentTimeString = (): string => {
  const now: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format with AM/PM
  };

  const currentTimeString: string = now.toLocaleTimeString("en-US", options);

  return currentTimeString;
};

// Converts string to lowercase and removes punctuation
export const normalizeString = (inputString: string): string => {
  const lowercasedString = inputString.toLowerCase();

  const cleanedString = lowercasedString.replace(/[^a-zA-Z0-9\s]/g, "");

  return cleanedString;
};
