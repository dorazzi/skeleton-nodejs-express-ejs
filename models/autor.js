const db = require("../db")

class Autor {
  static async inserir(data){
    const connect = await dB.connect();
    const sql = "insert into autores(nome, sobrenome, data_nascimento) values($1,$2,$3)";
    const values = [data.nome, data.sobrenome, data.data_nascimento]
    return await connect.query(sql,values);
  }

  static async 
  
   static async selecionar(){
     const connect = await db.connect();
     return await connect.query("select * from autores")


   }

  static async atualizar(data, id){
    const connect = await dB.connect();
    const sql = "update  autores set nome= $1, sobrenome= $2, data_nascimento= $3 where id=$4";
    const values = [data.nome, data.sobrenome, data.data_nascimento, data.id]
    return await connect.query(sql, values);
    
  }

  static async deletar(id){
  const connect = await db.connect();
    const sql = 'DELETE FROM autores where id=$1;';
    return await connect.query(sql,[id]); 
  }
}

module.exports = Autor;