const { db } = require("../config/db.js");
const bcrypt = require("bcrypt");

module.exports = {
  createUser: async (user) => {
    const { username, password, email, first_name, last_name } = user;
    const trx = await db.transaction();
    try {
      // Insert user data into the 'users' table
      const [userid] = await trx("users").insert(
        { email, username, first_name, last_name },
        ["id"]
      );

      // Hash the password and insert it into the 'hashpwd' table
      const hashedPassword = await bcrypt.hash(password + "", 10);
      await trx("hashpwd").insert({
        userid: userid.id,
        password: hashedPassword,
      });

      await trx.commit();

      return userid;
    } catch (error) {
      await trx.rollback();
      throw error;
    }
  },
  getUserByEmail: async (email) => {
    try {
      const user = await db("users")
        .select("hashpwd.password", "users.id")
        .join("hashpwd", { "users.id": "hashpwd.userid" })
        .where({ email })
        .first();
      return user;
    } catch (error) {
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      const users = await db("users");
      return users;
    } catch (error) {
      throw error;
    }
  },
  getUserById: async (id) => {
    try {
      const user = await db("users").where({ id }).first();
      return user;
    } catch (error) {
      throw error;
    }
  },
  updateUserById: async (id, updatedUser) => {
    let userpassword;
    if (updatedUser?.password) {
      userpassword = updatedUser?.password;
      delete updatedUser.password;
    }
    try {
      await db("users").where({ id }).update(updatedUser);

      if (userpassword) {
        // Hash the password and insert it into the 'hashpwd' table
        const password = await bcrypt.hash(userpassword + "", 10);
        await db("hashpwd").where({ userid: id }).update({ password });
      }
    } catch (error) {
      throw error;
    }
  },
};
