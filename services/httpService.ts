import Manager from "./encryption";

const manager = new Manager({
  key: process.env.NEXT_PUBLIC_KEY,
  vector: process.env.NEXT_PUBLIC_VECTOR,
  // key: process.env.KEY,
  // vector: process.env.VECTOR,
});
// console.log({});

// USAGE
// function handleSubmit({ params }) {
//   const form_data = { otp: params.otp };
//   manager.encrypt(form_data); // impure encryption

//   const headers = new Headers();
//   headers.set("Content-Type", "application/json");
//   // headers.set("Authorization", `Bearer ${
//   //   sessionStorage.getItem("user.auth.token") ?? context.user?.token
//   // }`);

//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(form_data),
//     headers
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       manager.decrypt(response) // impure decryption
//       console.log(response) // something intelligible
//     });
// }

interface IPayload {
  url: string;
  data: Record<string, unknown>;
}

export const encryption = {
  encrypt: manager.encrypt,
  dencrypt: manager.decrypt,
};

export const postRequest = async ({ url, data }: IPayload) => {
  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${url}`;
  const form_data = { ...data };
  console.log({ data });

  manager.encrypt(form_data); // impure encryption

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  // headers.set("Authorization", `Bearer ${
  //   sessionStorage.getItem("user.auth.token") ?? context.user?.token
  // }`);

  fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(form_data),
    headers,
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .then((response) => {
      console.log(response); // something intelligible
      manager.decrypt(response); // impure decryption
      return response;
    });
};
