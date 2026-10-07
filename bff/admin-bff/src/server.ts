// admin-bff Server Bootstrap
import { app } from './app.js';

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => {
  console.log(`🌐 [admin-bff] aggregator running on port ${PORT}`);
});
