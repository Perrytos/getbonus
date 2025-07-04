export default function handler(req, res) {
  const { service } = req.query;
  const timestamp = new Date().toISOString();
  console.log(`[TRACK] ${timestamp} - ${service}`);
  res.status(200).json({ status: "ok", service });
}