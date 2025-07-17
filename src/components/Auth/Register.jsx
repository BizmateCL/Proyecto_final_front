import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/user/UserContext";

export default function Register() {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

  const { registerUser } = ctx;

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmarpassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUser.password !== newUser.confirmarpassword) {
      return setErrorMsg(
        "Tu contraseña de confirmación no coincide. Revisa nuevamente."
      );
    }

    const res = await registerUser(newUser);
    if (res) {
      navigate("/iniciar-sesion"); // ✅ redirigir solo si fue exitoso
    } else {
      return setErrorMsg("Hubo un error al registrar");
    }
  };

  return (
    <>
      <section className="flex flex-col justify-center py-8 mx-auto">
        <h2 className="text-center text-3xl font-bold mt-8">Crea tu cuenta</h2>
        <p className="mt-2 text-center text-sm">
          ¿Ya tienes cuenta? &nbsp;
          <Link
            to="/iniciar-sesion"
            className="font-medium text-brand-light-purple underline"
          >
            Inicia sesión
          </Link>
        </p>
      </section>

      <section className="mt-8 px-4 mx-auto w-full max-w-md">
        <div>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="username" className="form-label">
                Nombre de usuario
              </label>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                name="username"
                type="text"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Correo Electronico
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="email"
                  type="email"
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Contrasena
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="password"
                  type="password"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="form-label">
                Confirma tu contrasena
              </label>
              <div className="mt-1">
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="confirmarpassword"
                  type="password"
                  required
                  className="form-input"
                />
              </div>
            </div>

            <div className="py-4">
              <button type="submit" className="form-button">
                Crear cuenta
              </button>
            </div>

            <div>
              <p className="text-center text-red-800">{errorMsg}</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
