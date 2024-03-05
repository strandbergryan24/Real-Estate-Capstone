const bcrypt = require('bcrypt');
const db = require('../models');

const createUser = async (req, res) => {
    try {

        const { username, password } = req.body;

        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

        const newUser = await db.Users.create({
            username: username,
            password: hashedPassword
        });

        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {

        console.error("Error creating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = createUser;