import { redirect } from "react-router-dom";

export async function auth() {
  if (!localStorage.getItem("infoRegister")) {
    throw redirect("/");
  }
}
