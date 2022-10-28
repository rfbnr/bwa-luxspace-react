import { useState } from "react";

export default function useForm(initialState) {
  const [form, setForm] = useState(initialState);

  function updateForm(event) {
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  }

  return { form, updateForm };
}
