const { getConnection } = require('../models/db');

const getMemoryList = async (req, res) => {
    const searchTerm = req.query.searchTerm || '';
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 10;
    const offset = (page - 1) * pageSize;

    try {
        const connection = getConnection();
        const sqlQuery = `
    SELECT *
    FROM good_memories
    WHERE title LIKE '%${searchTerm}%'
    ORDER BY created_at DESC
    LIMIT ${pageSize} OFFSET ${offset}
`;
        console.log('SQL Query:', sqlQuery);
        const [results] = await connection.execute(sqlQuery);

        const [[{ count }]] = await connection.execute(`
            SELECT COUNT(*) AS count
            FROM good_memories
            WHERE title LIKE ?
        `, [`%${searchTerm}%`]);

        res.json({
            data: results,
            pagination: {
                page: page,
                pageSize: pageSize,
                totalItems: count,
                totalPages: Math.ceil(count / pageSize)
            }
        });
    } catch (error) {
        console.error('Error fetching memories:', error);
        res.status(500).json({ error: 'Error fetching memories' });
    }
};

const createMemory = async (req, res) => {
    const { title, memory_date_time, description, image_url, user_id } = req.body;

    if (!title || !memory_date_time) {
        return res.status(400).json({ error: 'Title and memory date/time are required' });
    }

    try {
        const connection = getConnection();
        const [result] = await connection.execute(
            `INSERT INTO good_memories (title, memory_date_time, description, image_url, user_id)
             VALUES (?, ?, ?, ?, ?)`,
            [title, memory_date_time, description, image_url, user_id]
        );

        res.status(201).json({
            message: 'Memory created successfully',
            memory_id: result.insertId
        });
    } catch (error) {
        console.error('Error creating memory:', error);
        res.status(500).json({ error: 'Error creating memory' });
    }
};

const updateMemory = async (req, res) => {
    const { memory_id, title, memory_date_time, description, image_url } = req.body;

    if (!memory_id) {
        return res.status(400).json({ error: 'Memory ID is required' });
    }

    try {
        const connection = getConnection();
        const fieldsToUpdate = {};
        if (title !== undefined) fieldsToUpdate.title = title;
        if (memory_date_time !== undefined) fieldsToUpdate.memory_date_time = memory_date_time;
        if (description !== undefined) fieldsToUpdate.description = description;
        if (image_url !== undefined) fieldsToUpdate.image_url = image_url;

        if (Object.keys(fieldsToUpdate).length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        const setClause = Object.keys(fieldsToUpdate).map(field => `${field} = ?`).join(', ');
        const values = Object.values(fieldsToUpdate);
        values.push(memory_id);

        const [updateResult] = await connection.execute(`UPDATE good_memories SET ${setClause} WHERE memory_id = ?`, values);

        res.status(200).json({
            message: 'Memory updated successfully',
            affectedRows: updateResult.affectedRows
        });
    } catch (error) {
        console.error('Error updating memory:', error);
        res.status(500).json({ error: 'Error updating memory' });
    }
};

module.exports = { getMemoryList, createMemory, updateMemory };
