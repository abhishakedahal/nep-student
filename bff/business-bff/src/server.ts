// business-bff Server Bootstrap
import { app } from './app.js';

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`🌐 [business-bff] aggregator running on port ${PORT}`);
});
