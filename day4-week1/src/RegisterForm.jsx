import { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    hoTen: "",
    email: "",
    matKhau: "",
    xacNhanMatKhau: "",
    soDienThoai: "",
    ngaySinh: "",
    gioiTinh: "",
    diaChi: "",
    thanhPho: "",
    dongYDieuKhoan: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
function  handleInputChange2(e) {
  const { name, value, type, checked } = e.target;
  setFormData(prev => ({
    ...prev,
    [name] : value,
  "checkbox": checked }
  ));
  
  }

  const validateForm = () => {
    const newErrors = {};

    if (!formData.hoTen.trim()) {
      newErrors.hoTen = "Họ tên không được để trống";
    } else if (formData.hoTen.length < 2) {
      newErrors.hoTen = "Họ tên phải có ít nhất 2 ký tự";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email không được để trống";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.matKhau) {
      newErrors.matKhau = "Mật khẩu không được để trống";
    } else if (formData.matKhau.length < 6) {
      newErrors.matKhau = "Mật khẩu phải có ít nhất 6 ký tự";
    }

    if (!formData.xacNhanMatKhau) {
      newErrors.xacNhanMatKhau = "Vui lòng xác nhận mật khẩu";
    } else if (formData.matKhau !== formData.xacNhanMatKhau) {
      newErrors.xacNhanMatKhau = "Mật khẩu không khớp";
    }

    const phoneRegex = /^[0-9]{10,11}$/;
    if (!formData.soDienThoai.trim()) {
      newErrors.soDienThoai = "Số điện thoại không được để trống";
    } else if (!phoneRegex.test(formData.soDienThoai)) {
      newErrors.soDienThoai = "Số điện thoại không hợp lệ (10-11 số)";
    }

    if (!formData.ngaySinh) {
      newErrors.ngaySinh = "Ngày sinh không được để trống";
    } else {
      const birthDate = new Date(formData.ngaySinh);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 13) {
        newErrors.ngaySinh = "Bạn phải từ 13 tuổi trở lên";
      }
    }

    if (!formData.gioiTinh) {
      newErrors.gioiTinh = "Vui lòng chọn giới tính";
    }

    if (!formData.diaChi.trim()) {
      newErrors.diaChi = "Địa chỉ không được để trống";
    }

    if (!formData.thanhPho) {
      newErrors.thanhPho = "Vui lòng chọn thành phố";
    }

    if (!formData.dongYDieuKhoan) {
      newErrors.dongYDieuKhoan = "Bạn phải đồng ý với điều khoản";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Đăng ký thành công!");
      
      setFormData({
        hoTen: "",
        email: "",
        matKhau: "",
        xacNhanMatKhau: "",
        soDienThoai: "",
        ngaySinh: "",
        gioiTinh: "",
        diaChi: "",
        thanhPho: "",
        dongYDieuKhoan: false
      });
      setErrors({});
    } catch (error) {
      alert("Có lỗi xảy ra!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ 
      maxWidth: 600, 
      margin: "20px auto", 
      padding: 30,
      backgroundColor: "#f8f9fa",
      borderRadius: 15,
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
    }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: 30 }}>
        Form Đăng Ký
      </h1>

      <div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
            Họ và tên *
          </label>
          <input
            type="text"
            name="hoTen"
            value={formData.hoTen}
            onChange={handleInputChange}
            placeholder="Nguyễn Văn A"
            style={{
              width: "100%",
              padding: 12,
              border: errors.hoTen ? "2px solid #dc3545" : "2px solid #ddd",
              borderRadius: 8,
              fontSize: 16,
              boxSizing: "border-box"
            }}
          />
          {errors.hoTen && (
            <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
              {errors.hoTen}
            </div>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@gmail.com"
            style={{
              width: "100%",
              padding: 12,
              border: errors.email ? "2px solid #dc3545" : "2px solid #ddd",
              borderRadius: 8,
              fontSize: 16,
              boxSizing: "border-box"
            }}
          />
          {errors.email && (
            <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
              {errors.email}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
              Mật khẩu *
            </label>
            <input
              type="password"
              name="matKhau"
              value={formData.matKhau}
              onChange={handleInputChange}
              placeholder="Ít nhất 6 ký tự"
              style={{
                width: "100%",
                padding: 12,
                border: errors.matKhau ? "2px solid #dc3545" : "2px solid #ddd",
                borderRadius: 8,
                fontSize: 16,
                boxSizing: "border-box"
              }}
            />
            {errors.matKhau && (
              <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
                {errors.matKhau}
              </div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
              Xác nhận mật khẩu *
            </label>
            <input
              type="password"
              name="xacNhanMatKhau"
              value={formData.xacNhanMatKhau}
              onChange={handleInputChange}
              placeholder="Nhập lại mật khẩu"
              style={{
                width: "100%",
                padding: 12,
                border: errors.xacNhanMatKhau ? "2px solid #dc3545" : "2px solid #ddd",
                borderRadius: 8,
                fontSize: 16,
                boxSizing: "border-box"
              }}
            />
            {errors.xacNhanMatKhau && (
              <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
                {errors.xacNhanMatKhau}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
            Số điện thoại *
          </label>
          <input
            type="tel"
            name="soDienThoai"
            value={formData.soDienThoai}
            onChange={handleInputChange}
            placeholder="0912345678"
            style={{
              width: "100%",
              padding: 12,
              border: errors.soDienThoai ? "2px solid #dc3545" : "2px solid #ddd",
              borderRadius: 8,
              fontSize: 16,
              boxSizing: "border-box"
            }}
          />
          {errors.soDienThoai && (
            <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
              {errors.soDienThoai}
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 15, marginBottom: 20 }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
              Ngày sinh *
            </label>
            <input
              type="date"
              name="ngaySinh"
              value={formData.ngaySinh}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 12,
                border: errors.ngaySinh ? "2px solid #dc3545" : "2px solid #ddd",
                borderRadius: 8,
                fontSize: 16,
                boxSizing: "border-box"
              }}
            />
            {errors.ngaySinh && (
              <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
                {errors.ngaySinh}
              </div>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
              Giới tính *
            </label>
            <select
              name="gioiTinh"
              value={formData.gioiTinh}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: 12,
                border: errors.gioiTinh ? "2px solid #dc3545" : "2px solid #ddd",
                borderRadius: 8,
                fontSize: 16,
                boxSizing: "border-box"
              }}
            >
              <option value="">Chọn giới tính</option>
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
              <option value="khac">Khác</option>
            </select>
            {errors.gioiTinh && (
              <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
                {errors.gioiTinh}
              </div>
            )}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
            Địa chỉ *
          </label>
          <input
            type="text"
            name="diaChi"
            value={formData.diaChi}
            onChange={handleInputChange}
            placeholder="123 Đường ABC, Quận XYZ"
            style={{
              width: "100%",
              padding: 12,
              border: errors.diaChi ? "2px solid #dc3545" : "2px solid #ddd",
              borderRadius: 8,
              fontSize: 16,
              boxSizing: "border-box"
            }}
          />
          {errors.diaChi && (
            <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
              {errors.diaChi}
            </div>
          )}
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: 5 }}>
            Thành phố *
          </label>
          <select
            name="thanhPho"
            value={formData.thanhPho}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: 12,
              border: errors.thanhPho ? "2px solid #dc3545" : "2px solid #ddd",
              borderRadius: 8,
              fontSize: 16,
              boxSizing: "border-box"
            }}
          >
            <option value="">Chọn thành phố</option>
            <option value="hanoi">Hà Nội</option>
            <option value="hcm">TP. Hồ Chí Minh</option>
            <option value="danang">Đà Nẵng</option>
            <option value="haiphong">Hải Phòng</option>
            <option value="cantho">Cần Thơ</option>
          </select>
          {errors.thanhPho && (
            <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
              {errors.thanhPho}
            </div>
          )}
        </div>

        <div style={{ marginBottom: 30 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
            <input
              type="checkbox"
              name="dongYDieuKhoan"
              checked={formData.dongYDieuKhoan}
              onChange={handleInputChange}
              style={{ 
                width: 18, 
                height: 18,
                accentColor: "#007bff"
              }}
            />
            <span>
              Tôi đồng ý với <strong>Điều khoản sử dụng</strong> và <strong>Chính sách bảo mật</strong> *
            </span>
          </label>
          {errors.dongYDieuKhoan && (
            <div style={{ color: "#dc3545", fontSize: 14, marginTop: 5 }}>
              {errors.dongYDieuKhoan}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            width: "100%",
            padding: 15,
            backgroundColor: isSubmitting ? "#6c757d" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 18,
            fontWeight: "bold",
            cursor: isSubmitting ? "not-allowed" : "pointer",
            transition: "background-color 0.3s"
          }}
        >
          {isSubmitting ? "Đang xử lý..." : "Đăng ký"}
        </button>
      </div>
    </div>
  );
}