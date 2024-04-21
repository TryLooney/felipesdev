const ENDPOINT = "https://ia.dashinteractives.com";

export const createCompletion = async (body: unknown) => {
  const response = await fetch(ENDPOINT + "/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response;
};
