
//inquire 
var inquirer = require('inquirer')

//mysql

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});
 
connection.connect();

var q = 'SELECT * FROM products'

var v = {
  id:0,
  product_name:'',
  department_name:'',
  price:0,
  stock_quantity:0,
}



// function buy (){
//   var q = `
//   USE bamazon
//   UPDATE products
//   Select stock_quantity = --
//   `
//   connection.query(q,function (error, r) {


//   })
// }
 
connection.query(q,v, function (error, r) {
  if (error){
    console.log(error)
  } else if(r){
    console.log(r)
    //r[0].id
    
    var pmpt = inquirer.createPromptModule()
    var questions = [
      {
        type: 'input',
        name: 'id',
        message: "Please pick Id of item"
      },
      {
        type: 'input',
        name: 'quantity',
        message: "How many would you like?"
      },
    ]
    pmpt(questions).then(answers =>{
     //switch case 
      console.log(answers.id)
      console.log(answers.quantity)
      console.log(r[answers.id].stock_quantity)

      var userPick = answers.id + 1
    
      var uval = r[userPick].stock_quantity - answers.quantity 

      var w =`
     UPDATE products
     SET stock_quantity = ${uval}
     `


      connection.query(w,v, function (error, r){

      })

    //  switch(answers.r[i].id){
  
    //     case 1 :
        
    //     break;
    //     case 2 :
        
    //     break;
    //     case 3 :
        
    //     break;
    //     case 4 :
        
    //     break;
    //     case 5 :
        
    //     break;
    //     case 6:
        
    //     break;
    //     case 7 :
        
    //     break;
    //     case 8 :
        
    //     break;
    //     case 9:
        
    //     break;
    //     case 10 :
        
    //     break;
    //   }
    
    })
  }
});
 
connection.end();






