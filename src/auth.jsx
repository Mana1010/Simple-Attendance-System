import { redirect } from "react-router-dom";

export async function authe() {
  let noAccount = localStorage.getItem("infoRegister") === null;
  if (noAccount) {
    return redirect("/login?message=You must login first");
  }
  return null;
}
