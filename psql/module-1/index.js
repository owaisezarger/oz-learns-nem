const pool = require("./db"); // Import the database connection

const newUser = {
  username: "daniel",
  email: "daniel@example.com",
};

pool.query(
  "INSERT INTO users(username, email) VALUES($1, $2)",
  [newUser.username, newUser.email],
  (error, result) => {
    if (error) {
      console.error("Error inserting user:", error);
      return;
    }

    console.log("User inserted successfully");
    pool.query("SELECT * FROM users", (selectError, selectResult) => {
      if (selectError) {
        console.error("Error querying users:", selectError);
        return;
      }

      console.log("All users:", selectResult.rows);
      pool.query(
        "UPDATE users SET email=$1 WHERE username=$2",
        ["new_email@example.com", "john_doe"],
        (updateError, updateResult) => {
          if (updateError) {
            console.error("Error updating user email:", updateError);
            return;
          }

          console.log("User email updated successfully");
          pool.query(
            "DELETE FROM users WHERE username=$1",
            ["john_doe"],
            (deleteError, deleteResult) => {
              if (deleteError) {
                console.error("Error deleting user:", deleteError);
                return;
              }

              console.log("User deleted successfully");
              pool.end((endError) => {
                if (endError) {
                  console.error("Error closing the pool", endError);
                } else {
                  console.log("Pool has been closed");
                }
              });
            }
          );
        }
      );
    });
  }
);
