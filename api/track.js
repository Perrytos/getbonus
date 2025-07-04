export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { link } = req.body;
    if (!link) {
      return res.status(400).json({ error: 'Missing link' });
    }

    console.log(`Referral clicked: ${link}`);

    return res.status(200).json({ success: true });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}