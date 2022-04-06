const db = require("../db")

class Livro {
  static async inserirr(data){
    const connect = await dB.connect();
    const sql = "insert into livros(autor, titulo, editora, data_publicacao, preco) values($1,$2,$3,$4,$5,$6)";
    const values = [data.autor, data.titulo, data.editora, data.data_publicacao, data.preco]
    return await connect.query(sql,values);
  }

  static async 
  
   static async selecionarr(){
     const connect = await db.connect();
     return await connect.query("select * from livros")


   }

  static async atualizarr(data){
    const connect = await dB.connect();
    const sql = "update  livros set autor=$1, titulo= $2, editora= $3, data_publicacao= $4, preco= $5 where id=$6";
    const values = [data.autor, data.titulo, data.editora, data.data_publicacao, data.preco, data.id]
    return await connect.query(sql, values);
    
  }
static async deletarr (data){
  const values =[data.id];
  const sql = 'delete from livros where id=$1;';
  return await connect.query(sql, values);
}

}

module.exports = Livro;