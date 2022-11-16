import "./login.css"

const LoginPage = () => {
  return (
    <div className="register flex flex-col min-h-screen rounded-lg md:p-8">
  <div className="p-8 mb-14">
    <h1 className="text-gray-100 text-3xl font-medium tracking-widest">
      Lentes Store
    </h1>
  </div>
  <div className="p-8">
    <h3 className="text-gray-500 uppercase text-sm font-bold mb-2">
      Ingresa a la plataforma
    </h3>
    <h1 className="text-6xl text-white font-medium mb-2">
      Inicia sesión<span className="text-cyan-500">.</span>
    </h1>
    <span className="text-gray-500 font-medium">
      ¿No eres usuario?{" "}
      <a href="#" className="text-cyan-500 hover:underline">
        Registrate
      </a>
    </span>
    <form className="mt-8">
      <div className="max-w-lg mb-4">
        <input
          type="email"
          autoComplete="off"
          className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
          placeholder="Correo electrónico"
        />
      </div>
      <div className="max-w-lg mb-4">
        <input
          type="password"
          autoComplete="off"
          className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group"
          placeholder="Contraseña"
        />
      </div>
      <div className="max-w-lg flex justify-center md:justify-end mb-6">
        <a
          href="#"
          className="text-gray-500 font-medium hover:text-gray-300 transition-colors"
        >
          ¿Olvidaste tu contraseña?
        </a>
      </div>
      <div className="max-w-lg">
        <button className="bg-cyan-600 text-white w-full py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors">
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default LoginPage