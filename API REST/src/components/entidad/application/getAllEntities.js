/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ EntityRepository }) => {
    return async () => { // parameters
      return EntityRepository.getAll()
    }
  }
  