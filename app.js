const express = require('express');
const app = express();
const userModel = require('./model/user');
const postModel = require('./model/post');

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/create', async (req, res) => {
  const user = await userModel.create({
    username: 'gobinda',
    age: 18,
    email: 'gobinda@gmail.com',
  });

  res.send(user);
})

app.get('/post/create', async (req, res) => {
  const post = await postModel.create({
    postdata: 'ye hai ak post',
    user: '66363cd2ec64cb68462b032b'
  })

  const user = await userModel.findOne({_id: post.user})
  user.posts.push(post._id);
  await user.save();
  console.log(user)
  
  res.send({post, user});
})

app.listen(3000);