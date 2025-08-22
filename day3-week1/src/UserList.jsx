import { useEffect, useState } from "react";

export function UserList() {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setStatus("loading");
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setData(json);
        setStatus("success");
      } catch (err) {
        if (err.name === "AbortError") return;
        setError(err.message || "Unknown error");
        setStatus("error");
      }
    })();

    return () => controller.abort(); // ✅ cleanup request
  }, []); // chạy một lần khi mount

  if (status === "loading") return <p>Đang tải…</p>;
  if (status === "error") return <p style={{ color: "crimson" }}>Lỗi: {error}</p>;

  return (
    <ul>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
export default UserList;