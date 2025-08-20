import PropTypes from "prop-types";

export function UserCard({ user, onFollow, onMessage }) {
  const { name, email, role } = user || {};
  return (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      gap: "16px",
      border: "1px solid #ddd",
      borderRadius: "12px",
      padding: "16px",
      background: "#fff",
      maxWidth: "400px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      
      <img
        src="/download.jpg"
        alt={name}
        style={{ width: "60px", height: "60px", borderRadius: "50%", objectFit: "cover", border: "1px solid #aaa" }}
      />

      <div style={{ flex: 1 }}>
       
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "bold", color:"black" }}>{name}</h3>
          
        </div>

        <p style={{ margin: "4px 0", fontSize: "14px", color: "#555" }}>{email ? email : ""}</p>
        <p style={{ margin: "4px 0", fontSize: "14px", fontStyle: "italic", color: "#777" }}>{role ? role : ""}</p>
       
       

        
        <div style={{ marginTop: "12px", display: "flex", gap: "8px" }}>
          {
            <button
              onClick={onFollow}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                background: "#007bff",
                color: "white",
                cursor: "pointer"
              }}
            >
              Follow
            </button>
          }
          {
            <button
              onClick={onMessage}
              style={{
                padding: "6px 12px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                background: "green",
                cursor: "pointer"
              }}
            >
              Message
            </button>
          }
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    role: PropTypes.string,
  }),

};
