function InputName({ setarNome }) {
  return (
    <div>
      <input
        type="text"
        name="nome"
        id="nome"
        onChange={(e) => {
          setarNome(e.target.value);
        }}
      />
    </div>
  );
}

export default InputName;
