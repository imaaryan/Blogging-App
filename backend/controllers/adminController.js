import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid Credentails" });
    } else {
      const token = jwt.sign({ email }, process.env.SECRET_KEY);
      res.json({ success: true, token });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export default adminLogin;