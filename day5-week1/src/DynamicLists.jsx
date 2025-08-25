import React, { useState } from "react";

function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function DynamicListSimple() {
  const [item, setItem] = useState([
    {id: makeId(),text: "Cam"}, 
  {id: makeId(), text: "Táo"}]);
  const [newText, setNewText] = useState("");

    const handleAdd = () => { 
    
    setItem((prev) => [...prev, { id: makeId(), text: newText }]);

    }
    const handleEdit = (id, value) => {
    setItem((prev) =>
      prev.map((it) => (it.id === id ? { ...it, text: value } : it))
    );

    }

    const handleDelete = (id) => {
    setItem((prev) => prev.filter((it) => it.id !== id));
  };
  return (
    <div style={{ maxWidth: 520, margin: "24px auto", fontFamily: "system-ui" }}>
      <h2 style={{ marginBottom: 12 }}>Dynamic List </h2>

      {/* Khu vực thêm mới */}
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          placeholder="Nhập mục mới…"
          style={{ flex: 1, padding: 8, border: "1px solid #ccc", borderRadius: 6 }}
        />
        <button  onClick={handleAdd} style={{ padding: "8px 12px" }}>Thêm</button>
      </div>

      {/* Danh sách các item */}
     
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            { item.map((item, index) => {
               return <li
              key={item.id} 
              style={{
                display: "flex",
                gap: 8,
                alignItems: "center",
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 8,
                marginBottom: 8,
                background: "#fff",
              }}
            >
              {/* Ô input: sửa trực tiếp giá trị của item */}
              <input
                value={item.text}
                onChange={(e) => handleEdit(item.id, e.target.value)}
                style={{ flex: 1, padding: 6, border: "1px solid #ccc", borderRadius: 6 }}
              />

              {/* Nút xóa */}
              <button onClick={() => handleDelete(item.id)} style={{ padding: "6px 10px" }}>
                Xóa
              </button>
            </li> 
            })}
            
        </ul>
      

      {/* Gợi ý nâng cấp (tuỳ chọn):
        - Thêm sắp xếp lên/xuống
        - Tìm kiếm / lọc danh sách
        - Lưu vào localStorage
      */}
    </div>
  );
}
