import { useEffect, useState } from "react";

export default function UserSearch() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); 
  const [error, setError] = useState(null);

  useEffect(() => {
  
    if (!query.trim()) {
      setUsers([]);
      setStatus("idle");
      setError(null);
      return;
    }

    setStatus("loading");
    setError(null);

   
    const timer = setTimeout(() => {
      const controller = new AbortController();

      (async () => {
        try {
         
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/users`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const data = await res.json();

          
          const filtered = data.filter((u) =>
            u.name.toLowerCase().includes(query.toLowerCase())
          );

          setUsers(filtered);
          setStatus("success");
        } catch (err) {
          if (err.name === "AbortError") return; 
          setError(err.message || "Unknown error");
          setStatus("error");
        }
      })();

    
      return () => {
        controller.abort();
      };
    }, 400);

   
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div style={{ maxWidth: 520, margin: "24px auto", fontFamily: "system-ui, sans-serif" }}>
      <h2 style={{ margin: 0 }}>User Search</h2>
      <p style={{ color: "#666", marginTop: 4 }}>
        Demo gọi API 
      </p>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Nhập tên user..."
        style={{
          width: "100%",
          padding: "10px 12px",
          borderRadius: 8,
          border: "1px solid #ccc",
          outline: "none",
          marginTop: 8,
        }}
      />

      <div style={{ marginTop: 12 }}>
        {status === "idle" && <em>Nhập từ khóa để tìm…</em>}
        {status === "loading" && <em>Đang tải…</em>}
        {status === "error" && <span style={{ color: "crimson" }}>Lỗi: {error}</span>}
        {status === "success" && users.length === 0 && <em>Không có kết quả.</em>}

        {status === "success" && users.length > 0 && (
          <ul style={{ paddingLeft: 18, marginTop: 8 }}>
            {users.map((u) => (
              <li key={u.id}>
                <b>{u.name}</b> <span style={{ color: "#666" }}>({u.email})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
