// https://panorbit.in/api/users.json

export async function getUsersList() {
  const resp = await fetch("https://panorbit.in/api/users.json");
  const data = await resp.json();
  return data;
}
