import { useEffect, useState } from "react";

export default function TimeWithCleanup() {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    console.log("TimeWithCleanup mounted");
    const id = setInterval(() => {
      setSec((s) => s + 1);
      console.log("⏱ (WithCleanup) sec =", sec); // chú ý closure như trên
    }, 1000);

    // ✅ Cleanup: dừng interval khi unmount
    return () => {
      clearInterval(id);
      console.log("🧹 TimeWithCleanup unmounted → interval cleared");
    };
  }, []);

  return (
    <div style={{ padding: 16, border: "1px solid #ccc", borderRadius: 8 }}>
      <h3>With Cleanup</h3>
      <p>Seconds: {sec}</p>
      <p style={{ color: "#999" }}>
        Chuyển sang Home: interval dừng, console ngừng log.
      </p>
    </div>
  );
}
