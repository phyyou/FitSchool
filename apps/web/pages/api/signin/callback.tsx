import { signin } from "lib/api/signin";
import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const googleSigninCallback: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const csrfTokenCookie = req.cookies["g_csrf_token"];
    if (!csrfTokenCookie)
      res.status(400).json({ error: "No CSRF token in Cookie." });
    const { g_csrf_token: csrfTokenBody, clienId, credential } = req.body;
    if (!csrfTokenBody)
      res.status(400).json({ error: "No CSRF token in post body." });
    if (csrfTokenCookie !== csrfTokenBody)
      res.status(400).json({ error: "Failed to verify double submit cookie." });
    const token = await signin(clienId, credential);
    res.setHeader("Set-Cookie", `token=${token.access_token}; Expires: ${new Date(+(token.expires + "0000")).toUTCString()}`)

    res.status(200).redirect("/home");
    return;
  } else {
    res.status(405).redirect("/");
    return;
  }
};

export default googleSigninCallback;
