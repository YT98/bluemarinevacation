import mongoose from 'mongoose';

// Estates Schema
const estateSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  mainImageUrl: {
    type: String,
    require: true
  },
  information: {
    description: {
      type: String,
      require: true
    },
    capacity: {
      type: String,
      require: true
    },
    equipment: {
      type: String,
      require: true
    },
    moreFeatures: {
      type: String,
      require: true
    }
  },
  location:{
    lat: {
      type: String,
      require: true
    },
    lon: {
      type: String,
      require: true
    }
  },
  imageGalleryUrls: [String]
});

const Estate = module.exports = mongoose.model('Estate', estateSchema);

// Get EstateS
module.exports.getEstates = (callback) => {
  Estate.find(callback);
};

// Get Estate /:id
module.exports.getEstateById = (id, callback) => {
  Estate.findById(id, callback)
};

// Post Estate
module.exports.addEstate = (estate, callback) => {
    Estate.create(estate, callback);
};

// Update Estate
// Delete Estate /:id
module.exports.deleteEstate = (id, estate, callback) => {
    var query = {_id: id};
    Estate.remove(query, estate, callback);
};
