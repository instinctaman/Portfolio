const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'instinctak07@',
  database: 'my_database', // Replace with your database name
  port: 3306, // Default MySQL port
  connectTimeout: 10000, // 10 seconds timeout
});

db.connect(err => {
  if (err) {
    console.error('❌ Connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL database!');

  const query = 'SELECT * FROM your_table'; // Replace with actual table name

  db.query(query, (err, results, fields) => {
    if (err) {
      console.error('❌ Query error:', err.message);
      return;
    }

    if (results.length === 0) {
      console.log('⚠️ No data found in the table.');
    } else {
      console.log('📦 Fetched Data:');
      console.log(results);
    }

    db.end();
  });
});
