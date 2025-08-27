import { useState } from "react";

export default function FormUseState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify({ name, email, newsletter }, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 400 }}>
      <h3>Form với useState</h3>

      <input
        type="text"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>
        <input
          type="checkbox"
          checked={newsletter}
          onChange={(e) => setNewsletter(e.target.checked)}
        />
        Nhận newsletter
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
