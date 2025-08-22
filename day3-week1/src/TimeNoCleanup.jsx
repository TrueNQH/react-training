import { useEffect, useState } from "react";

export default function TimeNoCleanup() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    console.log("TimeNoCleanup mounted");
    const id = setInterval(() => {
      setSec((s) => s + 1);
      console.log("⏱ (NoCleanup) sec =", sec); // lưu ý: sec ở đây là closure cũ
    }, 1000);

    // ❌ KHÔNG return cleanup → interval sẽ không bị dừng khi unmount
  }, []); // chạy đúng 1 lần khi mount

  return (
    <div style={{ padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <h3>No Cleanup</h3>
      <p>Seconds: {sec}</p>
      <p style={{ color: "#999" }}>
        Chuyển sang Home: interval vẫn chạy và tiếp tục log trong console.
      </p>
    </div>
  );
}
