import { Token } from "lib/types/signin";

export async function signin(
  clientId: string,
  credential: string
): Promise<Token> {
  const res = await fetch(`http://localhost:8000/signin/access-token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: new URLSearchParams({
      client_id: clientId,
      id_token: credential,
    }),
  });
  return await res.json();
}
