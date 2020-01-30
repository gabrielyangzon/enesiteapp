var Connection = require('tedious').Connection;
var Request = require('tedious').Request




  var config = {  
    server: 'ENESQL01\Design_db',  //update me
    userName: 'webuser', //update me
    password: 'abc123',  //update me
    options: {
        // If you are on Microsoft Azure, you need encryption:
        database: 'BOILER',  //update me
        trustedConnection: true,
        instanceName: 'SQLEXPRESS'

    }
};  

  
  var connection = new Connection(config)
  
  connection.on('connect', function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log("connected")
    }
  })
  
  function executeStatement () {
    request = new Request("select 123, 'hello world'", function (err, rowCount) {
      if (err) {
        console.log(err)
      } else {
        console.log(rowCount + ' rows')
      }
      connection.close()
    })
  
    request.on('row', function (columns) {
      columns.forEach(function (column) {
        if (column.value === null) {
          console.log('NULL')
        } else {
          console.log(column.value)
        }
      })
    })
  
    connection.execSql(request)
  }