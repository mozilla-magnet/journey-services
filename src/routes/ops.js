const express = require('express');
const router = express.Router();

router.get('/__gtg', (req, res) => {
  res.type('text/plain;charset=utf-8');
  res.set('Cache-Control', 'no-cache');
  res.send('ok');
});

router.get('/__health', (req, res) => {
  res.set('Cache-Control', 'no-cache');
  res.json({
    checks: [
      {
        name: 'Is running',
        ok: true,
        severity: 1,
        panicGuide: '',
        lastUpdated: new Date().toISOString(),
      }
    ]
  });
});

module.exports = router;
