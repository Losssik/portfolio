import CodeBlock from "../components/CodeBlock/CodeBlock";

const PopulateEN = () => {
  return (
    <div className="article">
      <h1>Populate Method in Mongoose</h1>

      <p>
        The <b>populate()</b> method in Mongoose automatically replaces a
        referenced field (ObjectId) with the actual document from another
        collection.
      </p>

      <h3>Creating a Schema with a Reference</h3>

      <p>
        The <b>populate</b> method works with fields that store references to
        other documents. To define such a relationship, we use the <b>type</b>{" "}
        and <b>ref</b> options in the schema:
      </p>

      <CodeBlock
        code={`const userSchema = new mongoose.Schema({
  username: String,
  email: String
});

const postSchema = new mongoose.Schema({
  title: String,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

module.exports = {
  User,
  Post
};`}
      />

      <p>
        In the example above, the <strong>postedBy</strong> field stores a
        reference to the <strong>User</strong> model. This creates a
        relationship between posts and users.
      </p>

      <h3>Using populate()</h3>

      <p>
        To retrieve the full referenced document, use the <b>populate()</b>{" "}
        method and pass the field name as an argument:
      </p>

      <CodeBlock
        code={`Post.find()
  .populate("postedBy")
  .then(posts => console.log(posts));`}
      />
      <h3>Additional example</h3>
      <CodeBlock
        code={`const categorySchema = new mongoose.Schema({
  categoryName: String
});

const productSchema = new mongoose.Schema({
  name: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category"
  }
});

const Category = mongoose.model("Category", categorySchema);
const Product = mongoose.model("Product", productSchema);`}
      />
      <p>
        Let's say you want to query products which belong to category "sport".
        The easiest way to achieve this is to make 2 queries:
      </p>
      <CodeBlock
        code={`const category = await Category.findOne({ categoryName: "sport" });

const products = await Product.find({ category: category._id })
  .populate("category");`}
      />
    </div>
  );
};

export default PopulateEN;
