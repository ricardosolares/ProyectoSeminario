import {getConnection} from "./../database/database";

const getUsuario = async (request, response) => {
    try {
        const connection = await getConnection();
        const resultado = await connection.query("SELECT id, nombre,apellido, edad FROM usuarios");
        response.json(resultado);
    } catch (error) {
        response.status(400).json({ message : "Bad Request. Por favor llene todos los campos"});
    }
  
};

const getUsuariobyId = async (request, response) => {
    try {
        const { id } = request.params;
        const connection = await getConnection();
        const resultado = await connection.query("SELECT id, nombre,apellido, edad FROM usuarios WHERE id = ?", id);
        response.json(resultado);
    } catch (error) {
        response.status(400).json({ message : "Bad Request. no fue encontrado el registro con ese ID"});
    }
  
};

const putUsuario = async (request, response) => {
    try {
        const { id } = request.params;
        const {nombre, apellido, edad} = request.body;
        const Usuario = {nombre, apellido, edad};
        const connection = await getConnection();
        const resultado = await connection.query("UPDATE usuarios SET ? WHERE id = ?", [Usuario,id]);
        response.json("Update realizado con éxito");
    } catch (error) {
        response.status(400).json({ message : "Bad Request. Por favor llene todos los campos"});
    }
  
};

const addUsuario = async (request, response) => {
try {
    const {nombre, apellido, edad} = request.body;

    if (nombre == undefined || apellido == undefined || edad == undefined){
        response.status(400).json({ message : "Bad Request. Por favor llene todos los campos"}); // validacion si los campos vienen vacios 
    }
    const Usuario = {nombre, apellido, edad};
    const connection = await getConnection();
    const resultado = await connection.query("INSERT INTO usuarios SET ?",Usuario);
    response.json("Usuario Agregado");
 
} catch (error) {
    response.status(500);
    response.send(error.message);
}

};

export const methods = {
    getUsuario,
    getUsuariobyId,
    addUsuario,
    putUsuario
};