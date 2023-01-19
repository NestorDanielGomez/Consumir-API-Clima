import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";
import useClima from "../hooks/useClima";
const AppClima = () => {
  const { resultado, cargando, busquedaFallida } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Spinner />
        ) : resultado?.name ? (
          <Resultado />
        ) : busquedaFallida ? (
          <p>{busquedaFallida}</p>
        ) : (
          <p>El clima se va a mostrar aqui.</p>
        )}
      </main>
    </>
  );
};

export default AppClima;
