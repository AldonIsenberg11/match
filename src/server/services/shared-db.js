import mongoose from 'mongoose'

let handleFailure = function() {
  console.log("There was an error");
  return process.exit(1)
}

export default {
  connect: function() {

    let connection = mongoose.connection

    mongoose.connection.on("error", handleFailure)
    mongoose.connection.once("open", console.log(`MongoDB connected to[${connection.db.databaseName}]`))
    mongoose.connect('mongodb://localhost:27017/wrestle-db')
  }
}
