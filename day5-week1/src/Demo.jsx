import React, { useState } from "react";

function mkId() {
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function Section({ title, children }) {
  return (
    <div className="rounded-2xl shadow p-4 border border-gray-200 bg-white">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Row({ children }) {
  return <div className="flex items-center gap-2 mb-2">{children}</div>;
}

function TrashButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2 py-1 text-sm rounded-xl border hover:shadow active:scale-95"
    >
      Xóa
    </button>
  );
}

function BadList() {
  // Dùng mảng string + key = index (❌ cố tình làm sai)
  const [items, setItems] = useState(["Táo", "Chuối", "Cam", "Dâu", "Nho"]);

  const removeAt = (idx) => {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div>
      <div className="text-sm text-gray-600 mb-2">
        Key = <code>index</code> (❌): Hãy gõ giá trị khác nhau vào từng input, sau đó click
        <em> Xóa</em> ở một dòng giữa. Bạn sẽ thấy các giá trị bị <strong>“nhảy”</strong> sai hàng.
      </div>
      {items.map((text, index) => (
        <Row key={index}>
          <input
            defaultValue={text}
            className="flex-1 rounded border px-2 py-1"
            placeholder={`Hàng ${index + 1}`}
          />
          <TrashButton onClick={() => removeAt(index)} />
        </Row>
      ))}
    </div>
  );
}

function GoodList() {
  // Dùng id ổn định + key = id (✅ đúng)
  const [items, setItems] = useState([
    { id: mkId(), text: "Táo" },
    { id: mkId(), text: "Chuối" },
    { id: mkId(), text: "Cam" },
    { id: mkId(), text: "Dâu" },
    { id: mkId(), text: "Nho" },
  ]);

  const removeById = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };
  const sortData = () => {
   // setItems(items.filter((item) => item.text.length > 3))
   // setItems(items.includes("Cam"))

  }

  return (
    <div>
      <div className="text-sm text-gray-600 mb-2">
        Key = <code>id</code> (✅): Gõ giá trị khác nhau vào từng input, rồi Xóa ở giữa —
        các ô còn lại vẫn giữ nguyên đúng hàng.
      </div>
      {items.map((item, index) => (
        <Row key={item.id}>
          <input
            defaultValue={item.text}
            className="flex-1 rounded border px-2 py-1"
            placeholder={`Hàng ${index + 1}`}
          />
          <TrashButton onClick={() => removeById(item.id)} />
        </Row>
      ))}
    </div>
  );
}

export default function Demo() {
  return (
    <div className="min-h-[60vh] w-full bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Demo: key = index vs key = id trong danh sách input</h1>
      <p className="text-gray-700 mb-6">
        Mục tiêu: Cho thấy lỗi phổ biến khi dùng <code>key=index</code>. Hãy nhập nội dung khác nhau
        ở mỗi ô, rồi xóa một dòng ở giữa để quan sát hành vi.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <Section title="❌ Sai: key = index">
          <BadList />
        </Section>
        <Section title="✅ Đúng: key = id ổn định">
          <GoodList />
        </Section>
      </div>

      <div className="mt-6 text-sm text-gray-600">
        
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Bên trái: React tái sử dụng DOM theo vị trí. Khi xóa một dòng, các hàng phía dưới bị
            “dịch” lên và giữ lại <em>DOM node cũ</em> → giá trị hiển thị lệch hàng.
          </li>
          <li>
            Bên phải: Mỗi hàng có <strong>id ổn định</strong>, React gắn đúng DOM với đúng dữ liệu →
            không bị “nhảy” giá trị.
          </li>
        </ul>
      </div>
    </div>
  );
}
