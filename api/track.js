export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { platform } = req.body;
    console.log(`[TRACK] Click registrato su: ${platform}`);
    res.status(200).json({ status: 'ok' });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}