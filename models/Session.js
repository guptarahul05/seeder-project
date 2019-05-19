const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

class Session extends Sequelize.Model {}

Session.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    SessionDate: Sequelize.DATE,
    numberOfPages: Sequelize.INTEGER,
    cell_count: Sequelize.INTEGER
  },
  { sequelize, modelName: 'session' }
);
module.exports = Session;

// 7. client's_user's_session's_table :
// ------------------------------------------
// 	{
// 		#client_id :
// 		#user_id :
// 		#session_id :
// 		*unique_session_info_key :
// 		session_date :
// 		no_of_pages :
// 		cell_count :
// 		final_output_type :
// 		final_output_file_id :
// 		final_input_file_id :
// 		#autofill_mapper_info_id :
// 		status :
// 		#error_log_id :
// 	}
