// student-bff Server Bootstrap
import { app } from './app.js';

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`🌐 [student-bff] aggregator running on port ${PORT}`);
});
