export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || name.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Kategoriya nomi bo‘sh bo‘lmasligi kerak" 
      });
    }

    const result = await query(
      `INSERT INTO categories (name, description) 
       VALUES ($1, $2) 
       RETURNING *`,
      [name.trim(), description || null]
    );

    res.status(201).json({
      success: true,
      message: "Yangi kategoriya muvaffaqiyatli qo‘shildi",
      data: result.rows[0]
    });
  } catch (error) {
    console.error("Xatolik (createCategory):", error.message);
    res.status(500).json({ 
      success: false, 
      error: error.message 
    });
  }
};
