
//inquire 
var inquirer = require('inquirer')

//mysql

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bamazon',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
});

connection.connect();

var q = 'SELECT * FROM products'

var v = {
  id: 0,
  product_name: '',
  department_name: '',
  price: 0,
  stock_quantity: 0,
}


connection.query(q, v, function (error, r) {
  if (error) {
    console.log(error)
  } else if (r) {
    console.log('======================')
    console.log("Welcome!")
    console.log('=====================')
    for (var i = 0; i < r.length; i++) {
      console.log('====================')
      console.log("Id: " + r[i].id)
      console.log(r[i].product_name)
      console.log(r[i].department_name)
      console.log('$ ' + r[i].price)
      console.log("In Stock Now: " + r[i].stock_quantity)

      console.log('====================')

    }



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
    pmpt(questions).then(answers => {


      // console.log(answers.id)
      // console.log(answers.quantity)

      var userPick = answers.id - 1

      // console.log(r[userPick].stock_quantity)
      // console.log(userPick)

      var updateValue = r[userPick].stock_quantity - answers.quantity

      // console.log(updateValue)

      var newTotal = 'UPDATE products SET ? WHERE ? ;'
      var mode = [
        {
          stock_quantity: updateValue,

        },
        {
          id: answers.id,
        }
      ]

      if (updateValue <= 0) {
        console.log('Insufficient quantity!')
      } else {
        connection.query(newTotal, mode, function (error, r) {
          if (error) {
            console.log(error)
          } else if (r) {
            console.log("Thank you for buying, ")
            connection.end();

          }

        })
      }
    })
  }
})







