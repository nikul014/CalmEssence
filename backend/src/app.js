const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const tokenRoutes = require('./routes/tokenRoutes');
const chatRoutes = require('./routes/chatRoutes');
const breathingRoutes = require('./routes/breathingRoutes');
const meditationRoutes = require('./routes/meditationRoutes');
const goodMemoriesRoutes = require('./routes/goodMemoriesRoutes');
const articleRoutes = require('./routes/articleRoutes');
const blogRoutes = require('./routes/blogRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/breathing', breathingRoutes);
app.use('/api/meditation', meditationRoutes);
app.use('/api/goodMemories', goodMemoriesRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/chats', chatRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});