import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.model.ts";
import jwt from "jsonwebtoken";

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const isEmailExist = await User.findOne({ email: req.body.email });

    if (!isEmailExist) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hash,
      });
      await newUser.save();
      res.status(200).send("User created");
    } else {
      return res.status(403).send("Email Already exist");
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).send("Email not found");
    } else {
      const isCorrectPassword = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (isCorrectPassword) {
        const token = jwt.sign(
          {
            id: user._id,
          },
          "ddddd"
        );

        const { password, ...other } = user._doc;

        res
          .cookie("accessTOken", token, {
            httpOnly: true,
          })
          .status(200)
          .send(other)
          .redirect("/");
      } else {
        return res.status(403).send("incorrect password");
      }
    }
  } catch (error) {
    return next(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none", //because url of server and client are not the same
      secure: true,
    })
    .status(200)
    .send("User has been logged out");
};
