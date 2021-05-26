/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ EntityRepository }) => {
    return async ({ name }) => { // parameters
      const newEntity = {
        name: name
      }
      return EntityRepository.add(newEntity)
    }
  }
  