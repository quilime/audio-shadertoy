module.exports.configureSchema = function(Schema, mongoose) {
  mongoose.model('Shader', new Schema({
    short_id : { type: String, unique: true },
    code_lzma : String,
    author : String,
    img : String,
    date : { type: Date, default: Date.now },
    track : {
        artist : String,
        title : String,
        url : String,
        duration : Number
    }
  }));
};
