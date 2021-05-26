/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoContactsRepository')} obj.ContactsRepository
 */
 module.exports = ({ AccountRepository }) => {
    return async ({ account, entity, money }) => { // parameters
      const newAccount = {
        account: account,
        entity: entity,
        money: money
      }
      return AccountRepository.add(newAccount)
    }
  }
  