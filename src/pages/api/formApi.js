const handler = (req, res) => {
  const result = `${req.body.name}様`; // 1. 送られてきたデータから名前を取り出し、 2.末尾に「様」の文字を足して
  res.status(200).json(result); // ３.データを返す
};

export default handler;
