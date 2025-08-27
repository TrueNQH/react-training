import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  newsletter: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "change_field":
      return { ...state, [action.field]: action.value };
    case "toggle_newsletter":
      return { ...state, newsletter: !state.newsletter };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function FormUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state, null, 2));
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 400 }}>
      <h3>Form với useReducer</h3>

      <input
        type="text"
        placeholder="Tên"
        value={state.name}
        onChange={(e) => dispatch({ type: "change_field", field: "name", value: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => dispatch({ type: "change_field", field: "email", value: e.target.value })}
      />

      <label>
        <input
          type="checkbox"
          checked={state.newsletter}
          onChange={() => dispatch({ type: "toggle_newsletter" })}
        />
        Nhận newsletter
      </label>

      <button type="submit">Submit</button>
      <button type="button" onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </form>
  );
}
