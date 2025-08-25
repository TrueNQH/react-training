import { useRef, useState } from "react";

export default function UserSearch() {
  const [tuKhoa, setTuKhoa] = useState("");
  const [danhSachUser, setDanhSachUser] = useState([]);
  const [dangTai, setDangTai] = useState(false);
  const [loi, setLoi] = useState("");

  const debounceRef = useRef(null);

  const timKiemUser = async (tuKhoaTimKiem) => {
    try {
      setDangTai(true);
      setLoi("");

      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const tatCaUser = await res.json();

      const ketQua = tatCaUser.filter(user =>
        user.name.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())
      );

      setDanhSachUser(ketQua);
    } catch {
      setLoi("Có lỗi xảy ra khi tìm kiếm!");
    } finally {
      setDangTai(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setTuKhoa(value);

    // debounce: huỷ lần trước
    if (debounceRef.current) clearTimeout(debounceRef.current);

    // tạo lần mới
    debounceRef.current = setTimeout(() => {
      if (value.trim()) {
        timKiemUser(value);
      } else {
        setDanhSachUser([]);
        setLoi("");
      }
    }, 500);
  };

  return (
    <div>
      <h1>Tìm kiếm User</h1>
      <input
        type="text"
        value={tuKhoa}
        onChange={handleChange}
        placeholder="Nhập tên user cần tìm..."
      />

      {dangTai && <p>Đang tìm kiếm...</p>}
      {loi && <p style={{color:"red"}}>{loi}</p>}
      {danhSachUser.map(u => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}
