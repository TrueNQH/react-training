import { useEffect, useState } from "react";

export default function UserSearch() {

  const [tuKhoa, setTuKhoa] = useState(""); 
  const [danhSachUser, setDanhSachUser] = useState([]); 
  const [dangTai, setDangTai] = useState(false); 
  const [loi, setLoi] = useState(""); 

 
  const timKiemUser = async (tuKhoaTimKiem) => {
    try {
      setDangTai(true); 
      setLoi(""); 
      
     
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const tatCaUser = await response.json();
      
      
      const ketQua = tatCaUser.filter(user => 
        user.name.toLowerCase().includes(tuKhoaTimKiem.toLowerCase())
      );
      
      setDanhSachUser(ketQua); 
      setDangTai(false); 
      
    } catch (error) {
      setLoi("Có lỗi xảy ra khi tìm kiếm!");
      setDangTai(false);
    }
  };

  useEffect(() => {
    if (!tuKhoa.trim()) {
      setDanhSachUser([]);
      setLoi("");
      return;
    }

   
    const timer = setTimeout(() => {
      timKiemUser(tuKhoa);
    }, 500);

  
    return () => clearTimeout(timer);
  }, [tuKhoa]);

  return (
    <div style={{ 
      maxWidth: 600, 
      margin: "20px auto", 
      padding: 20,
      fontFamily: "Arial, sans-serif" 
    }}>

      <h1>Tìm kiếm User</h1>
      <p style={{ color: "#666" }}>
        Nhập tên để tìm kiếm user từ API
      </p>

     
      <input
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Nhập tên user cần tìm..."
        style={{
          width: "100%",
          padding: 12,
          fontSize: 16,
          border: "2px solid #ddd",
          borderRadius: 8,
          marginBottom: 20
        }}
      />

      {!tuKhoa && (
        <p style={{ fontStyle: "italic", color: "#999" }}>
         Hãy nhập tên để bắt đầu tìm kiếm
        </p>
      )}

      {dangTai && (
        <p style={{ color: "#007bff" }}>
          Đang tìm kiếm...
        </p>
      )}

      {loi && (
        <p style={{ color: "red", backgroundColor: "#ffe6e6", padding: 10, borderRadius: 5 }}>
          {loi}
        </p>
      )}

    
      {!dangTai && tuKhoa && danhSachUser.length === 0 && !loi && (
        <p style={{ fontStyle: "italic", color: "#999" }}>
          Không tìm thấy user nào
        </p>
      )}

      {danhSachUser.length > 0 && (
        <div>
          <h3>🎯 Kết quả ({danhSachUser.length} user):</h3>
          <div style={{ 
            backgroundColor: "#f8f9fa", 
            padding: 15, 
            borderRadius: 8,
            border: "1px solid #e9ecef"
          }}>
            {danhSachUser.map((user) => (
              <div key={user.id} style={{ 
                padding: 10,
                marginBottom: 10,
                backgroundColor: "white",
                borderRadius: 5,
                border: "1px solid #dee2e6"
              }}>
                <div style={{ fontWeight: "bold", fontSize: 18 }}>
                 {user.name}
                </div>
                <div style={{ color: "#666", marginTop: 5 }}>
                  {user.email}
                </div>
                <div style={{ color: "#666", fontSize: 14 }}>
                  {user.website}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}