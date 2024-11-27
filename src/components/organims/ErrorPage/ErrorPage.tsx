import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppButton } from '../../atoms/AppButton/AppButton';

export const ErrorPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
   
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
    <h1 className="text-6xl font-bold text-red-500">404</h1>
    <h2 className="text-2xl font-semibold mt-4">Ruta no encontrada</h2>
    <p className="mt-2 text-gray-600">
      Lo sentimos, la página que estás buscando no existe.
    </p>
    <p className="mt-4 text-gray-600">
      Serás redirigido al inicio en <span className="font-semibold">5 segundos</span>...
    </p>
  
    <AppButton onClick={()=>{navigate("/")}} title='Volver al inicio'/>
  </div>
  );
};
