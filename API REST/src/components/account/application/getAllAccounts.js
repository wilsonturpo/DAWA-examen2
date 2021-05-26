/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async () => { // parameters
      return AccountRepository.getAll()
    }
  }
  