const express = require('express');
const agentRoutes = require('./routes/agent');

const app = express();
app.use(express.json());

// Routes
app.use('/api/agent', agentRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
