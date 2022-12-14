const { sendEmail } = require("../helpers/sendgrid");

exports.contact = async (req, res) => {
  try {
       console.log(`backend`, req.body);

    const { name, email, contact, message } = req.body;
 
    await sendEmail(name, email, contact, message);
    res.status(200).json({ status: "ok", msg: "Email sent in controller" });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
