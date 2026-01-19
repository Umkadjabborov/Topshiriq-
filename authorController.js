import {db} from "../db.js";

export const getAuthors = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM authors");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addAuthor = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await db.query(
      `INSERT INTO authors (name)
       VALUES ($1) RETURNING *`,
      [name]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    await db.query(`DELETE FROM authors WHERE author_id = $1`, [req.params.id]);
    res.json({ message: "Deleted " });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { name } = req.body;
    const result = await db.query(
      `UPDATE authors SET name=$1
       WHERE author_id = $2 RETURNING *`,
        [name, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } 
};
