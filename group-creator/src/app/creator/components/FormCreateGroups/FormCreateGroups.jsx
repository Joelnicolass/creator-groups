import React from "react";

const FormCreateGroups = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <textarea name="emails"></textarea>
      <button type="submit">Crear</button>
    </form>
  );
};

export default FormCreateGroups;
