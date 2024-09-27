const productSchema = require("../models/productSchema");
const User = require("../models/LoginSingup");
const all_product = require("../database/all_product");
const jwt = require("jsonwebtoken");
async function getProducts(req, res) {
  try {
    const q = await productSchema.find();
    res.json(q);
  } catch (error) {
    res.json(error);
  }
}

async function postProducts(req, res) {
  try {
    await productSchema.insertMany({
      products: all_product,
    });
    res.json({ mas: "insert seccessfuly .." });
  } catch (error) {
    res.json(error);
  }
}

async function deleteProducts(req, res) {
  try {
    await productSchema.deleteMany();
    res.json({ mas: "questions delete successfully...." });
  } catch (error) {
    res.json({ error });
  }
}

async function postSingup(req, res) {
  try {
    const { name, email, password } = req.body;

    // تحقق من أن البيانات موجودة
    if (!name || !email || !password) throw new Error("Data not provided");

    console.log({ name, email, password });

    const user = await User.create({ name, email, password });
    const data = {
      user: {
        id: user.id,
      },
    };

    const token = jwt.sign(data, "secret_ecom");

    // إرسال استجابة بنجاح العملية
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, error: error.errorResponse.index });
  }
}
async function getUser(req, res) {
  const q = await User.findOne({ email: req.query.email });
  if (q) {
    if (q.password === req.query.password) {
      const data = { user: { id: q.id } };
      token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    } else {
      res.json({ success: false, error: 2 });
    }
  } else {
    res.json({ success: false, error: 1 });
  }
}

async function deleteUser(req, res) {
  try {
    // نفترض أن الـ userId تم إرساله كـ query parameter أو في body
    const { userId } = req.body; // يمكن أيضًا استخدام req.body أو req.params

    // تحقق من أن userId تم تمريره
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    // ابحث واحذف المستخدم بناءً على userId
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // استجابة بنجاح الحذف
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    // معالجة الأخطاء
    console.error(error);
    return res
      .status(500)
      .json({ message: "An error occurred while deleting the user" });
  }
}

const postAddCard = async (req, res) => {
  const token = req.headers["auth-token"]; // استخراج التوكن من الترويسة

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No Token Provided." });
  }

  try {
    const secretKey = "secret_ecom"; // المفتاح السري المستخدم في التوقيع
    const verified = jwt.verify(token, secretKey); // التحقق من التوكن
    const datauser = await User.findByIdAndUpdate(
      verified.user.id, // المعرف الذي يتم التحديث بناءً عليه
      { dataUser: req.body }, // البيانات التي يتم التحديث بها، باستخدام مشغل $set
      { new: true } // خيار لإرجاع البيانات المحدثة بدلاً من القديمة
    ); // "id" هو المعرف الموجود في التوكن

    if (!datauser) {
      return res.status(404).json({ message: "User not found" });
    }

    // متابعة العملية بعد العثور على المستخدم
    res.json(datauser);
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

const getcart = async (req, res) => {
  const token = req.headers["auth-token"]; // استخراج التوكن من الترويسة

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No Token Provided." });
  }

  try {
    const secretKey = "secret_ecom"; // المفتاح السري المستخدم في التوقيع
    const verified = jwt.verify(token, secretKey); // التحقق من التوكن
    console.log(verified);
    const datauser = await User.findById(verified.user.id);

    if (!datauser) {
      return res.status(404).json({ message: "User not found" });
    }

    // متابعة العملية بعد العثور على المستخدم
    res.json(datauser.dataUser);
  } catch (err) {
    return res.status(400).json({ message: "Invalid Token" });
  }
};

const getUserName = async (req, res) => {
  const token = req.headers["auth-token"];
  try {
    const secretKey = "secret_ecom"; // المفتاح السري المستخدم في التوقيع
    const verified = jwt.verify(token, secretKey); // التحقق من التوكن
    console.log(verified);
    const datauser = await User.findById(verified.user.id);
    res.json({ success: true, name: datauser.name });
  } catch (err) {
    return res.status(400).json({ success: false });
  }
};

const postComments = async (req, res) => {
  try {
    let { products } = await productSchema.findById("66f446e82cebf35095a3b6ba");
    const { text, name, productId } = req.body;
    console.log(req.body);
    products = products.map((e, i) => {
      if (productId == i + 1) {
        let comments = e.comments;
        console.log(comments);
        return {
          ...e,
          comments: [...comments, { text: text, name: name }],
        };
      } else
        return {
          ...e,
        };
    });

    const addComments = await productSchema.findByIdAndUpdate(
      "66f446e82cebf35095a3b6ba",
      { products: products },
      { new: true }
    );
    res.json(addComments);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getProducts,
  postProducts,
  deleteProducts,
  postSingup,
  getUser,
  deleteUser,
  postAddCard,
  getcart,
  getUserName,
  postComments,
};
