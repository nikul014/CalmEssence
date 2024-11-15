
const { getConnection } = require('../models/db');

const getMeditationList = async (req, res) => {
    const searchTerm = req.query.searchTerm || '';
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 10;

    // Calculate offset for pagination
    const offset = (page - 1) * pageSize;
    console.log('Query Parameters:', [`%${searchTerm}%`, pageSize, offset]);

    try {
        const connection = getConnection();
        // Fetch the breathing exercises with pagination and search
        const sqlQuery = `
    SELECT *
    FROM meditation
    WHERE title LIKE '%${searchTerm}%'
    ORDER BY created_at DESC
    LIMIT ${pageSize} OFFSET ${offset}
`;
        console.log('SQL Query:', sqlQuery);
        const [results] = await connection.execute(sqlQuery);


        // Fetch total count for pagination
        const [[{ count }]] = await connection.execute(`
            SELECT COUNT(*) AS count
            FROM meditation
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
        console.error('Error fetching meditation list:', error);
        res.status(500).json({ error: 'Error fetching meditation list' });
    }
};

const createMeditation = async (req, res) => {
    const { title, category, description, duration, media_type, content_url, user_id, user_name, user_email } = req.body;

    if (!title || !media_type) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const connection = getConnection();
        const [result] = await connection.execute(
            `INSERT INTO meditation (title, category, description, duration, media_type, content_url, user_id, user_name, user_email)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [title, category, description, duration, media_type, content_url, user_id, user_name, user_email]
        );

        res.status(201).json({
            message: 'Meditation created successfully',
            meditation_id: result.insertId
        });
    } catch (error) {
        console.error('Error creating meditation:', error);
        res.status(500).json({ error: 'Error creating meditation' });
    }
};

const updateMeditation = async (req, res) => {
    const { meditation_id, title, category, description, duration, media_type, content_url } = req.body;

    if (!meditation_id) {
        return res.status(400).json({ error: 'Missing meditation_id' });
    }

    try {
        const connection = getConnection();
        const fieldsToUpdate = {};
        if (title !== undefined) fieldsToUpdate.title = title;
        if (category !== undefined) fieldsToUpdate.category = category;
        if (description !== undefined) fieldsToUpdate.description = description;
        if (duration !== undefined) fieldsToUpdate.duration = duration;
        if (media_type !== undefined) fieldsToUpdate.media_type = media_type;
        if (content_url !== undefined) fieldsToUpdate.content_url = content_url;

        if (Object.keys(fieldsToUpdate).length === 0) {
            return res.status(400).json({ error: 'No fields to update' });
        }

        const setClause = Object.keys(fieldsToUpdate).map(field => `${field} = ?`).join(', ');
        const values = Object.values(fieldsToUpdate);
        values.push(meditation_id);

        const [updateResult] = await connection.execute(`UPDATE meditation SET ${setClause} WHERE meditation_id = ?`, values);

        res.status(200).json({
            message: 'Meditation updated successfully',
            affectedRows: updateResult.affectedRows
        });
    } catch (error) {
        console.error('Error updating meditation:', error);
        res.status(500).json({ error: 'Error updating meditation' });
    }
};

module.exports = { getMeditationList, createMeditation, updateMeditation };
