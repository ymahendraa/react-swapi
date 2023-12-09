const formatDate = (timestamp: string | null | undefined): string => {
  const date = new Date(timestamp ?? "");
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    day: "numeric",
    month: "long",
  };
  return date.toLocaleDateString("en-US", options);
};

export default formatDate;
