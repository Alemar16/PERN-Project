import pg from "pg";

export  const pool = new pg.Pool({
  port: 5432,
  host: "localhost",
  user: "armando",
  password: "1623",
  database: "tasksdb",
});

pool.on("connect", () => {
  console.log("Base de datos conectada");
});
