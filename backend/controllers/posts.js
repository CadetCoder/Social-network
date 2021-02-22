const token = require("../middleware/token");
const db = require("../models"); // to access db tables
const fs = require("fs"); // file system -> The fs module is responsible for all the asynchronous or synchronous file I/O operations.

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      attributes: [
          "id",
          "message",
          "imageUrl",
          "link",
          "createdAt"],
      order: [[
          "createdAt",
          "DESC"]],
      include: [
        {
          model: db.User,
          attributes: [
              "username",
              "id",
              "photo"
            ],
        },
        {
          model: db.Like,
          attributes: ["UserId"],
        },
        {
          model: db.Comment,
          attributes: [
              "message",
              "username",
              "UserId",
              "id"
            ],
          order: [[
              "createdAt",
              "DESC"
            ]],
          include: [
            {
              model: db.User,
              attributes: [
                  "photo",
                  "username"
                ],
            },
          ],
        },
      ],
    });
    res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send({
      error: "An error occurred while retrieving posts",
    });
  }
};
// display most liked posts
exports.getHotPosts = async (req, res) => {
  try {
    const posts = await db.Post.findAll({
      attributes: [
        "id",
        "message",
        "imageUrl",
        "link",
        "createdAt",
        [
          db.sequelize.literal(
            "(SELECT COUNT(*) FROM Likes WHERE Likes.PostId = Post.id)"
          ),
          "LikeCount",
        ],
      ],
      order: [[db.sequelize.literal("LikeCount"), "DESC"]],

      include: [
        {
          model: db.User,
          attributes: ["username", "id", "photo"],
        },
        {
          model: db.Like,
          attributes: ["PostId", "UserId"],
        },
        {
          model: db.Comment,
          order: [["createdAt", "DESC"]],
          attributes: ["message", "username", "UserId", "id"],
          include: [
            {
              model: db.User,
              attributes: ["photo", "username"],
            },
          ],
        },
      ],
    });
    res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send({
      error: "An error occurred while retrieving posts",
    });
  }
};
exports.getOnePost = async (req, res) => {
  try {
    const post = await db.Post.findOne({
      // here we get the post with the provided id including the necessary tables and attributes
      where: { id: req.params.id },
      include: [
        {
          model: db.User,
          attributes: ["username", "photo", "id"],
        },
        {
          model: db.Like,
          attributes: ["PostId", "UserId"],
        },
        {
          model: db.Comment,
          order: [["createdAt", "DESC"]],
          attributes: ["message", "username", "UserId"],
          include: [
            {
              model: db.User,
              attributes: ["photo", "username"],
            },
          ],
        },
      ],
    });
    res.status(200).json(post);
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
exports.createPost = async (req, res) => {
  const userId = token.getUserId(req);
  let imageUrl;
  try {
    const user = await db.User.findOne({
      attributes: ["username", "id", "photo"],
      where: { id: userId },
    });
    if (user !== null) {
      if (req.file) {
        imageUrl = `${req.protocol}://${req.get("host")}/upload/${
          req.file.filename
        }`;
      } else {
        imageUrl = null;
      }
      const post = await db.Post.create({
        include: [
          {
            model: db.User,
            attributes: ["username", "photo", "id"],
          },
        ],
        message: req.body.message,
        link: req.body.link,
        imageUrl: imageUrl,
        UserId: user.id,
      });

      res
        .status(201)
        .json({ post: post, messageRetour: "Post added successfully!!" });
    } else {
      res.status(400).send({ error: "Error " });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server Error" });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const userId = token.getUserId(req);
    const checkAdmin = await db.User.findOne({ where: { id: userId } });
    const post = await db.Post.findOne({ where: { id: req.params.id } });
    if (userId === post.UserId || checkAdmin.admin === true) {
      if (post.imageUrl) {
        const filename = post.imageUrl.split("/upload")[1];
        fs.unlink(`upload/${filename}`, () => {
          db.Post.destroy({ where: { id: post.id } });
          res.status(200).json({ message: "Post deleted successfully!!" });
        });
      } else {
        db.Post.destroy({ where: { id: post.id } }, { truncate: true });
        res.status(200).json({ message: "Post deleted successfully!!" });
      }
    } else {
      res.status(400).json({ error: error });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

exports.updatePost = async (req, res) => {
  try {
    let newImageUrl;
    const userId = token.getUserId(req);
    let post = await db.Post.findOne({ where: { id: req.params.id } });
    if (userId === post.UserId) {
      if (req.file) {
        newImageUrl = `${req.protocol}://${req.get("host")}/upload/${
          req.file.filename
        }`;
        if (post.imageUrl) {
          const filename = post.imageUrl.split("/upload")[1];
          fs.unlink(`upload/${filename}`, (err) => {
            if (err) console.log(err);
            else {
              console.log(`Deleted file: upload/${filename}`);
            }
          });
        }
      }
      if (req.body.message) {
        post.message = req.body.message;
      }
      post.link = req.body.link;
      post.imageUrl = newImageUrl;
      const newPost = await post.save({
        fields: ["message", "link", "imageUrl"],
      });
      res.status(200).json({ newPost: newPost, messageRetour: "Post updated successfully!" });
    } else {
      res.status(400).json({ error: error });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

exports.likePost = async (req, res, next) => {
  try {
    const userId = token.getUserId(req);
    const postId = req.params.id;
    const user = await db.Like.findOne({
      where: { UserId: userId, PostId: postId },
    });
    if (user) {
      await db.Like.destroy(
        { where: { UserId: userId, PostId: postId } },
        { truncate: true, restartIdentity: true }
      );
      res.status(200).send({ message: "Post unlike successfully!!" });
    } else {
      await db.Like.create({
        UserId: userId,
        PostId: postId,
      });
      res.status(201).json({ message: "Post liked!" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
exports.addComment = async (req, res) => {
  try {
    const comment = req.body.commentMessage;
    const username = req.body.commentUsername;
    const newComment = await db.Comment.create({
      message: comment,
      username: username,
      UserId: token.getUserId(req),
      PostId: req.params.id,
    });

    res
      .status(201)
      .json({ newComment, messageRetour: "Comment added successfully!!" });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const userId = token.getUserId(req);
    const checkAdmin = await db.User.findOne({ where: { id: userId } });
    const comment = await db.Comment.findOne({ where: { id: req.params.id } });

    if (userId === comment.UserId || checkAdmin.admin === true) {
      db.Comment.destroy({ where: { id: req.params.id } }, { truncate: true });
      res.status(200).json({ message: "comment deleted successfully" });
    } else {
      res.status(400).json({ message: "Invalid operation" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
