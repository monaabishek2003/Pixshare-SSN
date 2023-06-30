import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId()
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Rajesh",
    lastName: "Krishna",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p1.jpg",
    friends: [],
    location: "Mechanical",
    occupation: "4rd Year",
    viewedProfile: 10,
    impressions:15,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Joseph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p2.jpeg",
    friends: [],
    location: "IT",
    occupation: "4th Year",
    viewedProfile: 8,
    impressions: 9,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Kalyani",
    lastName: "K",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p3.jpeg",
    friends: [],
    location: "EEE",
    occupation: "3rd Year",
    viewedProfile: 7,
    impressions: 11,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  }
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Rajesh",
    lastName: "Krishna",
    location: "Mechanical",
    description: "The Place I'll never Forget in my life",
    picturePath: "post1.jpg",
    userPicturePath: "p1.jpg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Steve",
    lastName: "Joseph",
    location: "IT",
    description:
      "360' of Fountain",
    picturePath: "post2.jpg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Kalyani",
    lastName: "K",
    location: "EEE",
    description:
      "Sometimes All you need is a Good companion to talk with at Clock Tower",
    picturePath: "post3.jpg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
    ],
  }
];
