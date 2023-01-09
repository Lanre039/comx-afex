import Manager from "./encryption";

const manager = new Manager({
  key: process.env.NEXT_PUBLIC_KEY,
  vector: process.env.NEXT_PUBLIC_VECTOR,
});

interface IPayload {
  url: string;
  data: Record<string, unknown>;
}

export const encryption = {
  encrypt: manager.encrypt,
  decrypt: manager.decrypt,
};

export const postRequest = async ({ url, data }: IPayload) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`;
  const form_data = { ...data };

  manager.encrypt(form_data); // impure encryption

  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(form_data),
    headers,
  })
    .then((response) => response.json())
    .then((response) => {
      manager.decrypt(response); // impure decryption
      return response;
    });
};
