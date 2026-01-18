export const paymentRouter = express.Router();
import {pool} from "../db_connection.js";
 
 export const getBooks =async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM groups");
        res.json({ message: "Successful", data: result.rows });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
export const deleteBooks=async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(
            `delete from groups where id =${id} RETURNING *`
        );
        res.json({ message: "Successful", data: result.rows });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
export const postBooks=async (req, res) => {
    try {
        const newGroup = req.body;

        const result2 = await pool.query(
            `INSERT INTO groups (name, teacherid)
        VALUES ($1, $2)  RETURNING *`,
            [
                newGroup.name,
                newGroup.teacherid
            ]
        );
        res.json({
            message: "Yangi guruh muvaffaqiyatli qo'shildi",
            data: result2.rows,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const addBooks=async (req, res) => {
    try {
        const newUser = req.body;

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}
