const Post = require("../models/Post");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../utils/verifyToken");

const router = require("express").Router();

// Get Post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All Posts
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let posts;
    if (username) {
      posts = await Post.find({ username });
    } else if (catName) {
      posts = await Post.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true },
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// COMMENT
// router.post('/:id/comments', async (req, res) => {
//   const { id } = req.params;
//   const { value } = req.body;

//   const comment = await Post.findById(id);

//   comment.comments.push(value);

//   const updatedComment = await Post.findByIdAndUpdate(id, comment, {
//     new: true,
//   });

//   res.json(updatedComment);
// });

// Comment 2
// router.post("/comments", (req, res) => {
// const { id, comment,name } = req.body;
// console.log(id);
// console.log(comment);
// try {
//   const updatedcomments = await Post.updateOne(
//     { _id: id },
//     {
//       $push: {
//         comments: `${name}: ${comment}`,
//       },
//     }
//   );
//   res.status(200).json({ updatedcomments, message: "sucessfully commented" });
// } catch (error) {
//   console.log(error);
// }
// });
// Like 2

// router.patch("/likepost/:id/:userId", async (req, res) => {
//   const { id, userId, creator, name } = req.params;
//   console.log(id);
//   console.log(userId);
//   try {
//     const user = await Post.findOne({ _id: id, likes: userId });
//     if (user) {
//       const updatedpost2 = await Post.updateOne(
//         { _id: id },
//         {
//           $pull: {
//             likes: { $in: [userId] },
//           },
//         },
//       );
//       await userInfo.updateOne(
//         { creator: creator },
//         {
//           $push: {
//             notification: `${name} liked your post`,
//           },
//         },
//       );
//       console.log("de");
//       res.status(200).json({ message: "sucessfully reacted" });
//     } else {
//       const updatedpost = await Post.updateOne(
//         { _id: id },
//         {
//           $addToSet: {
//             likes: userId,
//           },
//         },
//       );
//       res.status(200).json({ message: "sucessfully reacted" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// LIKE
// router.put("/like", verifyToken, (req, res) => {
//   Post.findByIdAndUpdate(
//     req.body.postId,
//     {
//       $push: { likes: req.user._id },
//     },
//     {
//       new: true,
//     },
//   )
//     .populate("postedBy", "_id username firstname lastname email")
//     .populate("comments.postedBy", "_id username firstname lastname email")
//     .exec((err, result) => {
//       if (err) {
//         res.status(422).json({ error: err });
//       } else {
//         res.json(result);
//       }
//     });
// });

// UNLIKE
// router.put("/unlike", verifyToken, (req, res) => {
//   Post.findByIdAndUpdate(
//     req.body.postId,
//     {
//       $pull: { likes: req.user._id },
//     },
//     {
//       new: true,
//     },
//   )
//     .populate("postedBy", "_id username firstname lastname email")
//     .populate("comments.postedBy", "_id username firstname lastname email")
//     .exec((err, result) => {
//       if (err) {
//         res.status(422).json({ error: err });
//       } else {
//         res.json(result);
//       }
//     });
// });

module.exports = router;
