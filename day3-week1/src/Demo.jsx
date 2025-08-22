import { useEffect, useState } from "react";

function Timer({ intervalMs = 1000 }) {
  const [count, setCount] = useState(0);

  // Effect phụ thuộc intervalMs → mỗi lần intervalMs đổi: cleanup interval cũ, tạo interval mới
  useEffect(() => {
    console.log("⏱️ Effect(Timer) mount/update → intervalMs =", intervalMs);

    const id = setInterval(() => {
      setCount((c) => c + 1);
    }, intervalMs);

    // Cleanup chạy trước khi effect chạy lại (khi intervalMs đổi) và khi Unmount
    return () => {
      clearInterval(id);
      console.log("🧹 Cleanup(Timer) → cleared interval");
    };
  }, [intervalMs]);

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <b>Timer</b>
      <div>interval: {intervalMs} ms</div>
      <div>count: {count}</div>
    </div>
  );
}

function ResizeWatcher() {
  const [width, setWidth] = useState(window.innerWidth);

  // Đăng ký listener 1 lần khi Mount (deps = [])
  useEffect(() => {
    console.log("🧭 Effect(Resize) mounted → addEventListener");

    const onResize = () => {
      setWidth(window.innerWidth);
      console.log("📏 resized:", window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    // Cleanup khi Unmount: gỡ listener
    return () => {
      window.removeEventListener("resize", onResize);
      console.log("🧹 Cleanup(Resize) → removeEventListener");
    };
  }, []);

  return (
    <div style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
      <b>Resize Watcher</b>
      <div>window.innerWidth: {width}px</div>
    </div>
  );
}

export default function Demo() {
  const [showTimer, setShowTimer] = useState(true);
  const [showResize, setShowResize] = useState(true);
  const [intervalMs, setIntervalMs] = useState(1000);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: 20, display: "grid", gap: 16 }}>
      <h2>Cleanup & Dependency Arrays Demo</h2>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <button onClick={() => setShowTimer((v) => !v)}>
          {showTimer ? "Hide Timer" : "Show Timer"}
        </button>

        <button onClick={() => setShowResize((v) => !v)}>
          {showResize ? "Hide Resize Watcher" : "Show Resize Watcher"}
        </button>

        <label style={{ marginLeft: 12 }}>
          intervalMs:&nbsp;
          <input
            type="number"
            value={intervalMs}
            onChange={(e) => setIntervalMs(Number(e.target.value) || 1000)}
            min={100}
            step={100}
            style={{ width: 90 }}
          />
        </label>
      </div>

      {showTimer && <Timer intervalMs={intervalMs} />}
      {showResize && <ResizeWatcher />}

      <p style={{ color: "#666" }}>
        Mở DevTools → Console để xem log: mount, update, cleanup (unmount hoặc đổi deps).
      </p>
    </div>
  );
}
