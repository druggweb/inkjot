if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 
  'mongodb://dominkjot:dominkjot@ds117729.mlab.com:17729/inkjot-prod'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/inkjot-dev'}
}