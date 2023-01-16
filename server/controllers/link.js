const Link = require("../models/link");

export const createLink = async (req, res) => {
  try {
    const linkPost = await new Link({ ...req.body, postedBy: req.user._id });

    linkPost.save();
    console.log("Link passed ===>>", linkPost);

    return res.json(linkPost);
  } catch (err) {
    console.log(err);
  }
};

export const readLink = async (req, res) => {
  try {
    const allLinks = await Link.find().sort({ createdAt: -1 }).limit(20);
    res.json(allLinks);
  } catch (err) {
    console.log(err);
    res.json(err);
  }

  // Link.find({}, (err, result) => {
  //   if(err){
  //     res.json({error:err})
  //   }
  //   else{
  //     res.json(result)
  //   }
  // })
};

export const updateLink = async () => {
  //
};
export const removeLink = async () => {
  //
};
