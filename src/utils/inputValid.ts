export const inputValidEmail = (value: string): string | null => {
  return value.includes("@")
    ? null
    : "Debe ingresar un correo electrónico válido";
};

export const inputValidPassword = (value: string): string | null => {
  return value.length >= 8
    ? null
    : "La contraseña debe tener al menos 8 caracteres";
};

export const inputValidName = (value: string): string | null => {
  return value.length === 0 ? "Debe ingresar su nombre" : null;
};

export const inputValidNumber= (value: string): string | null => {
    return value.length >= 11 ? null : "Ingrese numero de telefono valido";
  };

export const inputValidOperator = (value: string): string | null => {
  return value.startsWith("0424") || value.startsWith("0414") || value.startsWith("0412") || value.startsWith("0416") || value.startsWith("0426")
    ? null
    : "Ingrese un numero de operadora valido";
};

