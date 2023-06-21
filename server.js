import mongoose from "mongoose";
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Rafael' });
// kitty.save().then(() => console.log('meow')).catch( e => {
//   console.log(e)
// });

const doc = await Cat.find()
console.log(doc)