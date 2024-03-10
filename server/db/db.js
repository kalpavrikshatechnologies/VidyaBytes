const mongoose=require('mongoose');


module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect('mongodb+srv://vidyabytes:vidyabytes%40123@vidyabytes.exaexyy.mongodb.net/vidyabytes');
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};